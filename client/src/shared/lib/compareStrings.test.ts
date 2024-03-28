import compareStrings from "./compareStrings";

describe("compareStrings", () => {
  it("includes", () => {
    expect(compareStrings("apple", "app")).toBe(true);
  });

  it("not includes", () => {
    expect(compareStrings("apple", "ad")).toBe(false);
  });

  it("empty string", () => {
    expect(compareStrings("apple", "")).toBe(true);
  });
});
