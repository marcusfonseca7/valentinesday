const yearsDiv = document.getElementById("years")
const monthsDiv = document.getElementById("months")
const daysDiv = document.getElementById("days")
const hoursDiv = document.getElementById("hours")
const minutesDiv = document.getElementById("minutes")
const secondsDiv = document.getElementById("seconds")

function timeTogether() {
  inicialDate = new Date(1701894601 * 1000)


  const dateNow = new Date()

  differenceDate = dateNow - inicialDate

  let seconds = Math.floor(differenceDate / 1000)
  let minutes = Math.floor(differenceDate / (1000 * 60))
  let hours = Math.floor(differenceDate / (1000 * 60 * 60))
  
  let days = dateNow.getDate() - inicialDate.getDate()
  let months = dateNow.getMonth() - inicialDate.getMonth()
  let years = dateNow.getFullYear() - inicialDate.getFullYear()

  if (days < 0) {
        months--;
        const lastMonth = new Date(
            dateNow.getFullYear(),
            dateNow.getMonth(),
            0
        ).getDate();

        days += lastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }


  secondsDiv.textContent = `${seconds % 60}`
  minutesDiv.textContent = `${minutes % 60}`
  hoursDiv.textContent = `${hours % 24}`
  daysDiv.textContent = `${days}`
  monthsDiv.textContent = `${months}`
  yearsDiv.textContent = `${years}`


}

timeTogether()
setInterval(timeTogether, 1000)

// parte do menu para acender - jeito "bruto"

const liLetter = document.getElementById("li-letter");
const liPhotos = document.getElementById("li-photos");
const liMoments = document.getElementById("li-moments");
const liPlaylist = document.getElementById("li-playlist");

const letterLink = document.getElementById("le");
const photosLink = document.getElementById("ph");
const momentsLink = document.getElementById("mo");
const playlistLink = document.getElementById("pl");


letterLink.addEventListener("click", () => {
letterLink.style.color = "var(--vermelho-principal)"
liLetter.style.borderBottom = "1px solid var(--vermelho-principal)"
})

photosLink.addEventListener("click", () => {
photosLink.style.color = "var(--vermelho-principal)"
liPhotos.style.borderBottom = "1px solid var(--vermelho-principal)"
})

momentsLink.addEventListener("click", () => {
momentsLink.style.color = "var(--vermelho-principal)"
liMoments.style.borderBottom = "1px solid var(--vermelho-principal)"
})

playlistLink.addEventListener("click", () => {
playlistLink.style.color = "var(--vermelho-principal)"
liPlaylist.style.borderBottom = "1px solid var(--vermelho-principal)"
})