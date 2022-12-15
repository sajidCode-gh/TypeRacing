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
    constructor(words, wordHolder, input, activeLatter, slide, trackHight) {
        super(words);
        this.wordHolder = wordHolder;
        this.input = input;
        this.activeLatter = activeLatter;
        this.slide = slide;
        this.trackHight = trackHight;
        this.speed = 0;
        this.completeDistance = 100;
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

    calculateDistanceTraveling(score) {
        let trackDistance = this.trackHight.offsetHeight;
        finishedLineDistance = trackDistance - 150;
        if (finishedLineDistance > this.completeDistance) {
            this.completeDistance++;
        } else {
            alert("Player1 Won 🥳");
        }
        console.log(this.completeDistance, finishedLineDistance, score);
        this.slide.style.height = this.completeDistance + "px";
    }

    alwaysFocusInput() {
        document.querySelector("*").addEventListener("click", () => {
            this.input.focus();
        });

        window.onload = this.input.focus();
    }

    typeEvent() {
        activeWord = this.renderedWord();

        let wordsLength = activeWord.length - 1;

        let characterPoint = 0;

        let matched = false;

        this.input.addEventListener("keydown", (event) => {
            if (characterPoint < wordsLength) {
                if (event.key.toString() == activeWord[characterPoint]) {
                    matched = true;
                    this.score++;
                    characterPoint++;
                    this.wordHolder.style.backgroundColor = "white";
                    this.currentActiveLetter(
                        activeWord[characterPoint],
                        this.activeLatter
                    );
                    this.calculateDistanceTraveling(this.score);
                } else {
                    matched = false;
                    this.wordHolder.style.backgroundColor = "red";
                    this.currentActiveLetter(
                        activeWord[characterPoint],
                        this.activeLatter
                    );
                }
            } else {
                activeWord = this.renderedWord();
                wordsLength = activeWord.length - 1;
                characterPoint = 0;
            }
        });
    }

    init() {
        this.typeEvent();
        this.alwaysFocusInput();
    }
}

let player1 = document.querySelector(".car1");
let words1 = document.querySelector(".words1");
let words2 = document.querySelector(".words2");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let activeLatter = document.createElement("div");
activeLatter.classList.add("current-letter");

let trackHight1 = document.querySelector(".track1");

let slide1 = document.querySelector(".slide1");

// console.log(trackHight1 - 250);

let firstPlayer = new Player(
    words,
    words1,
    input1,
    activeLatter,
    slide1,
    trackHight1
);
// let secondPlayer = new Player(words, words2);

firstPlayer.init();
