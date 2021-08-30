import { formatTemperature } from '../../src/common/utils';

describe('Utils functions', () => {
  test('Return formatted temperature', () => {
    expect(formatTemperature(10, 'standard')).toEqual('10K');
    expect(formatTemperature(10, 'metric')).toEqual('10°C');
    expect(formatTemperature(10, 'imperial')).toEqual('10°F');
  });
});
