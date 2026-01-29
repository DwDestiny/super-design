export function buildIndex(designs) {
  const groups = new Map();
  designs.forEach(item => {
    if (!groups.has(item.group)) {
      groups.set(item.group, []);
    }
    groups.get(item.group).push(item);
  });
  groups.forEach(items => {
    items.sort((a, b) => {
      const va = a.variant || '';
      const vb = b.variant || '';
      if (va !== vb) return va.localeCompare(vb);
      const na = a.version || 0;
      const nb = b.version || 0;
      if (na !== nb) return na - nb;
      return a.modified_at.localeCompare(b.modified_at);
    });
  });
  return { groups };
}

export function getLatestByVariant(items) {
  const byVariant = new Map();
  items.forEach(item => {
    const key = item.variant || 'default';
    const current = byVariant.get(key);
    if (!current || (item.version || 0) > (current.version || 0)) {
      byVariant.set(key, item);
    }
  });
  return byVariant;
}

export function pickInitialVariant(items) {
  const byVariant = getLatestByVariant(items);
  if (byVariant.has('A')) return byVariant.get('A');
  if (byVariant.has('B')) return byVariant.get('B');
  if (byVariant.has('C')) return byVariant.get('C');
  return items[0];
}

export function getVariantsForGroup(items) {
  const variants = Array.from(new Set(items.map(item => item.variant).filter(Boolean)));
  return variants.sort();
}

export function getVersionsForVariant(items, variant) {
  return items
    .filter(item => (item.variant || 'default') === variant)
    .sort((a, b) => (a.version || 0) - (b.version || 0));
}

export function computeGridPositions(count, columns, cardWidth, cardHeight, gap) {
  const positions = [];
  for (let i = 0; i < count; i += 1) {
    const row = Math.floor(i / columns);
    const col = i % columns;
    positions.push({
      x: col * (cardWidth + gap),
      y: row * (cardHeight + gap)
    });
  }
  return positions;
}

function isOverlapping(next, existing, cardWidth, cardHeight) {
  return (
    next.x < existing.x + cardWidth &&
    existing.x < next.x + cardWidth &&
    next.y < existing.y + cardHeight &&
    existing.y < next.y + cardHeight
  );
}

export function resolveLayoutPositions(cards, columns, cardWidth, cardHeight, gap, layoutState) {
  const positions = computeGridPositions(cards.length, columns, cardWidth, cardHeight, gap);
  const stored = layoutState?.useStored ? layoutState.items || {} : {};
  const occupied = [];
  const available = positions.slice();
  const resolved = [];

  const pickNextAvailable = () => {
    while (available.length) {
      const candidate = available.shift();
      const overlaps = occupied.some(item => isOverlapping(candidate, item, cardWidth, cardHeight));
      if (!overlaps) {
        return candidate;
      }
    }
    return { x: 0, y: 0 };
  };

  cards.forEach(card => {
    const storedPos = stored[card.id];
    if (storedPos) {
      const overlaps = occupied.some(item => isOverlapping(storedPos, item, cardWidth, cardHeight));
      if (!overlaps) {
        resolved.push({ x: storedPos.x, y: storedPos.y });
        occupied.push(storedPos);
        return;
      }
    }
    const fallback = pickNextAvailable();
    resolved.push(fallback);
    occupied.push(fallback);
  });

  return resolved;
}

export function computeCardSize(device, previewScale, chromeHeight, chromeWidth) {
  const width = device.width * previewScale + chromeWidth;
  const height = device.height * previewScale + chromeHeight;
  return { width, height };
}

function getFallbackCellSize(deviceSizes, previewScale, chromeHeight, chromeWidth) {
  const devices = Object.values(deviceSizes || {}).filter(Boolean);
  if (!devices.length) {
    return null;
  }
  const maxDevice = devices.reduce(
    (acc, device) => ({
      width: Math.max(acc.width, device.width || 0),
      height: Math.max(acc.height, device.height || 0)
    }),
    { width: 0, height: 0 }
  );
  if (!maxDevice.width || !maxDevice.height) {
    return null;
  }
  return computeCardSize(maxDevice, previewScale, chromeHeight, chromeWidth);
}

export function computeGridCellSize(cards, deviceSizes, previewScale, chromeHeight, chromeWidth) {
  if (!Array.isArray(cards) || cards.length === 0) {
    const fallback = getFallbackCellSize(deviceSizes, previewScale, chromeHeight, chromeWidth);
    return fallback || { width: 900, height: 700 };
  }
  let maxWidth = 0;
  let maxHeight = 0;
  const fallbackDevice = deviceSizes?.desktop;
  cards.forEach(card => {
    const deviceKey = getCardDevice(card?.device);
    const device = deviceSizes?.[deviceKey] || fallbackDevice;
    if (!device) return;
    const size = computeCardSize(device, previewScale, chromeHeight, chromeWidth);
    if (size.width > maxWidth) maxWidth = size.width;
    if (size.height > maxHeight) maxHeight = size.height;
  });
  if (!maxWidth || !maxHeight) {
    const fallback = getFallbackCellSize(deviceSizes, previewScale, chromeHeight, chromeWidth);
    return fallback || { width: 900, height: 700 };
  }
  return { width: maxWidth, height: maxHeight };
}

export function buildFileUrl(path) {
  if (!path) return '/files/';
  return `/files/${encodeURI(path)}`;
}

export function getLayoutStorageKey() {
  return 'superdesign-board-layout';
}

export function getDefaultColumns() {
  return 3;
}

export function buildLayoutPayload(items, cellSize) {
  return {
    items: items || {},
    cell: {
      width: cellSize?.width || 0,
      height: cellSize?.height || 0
    }
  };
}

export function normalizeLayout(raw, cellSize) {
  if (!raw) return { items: {}, useStored: false };
  try {
    const parsed = JSON.parse(raw);
    if (parsed && parsed.items && parsed.cell) {
      const widthMatch = Math.abs((parsed.cell.width || 0) - (cellSize?.width || 0)) < 2;
      const heightMatch = Math.abs((parsed.cell.height || 0) - (cellSize?.height || 0)) < 2;
      if (widthMatch && heightMatch) {
        return { items: parsed.items || {}, useStored: true };
      }
      return { items: parsed.items || {}, useStored: false };
    }
    if (parsed && typeof parsed === 'object') {
      return { items: parsed, useStored: false };
    }
  } catch (error) {
    return { items: {}, useStored: false };
  }
  return { items: {}, useStored: false };
}

export function getDeviceLabel(key) {
  if (key === 'desktop') return 'Desktop';
  if (key === 'tablet') return 'Tablet';
  if (key === 'mobile') return 'Mobile';
  return 'Device';
}

export function getCardDevice(key) {
  if (key === 'desktop' || key === 'tablet' || key === 'mobile') {
    return key;
  }
  return 'desktop';
}

export function getDeviceIconSvg(key) {
  if (key === 'tablet') {
    return '<rect x="6" y="4" width="12" height="16" rx="2"/><path d="M12 18h.01"/>';
  }
  if (key === 'mobile') {
    return '<rect x="8" y="2" width="8" height="20" rx="2"/><path d="M12 19h.01"/>';
  }
  return '<path d="M3 4h18v12H3z"/><path d="M8 20h8"/><path d="M12 16v4"/>';
}

export function getThemeIconSvg(theme) {
  if (theme === 'light') {
    return '<circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />';
  }
  return '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />';
}

export function getToastConfig(type) {
  if (type === 'success') return { duration: 1600, tone: 'success' };
  if (type === 'warning') return { duration: 2200, tone: 'warning' };
  if (type === 'error') return { duration: 2400, tone: 'error' };
  return { duration: 1800, tone: 'info' };
}

export function getConfirmCopy(fileName) {
  const safeName = fileName || 'this file';
  return {
    title: 'Delete file?',
    message: `Delete "${safeName}" permanently? This cannot be undone.`
  };
}
