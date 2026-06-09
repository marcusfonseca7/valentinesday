const menuOptionLetter = document.getElementById("1");
const textOptionLetter = document.getElementById("text-menu");

const years = document.getElementById("years")
const months = document.getElementById("months")
const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

function borderColor() {
  menuOptionLetter.style.borderBottom = "2px solid var(--vermelho-principal)";
  textOptionLetter.style.color = "var(--vermelho-principal)";
}

function timeTogether() {
  dataInicial = new Date(1701894601 * 1000)


  const dataAtual = new Date()

  differenceDate = dataAtual - dataInicial

  let seconds = Math.floor(differenceDate / 1000)
  let minutes = Math.floor(differenceDate / (1000 * 60))
  let hours = Math.floor(differenceDate / (1000 * 60 * 60))
  let days = Math.floor(differenceDate / (1000 * 60 * 60 * 24))
  console.log(differenceDate)
  console.log(seconds)
  console.log(minutes)
  console.log(hours)
  console.log(days)
}

timeTogether()