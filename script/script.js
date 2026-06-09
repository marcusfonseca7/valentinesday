const menuOptionLetter = document.getElementById("1");
const textOptionLetter = document.getElementById("text-menu");

const yearsDiv = document.getElementById("years")
const monthsDiv = document.getElementById("months")
const daysDiv = document.getElementById("days")
const hoursDiv = document.getElementById("hours")
const minutesDiv = document.getElementById("minutes")
const secondsDiv = document.getElementById("seconds")

function borderColor() {
  menuOptionLetter.style.borderBottom = "2px solid var(--vermelho-principal)";
  textOptionLetter.style.color = "var(--vermelho-principal)";
}

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
