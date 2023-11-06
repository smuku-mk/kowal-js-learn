// TODO
// 1. Licznik prób
// 2. Zmiana statystyk
// 3. Szansa na ulepszenie zależna od poziomu plusa
// 4. Komunikaty kowala w dokumencie
// 5. Przycisk zacznij od nowa

const level = document.querySelector(`#level`);
const impButton = document.querySelector(`#improve`);
const resButton = document.querySelector(`#reset`);
const counter = document.querySelector(`#counter`);
let stage = 0;
let failCounter = 0;


impButton.addEventListener("click",()=>{if (stage < 9) {
    changeLevel(1);
} else {
    button.disabled = true;
    callDialog("stop");
}});

function takeChance(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
};

// Szansa brudnopis
// +1 - 90%
// +2 - 90%
// +3 - 80%
// +4 - 80%
// +5 - 70%
// +6 - 60%
// +7 - 50%
// +8 - 40%
// +9 - 30%

function changeLevel(next) {
    if (takeChance(1, 10) >= 4) {
    stage = stage + next;
        callDialog("success");
    }
    else {
    stage = 0;
        callDialog("fail");
        countAttempts();
    }
    return level.innerHTML = stage;
};

function countAttempts() {
    failCounter++
    counter.innerHTML = failCounter;
}

function resetProgress() {
    stage = 0;
    failCounter = 0;
    level.innerHTML = stage;
    counter.innerHTML = failCounter;
}

resButton.addEventListener("click",()=>{
    resetProgress();
} );

function callDialog(result) {
    if (result == "success") {
        alert("Przedmiot został ulepszony.");
    } else if (result == "fail") {
        alert("Zawiodłeś!");
    } else {
        alert("Maksymalny poziom przedmiotu.");
    }
};