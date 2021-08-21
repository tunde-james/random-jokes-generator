const setupDiv = document.getElementById("setup")
const punchlineDiv = document.getElementById("punchline")
const punchlineBtn = document.getElementById("punchlineBtn")
const newJokeBtn = document.getElementById('newJokeBtn')
let punchline

punchlineBtn.addEventListener("click", getPunchline);
newJokeBtn.addEventListener("click", getJoke)

function getPunchline() {
  punchlineDiv.innerHTML = punchline
  punchlineDiv.classList.add("bubble")
  punchlineBtn.classList.toggle("hidden")
  newJokeBtn.classList.toggle("hidden")
}

async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  )

  const joke = await jokePromise.json()
  setupDiv.textContent = joke[0].setup

  punchline = joke[0].punchline

  punchlineDiv.textContent = ""
  punchlineDiv.classList.remove("bubble")

  punchlineBtn.classList.toggle("hidden")
  newJokeBtn.classList.toggle("hidden")
}
getJoke()
