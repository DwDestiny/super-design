#!/usr/bin/env node
import assert from 'assert';
import {
  buildIndex,
  pickInitialVariant,
  computeGridPositions,
  computeCardSize,
  computeGridCellSize,
  getDeviceLabel,
  getCardDevice,
  getDeviceIconSvg,
  getThemeIconSvg,
  getToastConfig,
  getConfirmCopy
} from '../assets/dashboard/board_state.js';

const fixtures = [
  { group: 'alpha', variant: 'A', version: 1, modified_at: '2026-01-01T00:00:00' },
  { group: 'alpha', variant: 'A', version: 2, modified_at: '2026-01-02T00:00:00' },
  { group: 'alpha', variant: 'B', version: 1, modified_at: '2026-01-01T00:00:00' }
];

const index = buildIndex(fixtures);
const cards = [];
index.groups.forEach(items => {
  items.forEach(item => {
    cards.push({ id: item.name, display: item, device: 'desktop' });
  });
});

const positions = computeGridPositions(cards.length, 2, 100, 80, 10);
assert.strictEqual(positions.length, 3);

const size = computeCardSize({ width: 1000, height: 800 }, 1, 38, 0);
assert.deepStrictEqual(size, { width: 1000, height: 838 });

const deviceSizes = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 1024, height: 768 },
  mobile: { width: 390, height: 844 }
};
const cellSize = computeGridCellSize(
  [{ device: 'desktop' }, { device: 'tablet' }],
  deviceSizes,
  1,
  38,
  0
);
assert.deepStrictEqual(cellSize, { width: 1440, height: 938 });

assert.strictEqual(getDeviceLabel('tablet'), 'Tablet');
assert.strictEqual(getCardDevice('unknown'), 'desktop');
assert.ok(getDeviceIconSvg('desktop').includes('path'));
assert.ok(getDeviceIconSvg('tablet').includes('rect'));
assert.ok(getThemeIconSvg('dark').includes('A9 9'));
assert.ok(getThemeIconSvg('light').includes('circle'));
assert.strictEqual(getToastConfig('success').duration, 1600);
assert.strictEqual(getToastConfig('warning').duration, 2200);
assert.strictEqual(getToastConfig('unknown').duration, 1800);
assert.ok(getConfirmCopy('design-home.html').message.includes('design-home.html'));

console.log('OK');
