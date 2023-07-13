let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let clickSpeed = document.getElementById("clickSpeed");
let clicks = 0;
let startTime = new Date();

    cookie.onclick = function() {
      clicks++;
      counter.textContent = clicks;

      let currentTime = new Date();
      let timeDiff = (currentTime - startTime) / 1000; // в секундах
      let speed = clicks / timeDiff;
      clickSpeed.textContent = speed.toFixed(2); // округляем до двух знаков после запятой

      // Чередуем уменьшение и увеличение размеров печеньки
      if (cookie.style.width === "200px") {
        cookie.style.width = "150px";
        cookie.style.height = "150px";
      } else {
        cookie.style.width = "200px";
        cookie.style.height = "200px";
      }

      startTime = currentTime;
    };