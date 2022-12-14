let words = [
    "acataleptic",
    "acataleptics",
    "acatamathesia",
    "acatamathesias",
    "acater",
    "acaters",
    "acates",
    "acathisia",
    "acathisias",
    "acatour",
    "acatours",
    "acaudal",
    "acaudate",
    "acaulescent",
    "acauline",
    "acaulose",
    "acaulous",
    "acca",
    "accable",
    "gyrostats",
    "gyrous",
    "gyrovague",
    "gyrovagues",
    "gyrus",
    "gyruses",
    "gyte",
    "gytes",
    "gytrash",
    "gytrashes",
    "gyttja",
    "gyttjas",
    "gyve",
    "gyved",
    "gyves",
    "gyving",
    "ha",
    "haaf",
    "haafs",
    "haanepoot",
    "haanepoots",
    "haar",
    "haars",
    "realizability",
    "realizable",
    "realizably",
    "realization",
    "realizations",
    "realize",
    "syzygetic",
    "syzygetically",
    "syzygial",
    "syzygies",
    "syzygy",
    "ta",
    "taal",
    "taals",
    "taata",
    "taatas",
    "tab",
    "tabanid",
    "tabanids",
];

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
    constructor(
        words,
        wordHolder,
        input,
        activeLatter,
        slide,
        trackHight,
        scoreHolder,
        playButton,
        model
    ) {
        super(words);
        this.wordHolder = wordHolder;
        this.input = input;
        this.activeLatter = activeLatter;
        this.slide = slide;
        this.trackHight = trackHight;
        this.scoreHolder = scoreHolder;
        this.speed = 0;
        this.completeDistance = 100;
        this.score = 0;
        this.playButton = playButton;
        this.model = model;
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
        // let trackDistance = this.trackHight.offsetHeight;
        let trackDistance = 500;
        let finishedLineDistance = trackDistance;
        if (finishedLineDistance > this.completeDistance) {
            this.completeDistance++;
        } else {
            alert("Distance completed ????");
            this.completeDistance = 100;
            this.score = 0;
            this.typedWords = 0;
            this.model.style.display = "grid";
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
        let activeWord = this.renderedWord();

        let wordsLength = activeWord.length - 1;

        let characterPoint = 0;

        let matched = false;

        this.input.addEventListener("keydown", (event) => {
            if (characterPoint < wordsLength) {
                if (event.key.toString() == activeWord[characterPoint]) {
                    matched = true;
                    this.score++;
                    this.scoreHolder.textContent = "Score: " + this.score;
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
                this.typedWords++;
                activeWord = this.renderedWord();
                wordsLength = activeWord.length - 1;
                characterPoint = 0;
            }
        });
    }

    init() {
        this.playButton.addEventListener("click", () => {
            this.typeEvent();
            this.alwaysFocusInput();
            this.model.style.display = "none";
        });
    }
}

let player1 = document.querySelector(".car1");
let words1 = document.querySelector(".words1");
let input1 = document.querySelector(".input1");
let score1 = document.querySelector(".score1");
let playButton = document.querySelector(".play button");
let model = document.querySelector(".play");

let activeLatter = document.createElement("div");
activeLatter.classList.add("current-letter");

let trackHight1 = document.querySelector(".track1");

let slide1 = document.querySelector(".slide1");

let firstPlayer = new Player(
    words,
    words1,
    input1,
    activeLatter,
    slide1,
    trackHight1,
    score1,
    playButton,
    model
);

firstPlayer.init();
