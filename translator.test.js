// imports of functions & global jest 
import { translate, englishWord} from "./transalor.js"
import { expect , it} from "@jest/globals"

// test that should translate all the letters of the alphabet 

xdescribe ("Alphabet should translate to mose code", () => {


  it (" Should translate the letter a to . -", () => {
    const result = translate("a")
    expect(result).toBe(".-")
  });
  
  it (" Should translate the letter b to . -", () => {
    const result = translate("b")
    expect(result).toBe("-...")
  });
  
  it (" Should translate the letter c to . -", () => {
    const result = translate("c")
    expect(result).toBe("-.-.")
  });
  
  it (" Should translate the letter d to . -", () => {
    const result = translate("d")
    expect(result).toBe("-..")
  });
  
  it (" Should translate the letter j to . -", () => {
    const result = translate("j")
    expect(result).toBe(".---")
  });

})


// test for translating english word
it("It should take a word & convert it to morse code",()=>{
  let result = englishWord("hello j");
  expect(result).toBe("......-...-..--- / .---");
} )
