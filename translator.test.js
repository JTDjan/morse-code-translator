// imports of functions & global jest 
import { translate} from "./transalor.js"
import { expect , it} from "@jest/globals"

// test that should translate all the letters of the alphabet 

it (" Shoould translate the letter a to . -", () => {
  const result = translate("a")
  expect(result).toBe(".-")
});