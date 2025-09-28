import { add, user } from "./app";
import { describe, it, expect } from "vitest";

describe("math function", () => {
  it("adds two numbers", () => {
    expect(add(2, 4)).toBe(6); // ✅ fixed parentheses and expected value
  });
});

describe("user function", () => {
  it("get user", () => {
    let data = user();
    expect(data.name).toBeTruthy;
    expect(data.id).toBeTruthy;
  });
});
