import { LetterApp } from "./LetterApp.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = LetterApp()
}

render()