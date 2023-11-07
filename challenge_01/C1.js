import fs from "fs";
import path from "path";

export function solveEncryptedMessage(message) {
  //message is separated with whitespaces but beforehand we trim the input just in case
  let messageArray = message.trim().split(" ");

  //we convert all the words to lowercase
  messageArray = messageArray.map((item) => item.toLowerCase());

  //we count each word
  const wordMap = new Map();
  messageArray.forEach((element) => {
    wordMap.set(element, wordMap.has(element) ? wordMap.get(element) + 1 : 1);
  });

  //we assemble the result
  let result = "";

  for (let [key, value] of wordMap) {
    result = result.concat(key + "" + value);
  }

  return result;
}

//console.log("result is: " + solveEncryptedMessage("dOg CCat ccat"));

//Solution to the challenge
const messageChallenge = fs.readFileSync(
  "./challenge_01/message_01.txt",
  "utf8"
);
//console.log(messageChallenge);
console.log("submit " + solveEncryptedMessage(messageChallenge));
