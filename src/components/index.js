let words = require("an-array-of-english-words");

class Car {
    constructor(words, player, words1) {
        this.words = words;
        this.player = player;
        this.words1 = words1;
        this.speed = 0;
        this.score = 0;
    }

    RenderWord() {
        let randomIndex = Math.floor(Math.random() * this.words.length - 1);
        let randomWord = words[randomIndex];
        this.words1.textContent = randomWord;

        return randomWord;
    }
}

let player1 = document.querySelector(".car1");
let words1 = document.querySelector(".words1");

let trackHight1 = document.querySelector(".track1").offsetHeight;

let slide1 = document.querySelector(".slide1").offsetHeight;

console.log(trackHight1 - 250);

let car1 = new Car(words, player1, words1);

car1.RenderWord();
