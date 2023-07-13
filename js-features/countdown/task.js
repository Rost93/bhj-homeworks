document.addEventListener("DOMContentLoaded", function() {
  let timerElement = document.getElementById("timer");
  let seconds = parseInt(timerElement.textContent);

  let interval = setInterval(function() {
    seconds--;
    timerElement.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(interval);
      alert("Вы победили в конкурсе!");
    }
  }, 1000);
});