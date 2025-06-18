import { describe, it, expect } from "vitest";

// reine Logik aus submit() extrahiert:
function canSubmit(name: string, email: string): boolean {
  return !!name && !!email;
}

describe("canSubmit()", () => {
  it("returns false when both fields are empty", () => {
    expect(canSubmit("", "")).toBe(false);
  });

  it("returns false when only name is filled", () => {
    expect(canSubmit("Ali", "")).toBe(false);
  });

  it("returns false when only email is filled", () => {
    expect(canSubmit("", "a@b.de")).toBe(false);
  });

  it("returns true when both fields are filled", () => {
    expect(canSubmit("Ali", "a@b.de")).toBe(true);
  });
});
