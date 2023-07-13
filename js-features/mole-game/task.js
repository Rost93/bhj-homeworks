(() => {
  let playing = true;
  let activeHole = null;
  let moleCount = 0;
  let missCount = 0;

  const stop = () => playing = false;
  const getHole = index => document.getElementById(`hole${index}`);
  const deactivateHole = index => getHole(index).classList.remove('hole_has-mole');
  const activateHole = index => getHole(index).classList.add('hole_has-mole');
  const next = () => setTimeout(() => {
    if (!playing) {
      return;
    }
    deactivateHole(activeHole);
    activeHole = Math.floor(1 + Math.random() * 9);
    activateHole(activeHole);
    next();
  }, 800);

  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
      if (this.classList.contains('hole_has-mole')) {
        moleCount++;
        document.getElementById("dead").textContent = moleCount;

        if (moleCount === 10) {
          alert("Вы победили в игре!");
          resetGame();
        }
      } else {
        missCount++;
        document.getElementById("lost").textContent = missCount;

        if (missCount === 5) {
          alert("Вы проиграли в игре!");
          resetGame();
        }
      }
    };
  }

  function resetGame() {
    moleCount = 0;
    missCount = 0;
    document.getElementById("dead").textContent = moleCount;
    document.getElementById("lost").textContent = missCount;
  }

  next();
})();