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
    constructor(words, wordHolder, input1) {
        super(words);
        this.wordHolder = wordHolder;
        this.input1 = input1;
        this.speed = 0;
        this.score = 0;
    }

    renderedWord() {
        this.wordHolder.textContent = this.getRandomWord();
        return this.wordHolder.textContent;
    }

    typeEvent() {
        activeWord = this.renderedWord();

        let wordsLength = activeWord.length - 1;

        let characterPoint = 0;

        let matched = false;

        this.input1.addEventListener("keydown", (event) => {
            if (event.key.toString() == activeWord[characterPoint]) {
                matched = true;
                this.score++;
                characterPoint++;
            } else {
                matched = false;
            }

            console.log("==========================");
            console.log(matched, this.score, characterPoint);
        });
    }
}

let player1 = document.querySelector(".car1");
let words1 = document.querySelector(".words1");
let words2 = document.querySelector(".words2");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let trackHight1 = document.querySelector(".track1").offsetHeight;

let slide1 = document.querySelector(".slide1").offsetHeight;

console.log(trackHight1 - 250);

let firstPlayer = new Player(words, words1, input1);
let secondPlayer = new Player(words, words2);

firstPlayer.typeEvent();
