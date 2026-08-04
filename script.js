// ================================================
// DOM ELEMENTS
// ================================================


const paragraphElement =
document.getElementById("paragraph");


const input =
document.getElementById("input");


const startButton =
document.getElementById("start");


const restartButton =
document.getElementById("restart");


const nextButton =
document.getElementById("next");


const timerElement =
document.getElementById("timer");


const difficulty =
document.getElementById("difficulty");


const timeSelect =
document.getElementById("time");


const status =
document.querySelector(".status span:last-child");



// Statistics

const wpm =
document.getElementById("wpm");

const accuracy =
document.getElementById("accuracy");

const mistakes =
document.getElementById("mistakes");

const cpm =
document.getElementById("cpm");




// ================================================
// VARIABLES
// ================================================


let currentText = "";

let timer = 60;

let timeLeft = 60;

let timerInterval = null;

let started = false;

let typedCharacters = 0;

let correctCharacters = 0;

let incorrectCharacters = 0;

let startTime = null;




// ================================================
// LOAD RANDOM PARAGRAPH
// ================================================


function loadParagraph(){


    const selectedDifficulty =
    difficulty.value;


    const filtered =
    paragraphs.filter(
        item =>
        item.difficulty === selectedDifficulty
    );


    const random =
    filtered[
        Math.floor(
            Math.random()*filtered.length
        )
    ];


    currentText =
    random.text;


    paragraphElement.innerHTML =
    "";


    currentText
    .split("")
    .forEach(character=>{


        const span =
        document.createElement("span");


        span.textContent =
        character;


        paragraphElement.appendChild(span);


    });


}




// ================================================
// UPDATE TIMER
// ================================================


function updateTimer(){


    timerElement.textContent =
    timeLeft;


    if(timeLeft <= 0){

        finishTest();

    }


}



// ================================================
// START TEST
// ================================================


function startTest(){


    if(started)
        return;



    started = true;


    input.disabled = false;

    input.focus();



    startTime = new Date();



    status.textContent =
    "Typing";



    document.querySelector(".status")
    .classList.add("typing-status");



    startButton.disabled = true;



    startButton.classList.add("active");



    loadTimer();



    timerInterval = setInterval(()=>{


        timeLeft--;


        updateTimer();



    },1000);



}




// ================================================
// TIMER SETUP
// ================================================


function loadTimer(){


    timer =
    Number(timeSelect.value);


    timeLeft =
    timer;


    timerElement.textContent =
    timeLeft;


}



// ================================================
// FINISH TEST
// ================================================


function finishTest(){


    clearInterval(timerInterval);



    input.disabled=true;



    started=false;



    status.textContent =
    "Finished";



    startButton.disabled=false;



    startButton.classList.remove("active");

    showResult();


}




// ================================================
// RESTART
// ================================================


function restartTest(){


    clearInterval(timerInterval);



    timerInterval=null;



    started=false;



    input.value="";



    input.disabled=true;



    startButton.disabled=false;



    startButton.classList.remove("active");



    document.querySelector(".status")
    .classList.remove("typing-status");



    status.textContent =
    "Ready";



    timeLeft =
    Number(timeSelect.value);



    timerElement.textContent =
    timeLeft;



    resetStats();



    loadParagraph();


}





// ================================================
// RESET STATISTICS
// ================================================


function resetStats(){


    wpm.textContent=0;

    cpm.textContent=0;

    mistakes.textContent=0;

    accuracy.textContent="100%";


}




// ================================================
// NEXT PARAGRAPH
// ================================================


function nextParagraph(){


    loadParagraph();


    restartTest();


}





// ================================================
// EVENTS
// ================================================


startButton.addEventListener(
    "click",
    startTest
);


restartButton.addEventListener(
    "click",
    restartTest
);


nextButton.addEventListener(
    "click",
    nextParagraph
);



// ================================================
// INITIAL LOAD
// ================================================


loadParagraph();

function checkTyping(){


    const typed =
    input.value;


    const characters =
    paragraphElement.querySelectorAll("span");



    correctCharacters=0;

    incorrectCharacters=0;



    characters.forEach(
        (character,index)=>{


            const typedChar =
            typed[index];


            if(typedChar == null){


                character.className="";


            }


            else if(
                typedChar === character.textContent
            ){


                character.className =
                "correct";


                correctCharacters++;


            }


            else{


                character.className =
                "incorrect";


                incorrectCharacters++;


            }


        }
    );



    updateStatistics();


}

input.addEventListener(
    "input",
    checkTyping
);


function updateStatistics(){


    const typed =
    input.value.length;



    const minutes =
    (new Date()-startTime)
    /1000/60;



    if(minutes > 0){


        const words =
        typed / 5;


        const calculatedWPM =
        Math.round(
            words / minutes
        );


        const calculatedCPM =
        Math.round(
            typed / minutes
        );


        wpm.textContent =
        calculatedWPM;


        cpm.textContent =
        calculatedCPM;


    }



    const total =
    correctCharacters +
    incorrectCharacters;



    if(total > 0){


        const acc =
        Math.round(
            (correctCharacters / total)
            *100
        );


        accuracy.textContent =
        acc + "%";


    }


    mistakes.textContent =
    incorrectCharacters;



}

function showResult(){


    finalWpm.textContent =
    wpm.textContent;


    finalAccuracy.textContent =
    accuracy.textContent;


    finalCpm.textContent =
    cpm.textContent;


    finalMistakes.textContent =
    mistakes.textContent;



    let best =
    localStorage.getItem("bestWpm") || 0;



    if(Number(wpm.textContent) > Number(best)){


        best =
        wpm.textContent;


        localStorage.setItem(
            "bestWpm",
            best
        );


    }



    bestScore.textContent =
    best;



    resultModal.classList.add(
        "show"
    );


}



function celebrate(){


    confetti({

        particleCount:150,

        spread:90,

        origin:{
            y:0.6
        }

    });



    setTimeout(()=>{


        confetti({

            particleCount:100,

            spread:120,

            origin:{
                y:0.4
            }

        });


    },500);


}