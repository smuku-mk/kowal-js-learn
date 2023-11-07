// TODO
// 1. Licznik prób <<<<<<<<<<<<DONE>
// 2. Zmiana statystyk
// 3. Szansa na ulepszenie zależna od poziomu plusa <<<<<<<<<<<<DONE>
// 4. Komunikaty kowala w dokumencie
// 5. Przycisk zacznij od nowa <<<<<<<<<<<<DONE>
// 6. Dźwięki ulepszania i spalania
// 7. Test konsolowy <<<<<<<<<<<<DONE>

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const level = document.querySelector(`#level`);
const impButton = document.querySelector(`#improve`);
const resButton = document.querySelector(`#reset`);
const testButton = document.querySelector(`#test`);
const counter = document.querySelector(`#counter`);
let stage = 0;
let failCounter = 0;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

impButton.addEventListener("click",()=>{if (stage < 9) {
    changeLevel(1);
} else {
    impButton.disabled = true;
    callDialog("stop");
}});

// function takeChance(min, max) {
//     return Math.floor(Math.random() * (max-min+1) + min);
// };

function changeLevel(next) {
    let luck = Math.random();

    if (stage < 2 && luck <= 0.9) { //
    stage = stage + next;
        callDialog("success");
        console.log(`na +1 lub +2 z szansą 90% ${luck.toFixed(2)} <= 0.9`);
    }
    else if (stage < 4 && luck <= 0.8) { //
        stage = stage + next;
            callDialog("success");
            console.log(`na +3 lub +4 z szansą 80% ${luck.toFixed(2)} <= 0.8`);
    }
    else if (stage < 5 && luck <= 0.7) { //
        stage = stage + next;
            callDialog("success");
            console.log(`na +5 z szansą 70% ${luck.toFixed(2)} <= 0.7`);
    }
    else if (stage < 6 && luck <= 0.6) { //
    stage = stage + next;
            callDialog("success");
            console.log(`na +6 z szansą 60% ${luck.toFixed(2)} <= 0.6)`);
    }
    else if (stage < 7 && luck <= 0.5) { //
        stage = stage + next;
            callDialog("success");
            console.log(`na +7 z szansą 50% ${luck.toFixed(2)} <= 0.5`);
    }
    else if (stage < 8 && luck <= 0.4) { //
        stage = stage + next;
            callDialog("success");
            console.log(`na +8 z szansą 40% ${luck.toFixed(2)} <= 0.4`);
    }
    else if (stage < 9 && luck <= 0.3) { //
        stage = stage + next;
            callDialog("success");
            console.log(`na +9 z szansą 30% ${luck.toFixed(2)} <= 0.3`);
    }
    else {
        stage = 0;
        callDialog("fail");
        countAttempts();
        console.log(`Zawiodłeś z szansą ${luck.toFixed(2)}`);
        // console.clear();
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
    impButton.disabled = false;
    console.clear();
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

function startTest () {
    while (stage < 9) {
        changeLevel(1);
    }
}
testButton.addEventListener("click",()=>{
    startTest();
} );