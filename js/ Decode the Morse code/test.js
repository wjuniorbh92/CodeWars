var assert = require("assert");

let MORSE_CODE = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ",",
};

decodeMorse = function (morseCode) {
  let morseCodeString = "";
  morseCode.split(" ").map((i) => {
    MORSE_CODE[i]
      ? (morseCodeString += MORSE_CODE[i])
      : (morseCodeString += " ");
  });
  return morseCodeString.trim().replace(/\s+/g, " ");
};

describe("Example from description", function () {
  assert.equal(decodeMorse("- . ... ... - .- -. -.. ---"), "HEY JUDE");
  
});
