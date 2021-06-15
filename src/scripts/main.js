import { fetchAuthors } from "./dataAccess.js"
import { LetterApp } from "./LetterApp.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors().then(
        () => {
            mainContainer.innerHTML = LetterApp()
        }
    )
}

render()