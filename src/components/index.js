let words = require("an-array-of-english-words");

class Car {
    constructor(words, player, words1) {
        this.words = words;
        this.player = player;
        this.words1 = words1;
    }

    randamizedWords() {
        return this.words.sort(() => Math.random() - 0.5);
    }

    RenderWords() {
        // let randomWords = this.randamizedWords()
        // for(let i = 0; i < randomWords.length; i++) {
        //     if(randomWords[i].length <= 3) {
        //     }
        // }
    }
}

let player1 = document.querySelector(".car1");
let words1 = document.querySelector(".words1");

let car1 = new Car(words, player1, words1);
