import defaulthw, {hw} from './index';

describe("default", () => {
  it('is Hello World', () => {
    expect(defaulthw).toBe("Hello World");
  })
})

describe("hw", () => {
  it('makes Hello World', () => {
    expect(hw()).toBe("Hello World");
  })
})