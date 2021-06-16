import { fetchExternalData } from "./dataAccess.js"
import { LetterApp } from "./LetterApp.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchExternalData().then(
        () => {
            mainContainer.innerHTML = LetterApp()
        }
    )
}

render()

document.addEventListener("stateChanged", event => {
    render()
})