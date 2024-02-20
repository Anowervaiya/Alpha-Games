function clickPlayNow() {
  playGame = true;
  addHiddenClass("home");
  addHiddenClass("score");
  removeHiddenClass("playGames");

  setValueById("life-point", 5);
  setValueById("score-point", 0);

  continueGame();
}

let playGame = false;

document.addEventListener("keyup", function (event) {
  if (playGame === false) {
    return;
  } else {
    console.log("clicked");
    const playerPressed = event.key;
    if (playerPressed === "Escape") {
      gameOver();
    }
    const expectedKey = getValuById("alphabet");
    const audio = new Audio();
    if (playerPressed === expectedKey) {
      audio.src = "../sound/mixkit-correct-positive-notification-957.wav";
      audio.play();
      const scoreValue = getParsInValueById("score-point");
      const finalPoint = scoreValue + 1;
      setValueById("score-point", finalPoint);

      removeBackgroundColor(expectedKey);

      continueGame();
    } else {
      audio.src="../sound/mixkit-game-show-wrong-answer-buzz-950.wav";
      audio.play();
      const getLife = getParsInValueById("life-point");
      const lostLife = getLife - 1;
      setValueById("life-point", lostLife);
      if (lostLife === 0) {
        gameOver();
      }
    }
  }
});

function createRandomNum() {
  const allAphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "g",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetIndexAll = Math.round(Math.random() * 25);
  const finalAlphabet = allAphabet[alphabetIndexAll];
  return finalAlphabet;
}

function continueGame() {
  const alphabet = createRandomNum();
  setValueById("alphabet", alphabet);
  addBackgroundColor(alphabet);
}

function gameOver() {
  addHiddenClass("playGames");
  removeHiddenClass("score");

  const getValue = getParsInValueById("score-point");
  setValueById("final-point", getValue);
  const getAlphabet = getValuById("alphabet");
  removeBackgroundColor(getAlphabet);
}
