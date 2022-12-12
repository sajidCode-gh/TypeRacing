let words = require("an-array-of-english-words");

class Car {
    constructor(words) {
        this.words = words;
        this.speed = 0;
        this.score = 0;
    }

    RenderWord() {
        let randomIndex = Math.floor(Math.random() * this.words.length - 1);
        let randomWord = words[randomIndex];
        // this.words1.textContent = randomWord;

        return randomWord;
    }
}

class Player1 extends Car {
    constructor(words) {
        super(words);
    }

    newFunc() {
        console.log(this.RenderWord());
    }
}

class Player2 extends Car {
    constructor(words) {
        super(words);
    }

    newFunc() {
        console.log(this.RenderWord());
    }
}

let player1 = document.querySelector(".car1");
let words1 = document.querySelector(".words1");

let trackHight1 = document.querySelector(".track1").offsetHeight;

let slide1 = document.querySelector(".slide1").offsetHeight;

console.log(trackHight1 - 250);

let firstCar = new Player1(words);
let secondCar = new Player1(words);

firstCar.newFunc();
secondCar.newFunc();
