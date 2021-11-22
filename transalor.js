export const translate =(letter) => {
  switch (letter) {
    case "a": 
     return ".-";
     break;

    case "b":
     return "-...";
     break;

    case "c":
     return "-.-.";
      break;

    case "d": 
      return "-..";
      break;

    case "e": 
     return ".";
     break;

    case "f": 
     return "..-.";
     break;

    case "g": 
     return "--.";
     break;

    case "h": 
     return "....";
     break;

    case "i": 
     return "..";
     break;

    case "j": 
     return ".---";
     break;

    case "k": 
     return "-.-";
     break;

    case "l": 
     return ".-..";
     break;

    case "m": 
     return "--";
     break;

    case "n": 
     return "-.";
     break;

     case "o": 
     return "---";
     break;

    case "p": 
     return ".--.";
     break;

    case "q": 
     return "--.-";
     break;

    case "r": 
     return ".-.";
     break;

    case "s": 
     return "...";
     break;

    case "t": 
     return "-";
     break;

    case "u": 
     return "..-";
     break;

    case "v": 
     return "...-";
     break;

    case "w": 
     return ".--";
     break; 
     
    case "x": 
     return "-..-";
     break; 

    case "y": 
     return "-.--";
     break; 

    case "z": 
     return "--..";
     break;

  
  }
} 

// create an array of strings to take in the input word 
// the word gets spilt into individual letters

 export const englishWord = (eWord) => {
    let eWordArr = eWord.split("");
    const morseLetterArr = eWordArr.map((letter)=>{
        switch (letter)  {
          case "a": 
          return ".-";
          break;
     
         case "b":
          return "-...";
          break;
     
         case "c":
          return "-.-.";
           break;
     
         case "d": 
           return "-..";
           break;
     
         case "e": 
          return ".";
          break;
     
         case "f": 
          return "..-.";
          break;
     
         case "g": 
          return "--.";
          break;
     
         case "h": 
          return "....";
          break;
     
         case "i": 
          return "..";
          break;
     
         case "j": 
          return ".---";
          break;
     
         case "k": 
          return "-.-";
          break;
     
         case "l": 
          return ".-..";
          break;
     
         case "m": 
          return "--";
          break;
     
         case "n": 
          return "-.";
          break;
     
          case "o": 
          return "---";
          break;
     
         case "p": 
          return ".--.";
          break;
     
         case "q": 
          return "--.-";
          break;
     
         case "r": 
          return ".-.";
          break;
     
         case "s": 
          return "...";
          break;
     
         case "t": 
          return "-";
          break;
     
         case "u": 
          return "..-";
          break;
     
         case "v": 
          return "...-";
          break;
     
         case "w": 
          return ".--";
          break; 
          
         case "x": 
          return "-..-";
          break; 
     
         case "y": 
          return "-.--";
          break; 
     
         case "z": 
          return "--..";
          break;

          case " ": 
          return " / ";
          break;
        }
        
      })
      
      return morseLetterArr.join('');
      

   
  }


// each letter is than translated to morse code using translate. 


// the trans