const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");

const initGame = () => {
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split(""); //splitting each letter of random word
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //getting random number
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; //swapping letters randomly
  }
  // remember, if this were simply: wordText.innerText = wordArray, the letters would be separated by commas.
  // in this case, .join("") is used to join the letters together with no spaces or commas
  wordText.innerText = wordArray.join(""); //passing shuffled word as wordText
  hintText.innerText = randomObj.hint; //passing random object hint as hintText
  console.log(randomObj.word);
};
initGame();
