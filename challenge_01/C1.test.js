import { test, expect } from "@jest/globals";
import { solveEncryptedMessage } from "./C1";

test("keys house HOUSE house keys", () => {
  const message = "keys house HOUSE house keys";
  const result = "keys2house3";
  expect(solveEncryptedMessage(message)).toBe(result);
});

test("cup te a cup", () => {
  const message = "cup te a cup";
  const result = "cup2te1a1";
  expect(solveEncryptedMessage(message)).toBe(result);
});

test("houses house housess", () => {
  const message = "houses house housess";
  const result = "houses1house1housess1";
  expect(solveEncryptedMessage(message)).toBe(result);
});

test("edge case with whitespace at the end", () => {
  const message = "halcon jojo halcon ";
  const result = "halcon2jojo1";
  expect(solveEncryptedMessage(message)).toBe(result);
});
