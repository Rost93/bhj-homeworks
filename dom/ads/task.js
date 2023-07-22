// Решение задачи
const rotatorCases = document.querySelectorAll('.rotator__case');
let currentCaseIndex = 0;

function rotateCases() {
  const currentCase = rotatorCases[currentCaseIndex];
  const nextCaseIndex = (currentCaseIndex + 1) % rotatorCases.length;
  const nextCase = rotatorCases[nextCaseIndex];

  currentCase.classList.remove('rotator__case_active');
  nextCase.classList.add('rotator__case_active');

  currentCaseIndex = nextCaseIndex;
}

setInterval(rotateCases, 1000);
