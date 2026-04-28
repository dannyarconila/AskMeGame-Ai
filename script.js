let currentQuestion = 0;
let score = 0;
let coins = 0;
let difficulty = "";
let selectedSubject = "";
let currentQuiz = [];
let timerInterval = null;
let timeLeft = 10;
let globalCoins = localStorage.getItem("globalCoins")
    ? parseInt(localStorage.getItem("globalCoins"))
    : 0;
let freeSolves = localStorage.getItem("freeSolves")
    ? parseInt(localStorage.getItem("freeSolves"))
    : 0;

document.getElementById("globalCoins").innerText = globalCoins;
document.getElementById("freeSolves").innerText = freeSolves;
let isSoundOn = false;

function toggleSound() {
    const music = document.getElementById("bgMusic");
    const toggle = document.getElementById("soundToggle");

    if (toggle.checked) {
        music.volume = 0.3;

        music.play().catch(() => {
            console.log("User interaction needed");
        });

        localStorage.setItem("sound", "on");

    } else {
        music.pause();
        localStorage.setItem("sound", "off");
    }
}

/* =========================
   🔥 TIMER RESET (ANTI-BUG)
========================= */
function resetTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

/* =========================
   🧠 AI SOLVER
========================= */
async function solveMath() {
    let input = document.getElementById("mathInput").value;

    // 🔥 CHECK COST
    if (globalCoins < 100 && freeSolves <= 0) {
        document.getElementById("solution").innerHTML = `
        ❌ Not enough coins! <br><br>
        <button onclick="watchAd()">🎥 Watch Ads</button>
        `;
        return;
    }

    // 🔥 USE FREE SOLVE FIRST
    if (freeSolves > 0) {
        freeSolves--;
        localStorage.setItem("freeSolves", freeSolves);
    } else {
        globalCoins -= 100;
        localStorage.setItem("globalCoins", globalCoins);
        document.getElementById("globalCoins").innerText = globalCoins;
        document.getElementById("freeSolves").innerText = freeSolves;
    }

    document.getElementById("solution").innerHTML = "⏳ Solving...";

    try {
    let response = await fetch("https://askmegame-ai-1.onrender.com/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problem: input })
    });

    let data = await response.json();

    document.getElementById("solution").innerText =
        data.answer || "❌ No answer";

} catch (error) {
    console.log(error);
    document.getElementById("solution").innerHTML = "❌ Error";
}

}

function watchAd() {
    if (window.Android) {
        Android.showRewardedAd(); // 🔥 CALL ANDROID
    } else {
        onSolveAdReward(); // fallback
    }
}

function onSolveAdReward() {
    freeSolves += 1;
    localStorage.setItem("freeSolves", freeSolves);

    document.getElementById("freeSolves").innerText = freeSolves;

    document.getElementById("solution").innerHTML =
        "✅ You got 1 free solve!";
}

function showOnly(screen) {
    const sections = ["mainMenu", "menu", "subjectMenu", "game", "solver"];

    sections.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    if (screen === "main") {
        document.getElementById("mainMenu").style.display = "flex";
        document.getElementById("solver").style.display = "flex";
    } else {
        document.getElementById(screen).style.display = "flex";
    }
}

/* =========================
   🎮 START GAME (DIFFICULTY)
========================= */
function startGame(level) {
    resetTimer();
    difficulty = level;
    showOnly("subjectMenu");
}

/* =========================
   📚 SELECT SUBJECT
========================= */
function selectSubject(subject) {
    resetTimer();

    selectedSubject = subject;

    currentQuiz = window.quizData[subject][difficulty];

    if (!currentQuiz || currentQuiz.length === 0) {
        alert("❌ No questions!");
        return;
    }

    currentQuestion = 0;
    score = 0;
    coins = 0;

    document.getElementById("coins").innerText = coins;

    document.getElementById("subjectMenu").style.display = "none";
    document.getElementById("game").style.display = "flex";

    loadQuestion();
}

function openDifficulty() {
    showOnly("menu");
}

function backToMain() {
    showOnly("main");
}

/* =========================
   🔙 BACK TO MENU
========================= */
function goBack() {
    resetTimer();
    showOnly("main");
}

function backToDifficulty() {
    resetTimer();

    document.getElementById("subjectMenu").style.display = "none";
    document.getElementById("menu").style.display = "flex";
}

/* =========================
   ⏱ TIMER SYSTEM
========================= */
function startTimer() {
    resetTimer(); // 🔥 prevent multiple timers

    timeLeft = (difficulty === "hard") ? 8 : 10;
    document.getElementById("timer").innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            resetTimer();
            endGame();
        }
    }, 1000);
}

/* =========================
   ❓ LOAD QUESTION
========================= */
async function loadQuestion() {
    resetTimer();

    document.getElementById("question").innerText = "⏳ Loading...";
    document.getElementById("choices").innerHTML = "";

    try {
        // 🧠 TRY AI FIRST
        let res = await fetch("http://localhost:3000/generate-question", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                subject: selectedSubject,
                difficulty: difficulty
            })
        });

        // 🔥 if server error
        if (!res.ok) throw new Error("AI failed");

        let q = await res.json();

        // save AI question
        currentQuiz[currentQuestion] = q;

        renderQuestion(q);

    } catch (err) {
        console.log("⚠️ AI failed, using offline fallback");

        // 📦 FALLBACK LOCAL QUESTIONS
        if (!window.quizData || !window.quizData[selectedSubject]) {
            document.getElementById("question").innerText = "❌ No offline data";
            return;
        }

        let fallbackSet = window.quizData[selectedSubject][difficulty];

        if (!fallbackSet || fallbackSet.length === 0) {
            document.getElementById("question").innerText = "❌ No questions available";
            return;
        }

        // 🔀 RANDOM LOCAL QUESTION
        let randomIndex = Math.floor(Math.random() * fallbackSet.length);
        let q = fallbackSet[randomIndex];

        currentQuiz[currentQuestion] = q;

        renderQuestion(q);
    }

    startTimer();
}

function renderQuestion(q) {
    document.getElementById("question").innerText = q.question;

    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    q.choices.forEach(choice => {
        let btn = document.createElement("button");
        btn.innerText = choice;
        btn.classList.add("choice");
        btn.onclick = () => checkAnswer(choice);
        choicesDiv.appendChild(btn);
    });
}

/* =========================
   ✅ CHECK ANSWER (FIXED)
========================= */
function checkAnswer(choice) {
    resetTimer(); // 🔥 STOP ALL TIMERS IMMEDIATELY

    let correct = currentQuiz[currentQuestion].answer;
    let buttons = document.querySelectorAll(".choice");

    buttons.forEach(btn => {
        if (btn.innerText == correct) btn.classList.add("correct");
        if (btn.innerText == choice && choice != correct) btn.classList.add("wrong");
        btn.disabled = true;
    });

    if (choice == correct) {
        score++;
        coins += 5;
        globalCoins += 5;
    } else {
        coins = Math.max(0, coins - 10);
    }
    localStorage.setItem("globalCoins", globalCoins);
    document.getElementById("globalCoins").innerText = globalCoins;

    document.getElementById("coins").innerText = coins;

    setTimeout(() => {
        currentQuestion++;
        saveProgress();
        loadQuestion();
    }, 1000);
}

/* =========================
   ⏭ NEXT (BUTTON)
========================= */
function nextQuestion() {
    resetTimer();
    currentQuestion++;
    loadQuestion();
}
function saveProgress() {
    localStorage.setItem("quizProgress", JSON.stringify({
        subject: selectedSubject,
        difficulty: difficulty,
        index: currentQuestion,
        coins: coins
    }));
}

/* =========================
   🪟 GAME OVER
========================= */
function endGame() {
    resetTimer();

    document.getElementById("finalScore").innerText =
        `Score: ${score} / ${currentQuiz.length}`;

    document.getElementById("gameOverModal").style.display = "flex";
}

/* =========================
   ▶ CONTINUE
========================= */
function continueGame() {
    let data = JSON.parse(localStorage.getItem("quizProgress"));

    if (!data) {
        alert("No saved game yet!");
        return;
    }

    selectedSubject = data.subject;
    difficulty = data.difficulty;
    currentQuestion = data.index;
    coins = data.coins || 0;

    currentQuiz = [];

    document.getElementById("coins").innerText = coins;

    showOnly("game");

    loadQuestion();
}

function checkDailyReward() {
    let lastClaim = localStorage.getItem("lastDaily");

    let today = new Date().toDateString();

    if (lastClaim !== today) {
        // 🔥 give reward
        globalCoins += 10;
        localStorage.setItem("globalCoins", globalCoins);
        document.getElementById("globalCoins").innerText = globalCoins;

        // save date
        localStorage.setItem("lastDaily", today);

        // show popup
        document.getElementById("dailyPopup").style.display = "flex";
    }
}

function closeDailyPopup() {
    document.getElementById("dailyPopup").style.display = "none";
}

/* =========================
   ❌ EXIT
========================= */
function exitGame() {
    localStorage.removeItem("quizProgress");
    resetTimer();
    document.getElementById("gameOverModal").style.display = "none";
    showOnly("main");
}

function skipQuestion() {
    document.getElementById("skipModal").classList.add("active");
}

function closeSkipModal() {
    document.getElementById("skipModal").classList.remove("active");
}

function confirmSkip() {
    if (coins >= 5) {
        coins -= 5;
        document.getElementById("coins").innerText = coins;

        closeSkipModal();
        currentQuestion++;
        loadQuestion();
    } else {
        closeSkipModal();
        showAlert("❌ Not enough coins!");
    }
}

function watchAdSkip() {
    if (window.Android) {
        Android.showRewardedAd(); // 🔥 reuse rewarded ad
    } else {
        onSkipAdReward();
    }
}

function onSkipAdReward() {
    currentQuestion++;
    loadQuestion();
}

/* =========================
   ⚙ OPTIONS SYSTEM
========================= */

function openOptions() {
    document.getElementById("optionsModal").classList.add("active");

    // load saved sound setting
    let sound = localStorage.getItem("soundEnabled");
    document.getElementById("soundToggle").checked = sound !== "false";
}

function closeOptions() {
    document.getElementById("optionsModal").classList.remove("active");
}

function showAlert(message) {
    document.getElementById("alertText").innerText = message;
    document.getElementById("alertModal").classList.add("active");
}

function closeAlert() {
    document.getElementById("alertModal").classList.remove("active");
}

/* ℹ️ ABOUT */
function showAbout() {
    document.getElementById("aboutModal").classList.add("active");
}

function closeAbout() {
    document.getElementById("aboutModal").classList.remove("active");
}

window.onload = function () {
    document.getElementById("globalCoins").innerText = globalCoins;
    document.getElementById("freeSolves").innerText = freeSolves;

    checkDailyReward();

    const music = document.getElementById("bgMusic");
    const toggle = document.getElementById("soundToggle");

    let saved = localStorage.getItem("sound");

    if (saved === "on") {
        toggle.checked = true;

        setTimeout(() => {
            music.play().catch(() => {});
        }, 500);
    }
};



/* =========================
   🌐 GLOBAL EXPORT
========================= */
window.startGame = startGame;
window.selectSubject = selectSubject;
window.backToDifficulty = backToDifficulty;
window.solveMath = solveMath;
window.goBack = goBack;
window.addEventListener("load", function() {
    checkDailyReward();
});

window.addEventListener("load", function() {
    checkDailyReward();

    let music = document.getElementById("bgMusic");
    let sound = localStorage.getItem("soundEnabled");

    if (sound !== "false") {
        document.getElementById("soundToggle").checked = true;

        // play after slight delay (browser safe)
        setTimeout(() => {
            music.play().catch(() => {});
        }, 500);
    }
});