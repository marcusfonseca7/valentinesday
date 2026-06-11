const yearsDiv = document.getElementById("years");
const monthsDiv = document.getElementById("months");
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");

const photoCarousel = document.getElementById("photo-carousel");
const nextImageArrow = document.getElementById("next-image");
const previousImageArrow = document.getElementById("previous-image");
const photoIndex = document.getElementById("photos-index");

function timeTogether() {
  inicialDate = new Date(1701894601 * 1000);

  const dateNow = new Date();

  differenceDate = dateNow - inicialDate;

  let seconds = Math.floor(differenceDate / 1000);
  let minutes = Math.floor(differenceDate / (1000 * 60));
  let hours = Math.floor(differenceDate / (1000 * 60 * 60));

  let days = dateNow.getDate() - inicialDate.getDate();
  let months = dateNow.getMonth() - inicialDate.getMonth();
  let years = dateNow.getFullYear() - inicialDate.getFullYear();

  if (days < 0) {
    months--;
    const lastMonth = new Date(
      dateNow.getFullYear(),
      dateNow.getMonth(),
      0,
    ).getDate();

    days += lastMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  secondsDiv.textContent = `${seconds % 60}`;
  minutesDiv.textContent = `${minutes % 60}`;
  hoursDiv.textContent = `${hours % 24}`;
  daysDiv.textContent = `${days}`;
  monthsDiv.textContent = `${months}`;
  yearsDiv.textContent = `${years}`;
}

timeTogether();
setInterval(timeTogether, 1000);

// parte do menu para acender - jeito "bruto"

const liLetter = document.getElementById("li-letter");
const liPhotos = document.getElementById("li-photos");
const liMoments = document.getElementById("li-moments");
const liPlaylist = document.getElementById("li-playlist");

const letterLink = document.getElementById("le");
const photosLink = document.getElementById("ph");
const momentsLink = document.getElementById("mo");
const playlistLink = document.getElementById("pl");

// REFATORAR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function cleanColors() {
  letterLink.style.color = "var(--texto-cinza-medio)";
  liLetter.style.borderBottom = "1px solid var(--bg-card)";

  photosLink.style.color = "var(--texto-cinza-medio)";
  liPhotos.style.borderBottom = "1px solid var(--bg-card)";

  momentsLink.style.color = "var(--texto-cinza-medio)";
  liMoments.style.borderBottom = "1px solid var(--bg-card)";

  playlistLink.style.color = "var(--texto-cinza-medio)";
  liPlaylist.style.borderBottom = "1px solid var(--bg-card)";
}

letterLink.addEventListener("click", () => {
  cleanColors();
  letterLink.style.color = "var(--vermelho-principal)";
  liLetter.style.borderBottom = "1px solid var(--vermelho-principal)";
});

photosLink.addEventListener("click", () => {
  cleanColors();

  photosLink.style.color = "var(--vermelho-principal)";
  liPhotos.style.borderBottom = "1px solid var(--vermelho-principal)";
});

momentsLink.addEventListener("click", () => {
  cleanColors();

  momentsLink.style.color = "var(--vermelho-principal)";
  liMoments.style.borderBottom = "1px solid var(--vermelho-principal)";
});

playlistLink.addEventListener("click", () => {
  cleanColors();

  playlistLink.style.color = "var(--vermelho-principal)";
  liPlaylist.style.borderBottom = "1px solid var(--vermelho-principal)";
});

const arrayPhotos = [
  "img/carousel1.jpeg",
  "img/carousel2.jpg",
  "img/carousel3.jpg",
  "img/carousel4.jpg",
  "img/carousel5.jpg",
  "img/carousel6.jpg",
  "img/carousel7.jpg",
  "img/carousel8.jpg",
];

let i = 0;
let j = 0;

function nextImage() {
  photoCarousel.src = arrayPhotos[i];
  i++;

  if (i >= arrayPhotos.length) {
    i = 0;
  }

  photoIndex.textContent = j + 1;
  j++;
  if (j >= arrayPhotos.length) {
    j = 0;
  }
}

nextImage();

nextImageArrow.addEventListener("click", nextImage);

function previousImage() {
    photoCarousel.src = arrayPhotos[i - 1];
    i--;

  if (i <= 0) {
    i = arrayPhotos.length;
  }

  photoIndex.textContent = j;
  j--;
  if (j <= 0) {
    j = arrayPhotos.length;
  }
}

previousImageArrow.addEventListener("click", previousImage);
