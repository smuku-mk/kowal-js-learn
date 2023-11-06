// TODO
// 1. Licznik prób
// 2. Zmiana statystyk
// 3. Szansa na ulepszenie zależna od poziomu plusa
// 4. Komunikaty kowala w dokumencie
// 5. Przycisk zacznij od nowa

let stage = 0;
let level = document.querySelector(`#level`);
const button = document.querySelector(`#improve`);


button.addEventListener("click",()=>{if (stage <= 8) {
    changeLevel(1);
    showLevel();
} else {
    callDialog("max");
}});

function takeChance(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
};

function changeLevel(next) {
    if (takeChance(1, 10) >= 1) {
    stage = stage + next;
        callDialog("success");
    } else {
    stage = 0;
        callDialog("fail");
    }
};

function showLevel() {
    return level.innerHTML = stage;
};

function callDialog(result) {
    if (result === "success") {
        alert("Przedmiot został ulepszony.");
    } else if (result === "fail") {
        alert("Zawiodłeś!");
    } else {
        alert("Maksymalny poziom przedmiotu.");
    }
    return result;
};