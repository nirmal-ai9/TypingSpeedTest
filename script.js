
// DOM ELEMENTS

const keySound = new Audio("assets/sounds/key.mp3");

const paragraphElement = document.getElementById("paragraph");
const input = document.getElementById("input");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const nextButton = document.getElementById("next");
const timerElement = document.getElementById("timer");
const difficulty = document.getElementById("difficulty");
const timeSelect = document.getElementById("time");
const status = document.querySelector(".status span:last-child");
const themeToggle = document.getElementById("themeToggle");

// Statistics
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");
const mistakes = document.getElementById("mistakes");
const cpm = document.getElementById("cpm");

// STATE

let currentText = "";
let timeLeft = 60;
let timerInterval = null;
let started = false;
let correctCharacters = 0;
let incorrectCharacters = 0;
let startTime = null;

// PARAGRAPH

function loadParagraph() {
  const filtered = paragraphs.filter(
    (item) => item.difficulty === difficulty.value
  );
  const { text } = filtered[Math.floor(Math.random() * filtered.length)];
  currentText = text;

  paragraphElement.innerHTML = "";
  const fragment = document.createDocumentFragment();

  currentText.split("").forEach((character) => {
    const span = document.createElement("span");
    span.textContent = character;
    fragment.appendChild(span);
  });

  paragraphElement.appendChild(fragment);
}

// TIMER

function loadTimer() {
  timeLeft = Number(timeSelect.value);
  timerElement.textContent = timeLeft;
}

function updateTimer() {
  timerElement.textContent = timeLeft;
  if (timeLeft <= 0) finishTest();
}

// TEST FLOW

function startTest() {
  if (started) return;

  started = true;
  startTime = new Date();

  input.disabled = false;
  input.focus();

  status.textContent = "Typing";
  document.querySelector(".status").classList.add("typing-status");

  startButton.disabled = true;
  startButton.classList.add("active");

  loadTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
  }, 1000);
}

function finishTest() {
  clearInterval(timerInterval);
  started = false;
  input.disabled = true;

  status.textContent = "Finished";
  startButton.disabled = false;
  startButton.classList.remove("active");

  showResult();
}

function restartTest() {
  clearInterval(timerInterval);
  timerInterval = null;
  started = false;

  input.value = "";
  input.disabled = true;

  startButton.disabled = false;
  startButton.classList.remove("active");

  document.querySelector(".status").classList.remove("typing-status");
  status.textContent = "Ready";

  loadTimer();
  resetStats();
  loadParagraph();
}

function nextParagraph() {
  loadParagraph();
  restartTest();
}

// TYPING / STATS

function checkTyping() {
  const typed = input.value;
  const characters = paragraphElement.querySelectorAll("span");

  correctCharacters = 0;
  incorrectCharacters = 0;

  characters.forEach((character, index) => {
    const typedChar = typed[index];

    if (typedChar == null) {
      character.className = "";
    } else if (typedChar === character.textContent) {
      character.className = "correct";
      correctCharacters++;
    } else {
      character.className = "incorrect";
      incorrectCharacters++;
    }
  });

  updateStatistics();
}

function updateStatistics() {
  const typedLength = input.value.length;
  const minutesElapsed = (new Date() - startTime) / 1000 / 60;

  if (minutesElapsed > 0) {
    const words = typedLength / 5;
    wpm.textContent = Math.round(words / minutesElapsed);
    cpm.textContent = Math.round(typedLength / minutesElapsed);
  }

  const total = correctCharacters + incorrectCharacters;
  if (total > 0) {
    accuracy.textContent = `${Math.round((correctCharacters / total) * 100)}%`;
  }

  mistakes.textContent = incorrectCharacters;
}

function resetStats() {
  wpm.textContent = 0;
  cpm.textContent = 0;
  mistakes.textContent = 0;
  accuracy.textContent = "100%";
}

// RESULTS

function animateNumber(element, value) {
  let current = 0;
  const increment = Math.ceil(value / 40) || 1;

  const counter = setInterval(() => {
    current += increment;
    if (current >= value) {
      current = value;
      clearInterval(counter);
    }
    element.textContent = current;
  }, 30);
}

function celebrate() {
  confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
  setTimeout(() => {
    confetti({ particleCount: 100, spread: 120, origin: { y: 0.4 } });
  }, 500);
}

function showResult() {
  animateNumber(finalWpm, Number(wpm.textContent));
  animateNumber(finalCpm, Number(cpm.textContent));
  animateNumber(finalMistakes, Number(mistakes.textContent));
  finalAccuracy.textContent = accuracy.textContent;

  celebrate();

  const best = Math.max(
    Number(wpm.textContent),
    Number(localStorage.getItem("bestWpm")) || 0
  );
  localStorage.setItem("bestWpm", best);
  bestScore.textContent = best;

  resultModal.classList.add("show");
}

// EVENTS

startButton.addEventListener("click", startTest);
restartButton.addEventListener("click", restartTest);
nextButton.addEventListener("click", nextParagraph);

input.addEventListener("input", () => {
  keySound.currentTime = 0;
  keySound.play();
  checkTyping();
});

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
});

// INITIAL LOAD

loadParagraph();
