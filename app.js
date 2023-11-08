const level = document.querySelector(`#level`);
const impButton = document.querySelector(`#improve`);
const resButton = document.querySelector(`#reset`);
const testButton = document.querySelector(`#test`);
const counter = document.querySelector(`#counter`);

let stage = 0;
let failCounter = 0;

impButton.addEventListener("click", () => {
  if (stage < 9) {
    changeLevel();
  } else {
    impButton.disabled = true;
    callDialog("stop");
  }
});

const changeLevel = () => {
  const chances = [
    { stage: 2, chance: 0.9, message: "na +1 lub +2 z szansą 90%" },
    { stage: 4, chance: 0.8, message: "na +3 lub +4 z szansą 80%" },
    { stage: 5, chance: 0.7, message: "na +5 z szansą 70%" },
    { stage: 6, chance: 0.6, message: "na +6 z szansą 60%" },
    { stage: 7, chance: 0.5, message: "na +7 z szansą 50%" },
    { stage: 8, chance: 0.4, message: "na +8 z szansą 40%" },
    { stage: 9, chance: 0.3, message: "na +9 z szansą 30%" },
  ];

  let luck = Math.random();

  for (const chance of chances) {
    if (stage < chance.stage && luck <= chance.chance) {
      stage++;
      callDialog("success");
      console.log(`${chance.message} ${luck.toFixed(2)} <= ${chance.chance}`);
      return (level.innerHTML = stage);
    }
  }

  stage = 0;
  failCounter++;
  counter.innerHTML = failCounter;
  callDialog("fail");
  console.log(`Zawiodłeś z szansą ${luck.toFixed(2)}`);
  return (level.innerHTML = stage);
};

resButton.addEventListener("click", () => {
  stage = 0;
  failCounter = 0;
  level.innerHTML = stage;
  counter.innerHTML = failCounter;
  impButton.disabled = false;
  console.clear();
});

const callDialog = (result) => {
  if (result === "success") {
    alert("Przedmiot został ulepszony.");
  } else if (result === "fail") {
    alert("Zawiodłeś!");
  } else {
    alert("Maksymalny poziom przedmiotu.");
  }
};

testButton.addEventListener("click", () => {
  while (stage < 9) {
    changeLevel();
  }
});
