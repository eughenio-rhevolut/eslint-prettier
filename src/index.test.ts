import { it, expect } from "@jest/globals";
import { sayMyName } from "./index";

it("sayMyName", () => {
  const sayName = sayMyName();
  expect(sayName).toBe("Eughenio");
});
