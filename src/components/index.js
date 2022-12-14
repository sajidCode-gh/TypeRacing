let words = require("an-array-of-english-words");

class CarGame {
    constructor(words) {
        this.words = words;
    }

    getRandomWord() {
        let randomIndex = Math.floor(Math.random() * this.words.length - 1);
        let randomWord = words[randomIndex];

        return randomWord;
    }
}

class Player extends CarGame {
    constructor(words, wordHolder, input1, activeLatter, slide1, trackHight1) {
        super(words);
        this.wordHolder = wordHolder;
        this.input1 = input1;
        this.activeLatter = activeLatter;
        this.slide1 = slide1;
        this.trackHight1 = trackHight1;
        this.speed = 0;
        this.score = 0;
    }

    renderedWord() {
        this.wordHolder.textContent = this.getRandomWord();
        return this.wordHolder.textContent;
    }

    currentActiveLetter(letter, el) {
        this.wordHolder.append(el);
        el.textContent = letter;
        return el;
    }

    calculateDistanceTraveling() {
        let trackDistance = this.trackHight1.offsetHeight;
    }

    typeEvent() {
        activeWord = this.renderedWord();

        let wordsLength = activeWord.length - 1;

        let characterPoint = 0;

        let matched = false;

        this.input1.addEventListener("keydown", (event) => {
            if (characterPoint < wordsLength) {
                this.currentActiveLetter(
                    activeWord[characterPoint + 1],
                    this.activeLatter
                );
                if (event.key.toString() == activeWord[characterPoint]) {
                    matched = true;
                    this.score++;
                    characterPoint++;
                    this.wordHolder.style.backgroundColor = "white";
                } else {
                    matched = false;
                    this.wordHolder.style.backgroundColor = "red";
                }

                console.log("==========================");
                console.log(matched, this.score, characterPoint, wordsLength);
            } else {
                activeWord = this.renderedWord();
                wordsLength = activeWord.length - 1;
                characterPoint = 0;
            }
        });
    }
}

let player1 = document.querySelector(".car1");
let words1 = document.querySelector(".words1");
let words2 = document.querySelector(".words2");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let activeLatter = document.createElement("div");
activeLatter.classList.add("current-letter");

let trackHight1 = document.querySelector(".track1").offsetHeight;

let slide1 = document.querySelector(".slide1").offsetHeight;

console.log(trackHight1 - 250);

let firstPlayer = new Player(
    words,
    words1,
    input1,
    activeLatter,
    slide1,
    trackHight1
);
let secondPlayer = new Player(words, words2);

firstPlayer.typeEvent();
