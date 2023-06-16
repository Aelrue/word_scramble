const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
timeText = document.querySelector(".time b");
inputField = document.querySelector("input");
refreshBtn = document.querySelector(".refresh");
checkBtn = document.querySelector(".check");

let correctAnswer, timer;

const initTimer = (maxTime) => {
  clearInterval(timer); //clearing timer
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--; //decrementing maxTime by 1
      return (timeText.innerText = maxTime); //passing maxTime value to timerText}
    }
    clearInterval(timer); //clearing timer
    alert(`Time's up! ${correctAnswer.toUpperCase()} was the correct answer.`);
    initGame(); //calling initGame function so game can restart
  }, 1000);
};

const initGame = () => {
  initTimer(30); //passing 30 as maxTime value to initTimer
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
  correctAnswer = randomObj.word.toLowerCase(); //passing random word as correctAnswer
  inputField.value = ""; //clearing input field
  inputField.setAttribute("maxlength", correctAnswer.length); //setting max length of input field to length of correctAnswer
  console.log(randomObj);
};

initGame();

const checkAnswer = () => {
  let userWord = inputField.value.toLocaleLowerCase(); //getting user input
  if (!userWord) return alert("Please enter a word.");

  if (userWord !== correctAnswer)
    return alert(`Oops! ${userWord} is not the correct answer. Try again!`);
  alert(`Congrats! ${userWord.toUpperCase()} is the correct answer!`);
  initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkAnswer);
