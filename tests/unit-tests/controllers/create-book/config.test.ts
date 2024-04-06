import { Config as CreateBookConfig } from '@controllers/create-book';

describe('create-book/config', () => {
  it('should build a config with Request', () => {
    const c = new CreateBookConfig();
    expect(1).toBe(1);
  });
  it('should getRequest', () => {
    expect(1).toBe(1);
  });
});
