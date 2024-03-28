import compareStrings from "./compareStrings";

test("compare strings", () => {
    expect(compareStrings("apple", "app")).toBe(true)
});
