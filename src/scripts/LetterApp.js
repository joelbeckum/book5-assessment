import { Authors } from "./Authors.js"
import { Topics } from "./Topics.js"

export const LetterApp = () => {
    return `
    <h1>Pen Pal Society</h1>

    <section class="authors">
    <label for="authors">Author</label>
    <select name="authors" id="authors">
        ${Authors()}
    </select>
    </section>

    <label for="letterField">Letter</label>
    <textarea id="letterField" name="letterField" rows="15" columns="10"></textarea>

    <section class="topics">
    <h3>Topic</h3>
        ${Topics()}
    </section>

    <section class="recipients">
    <label for="recipients">Recipient</label>
    <select name="recipients" id="recipients">
        ${Authors()}
    </select>
    </section>

    <button class="button" id="sendLetter">Send Letter</button>

    <section class="sentLetters">
    <h2>Letters</h2>

    </section>
    `
}