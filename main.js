const gameWithHands = (groupButtons, scores) => {
  const { btnRock, btnPaper, btnScissor, btnChecker } = groupButtons;
  const { scorePersonal, scoreComputer, scoreResult } = scores;

  const $btnRock = document.getElementById(btnRock);
  const $btnPaper = document.getElementById(btnPaper);
  const $btnScissor = document.getElementById(btnScissor);
  const $btnChecker = document.getElementById(btnChecker);
  const $scorePersonal = document.getElementById(scorePersonal);
  const $scoreComputer = document.getElementById(scoreComputer);
  const $scoreResult = document.getElementById(scoreResult);
  const buttonsOptions = [$btnRock, $btnPaper, $btnScissor];
  const cursorComputers = [0, 80, 160];
  const results = {
    'win': 'Ganaste el duelo!!!',
    'lose': 'Perdiste el duelo!!!',
    'equal': 'Empataste el duelo!!!',
  };
  let pointsComputer = 0;
  let pointsPersonal = 0;

  document.addEventListener('click', (e) => {
    if (buttonsOptions.includes(e.target)) {
      const indexRandomComputer = Math.floor(Math.random() * cursorComputers.length);
      $btnChecker.style.transform = `translateY(${cursorComputers[indexRandomComputer]}px)`;

      if (e.target === $btnRock) {
        if (indexRandomComputer === 0) equalize();
        else if (indexRandomComputer === 1) loser();
        else if (indexRandomComputer === 2) winner();
      }

      if (e.target === $btnPaper) {
        if (indexRandomComputer === 0) winner();
        else if (indexRandomComputer === 1) equalize();
        else if (indexRandomComputer === 2) loser();
      }

      if (e.target === $btnScissor) {
        if (indexRandomComputer === 0) loser();
        else if (indexRandomComputer === 1) winner();
        else if (indexRandomComputer === 2) equalize();
      }
    }
  });

  const winner = () => {
    $scoreResult.textContent = results['win'];
    pointsPersonal++;
    $scorePersonal.textContent = pointsPersonal;
  };

  const loser = () => {
    $scoreResult.textContent = results['lose'];
    pointsComputer++;
    $scoreComputer.textContent = pointsComputer;
  };

  const equalize = () => {
    $scoreResult.textContent = results['equal'];
  };
};

document.addEventListener('DOMContentLoaded', (e) => {
  const groupButtons = {
    btnRock: 'rock',
    btnPaper: 'paper',
    btnScissor: 'scissor',
    btnChecker: 'checker',
  };

  const scores = {
    scorePersonal: 'scorePersonal',
    scoreComputer: 'scoreComputer',
    scoreResult: 'score-result',
  };

  gameWithHands(groupButtons, scores);
});
