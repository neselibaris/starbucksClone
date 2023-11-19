document.addEventListener("DOMContentLoaded", function () {
  updateClock(); // Sayfa yüklendiğinde saat bilgisini güncelle
  setInterval(updateClock, 1000); // 1 saniyede bir saat bilgisini güncelle
});

function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();

  var iconElement = document.getElementById("icon");
  var textElement = document.getElementById("text");

  var svg1 = "url('./images/img/sun-svgrepo-com.svg')";
  var svg2 = "url('./images/img/moon-svgrepo-com.svg')";
  var svg3 = "url('./images/img/tea-svgrepo-com.svg')";
  var svg4 = "url('./images/img/coffee-svgrepo-com.svg')";

  if (hours >= 6 && hours < 12) {
    // Günaydın
    iconElement.style.backgroundImage = svg1;
    textElement.textContent = "Günaydın!";
  } else if (hours >= 12 && hours < 17) {
    // İyi öğleler
    iconElement.style.backgroundImage = svg4;
    textElement.textContent = "İyi öğleler!";
  } else if (hours >= 17 && hours < 23) {
    // İyi akşamlar
    iconElement.style.backgroundImage = svg3;
    textElement.textContent = "İyi akşamlar!";
  } else {
    // İyi geceler
    iconElement.style.backgroundImage = svg2; // You can set svg4 to the appropriate background image for "İyi geceler"
    textElement.textContent = "İyi geceler!";
  }
}
