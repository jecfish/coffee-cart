import { describe, it, expect } from "vitest";

function togglePromo(cartCount: number): boolean {
  return cartCount > 0 && cartCount % 3 === 0;
}

describe("togglePromo()", () => {
  it("Nur true, wenn es Größer null oder Vielfaches von 3 ", () => {
    expect(togglePromo(0)).toBe(false);
    expect(togglePromo(1)).toBe(false);
    expect(togglePromo(3)).toBe(true);
    expect(togglePromo(5)).toBe(false);
    expect(togglePromo(6)).toBe(true);
  });
});
