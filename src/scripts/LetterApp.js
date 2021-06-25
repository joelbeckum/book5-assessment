import { Authors } from "./Authors.js"
import { sendLetter } from "./dataAccess.js"
import { Topics } from "./Topics.js"
import { Letters } from "./Letters.js"

export const LetterApp = () => {
    return `
    <h1>Pen Pal Society</h1>

    <section class="authors">
    <label class="fieldLabel" for="authorSelect">Author</label>
    <select class="field" name="authorSelect" id="authorSelect">
        ${Authors()}
    </select>
    </section>

    <label class="fieldLabel" for="letterField">Letter</label>
    <textarea class="field" id="letterField" name="letterField" rows="15" columns="70"></textarea>

    <section class="topics">
    <label class="fieldLabel" for="1">Topic</label>
    <div class="topicInputs">
        ${Topics()}
    </div>    
    </section>

    <section class="recipients">
    <label class="fieldLabel" for="recipientSelect">Recipient</label>
    <select class="field" name="recipientSelect" id="recipientSelect">
        ${Authors()}
    </select>
    </section>

    <button class="button" id="sendLetter">Send Letter</button>

    <section class="sentLetters">
    <h2>Letters</h2>
        ${Letters()}
    </section>

    <footer class="bottomBar">
        &copy C49 Industries, All Rights Reserved
    </footer>
    `
}

document.addEventListener(
    "click", event => {
        if (event.target.id === "sendLetter") {
            const authorId = document.getElementById("authorSelect").value
            const recipientId = document.getElementById("recipientSelect").value
            const body = document.getElementById("letterField").value
            
            const topicChecked = document.querySelector("input[name='topic']:checked")
            if (!topicChecked) {
                window.alert("Please select a topic")
                return
            }
            const topicId = topicChecked.value

            const pendingLetter = {
                authorId: authorId,
                recipientId: recipientId,
                body: body,
                topicId: topicId,
                dateComposed: Date.now()
            }



            sendLetter(pendingLetter)

            console.log(`Info to sent to api: ${pendingLetter.authorId}, ${pendingLetter.recipientId}, ${pendingLetter.topicId}, ${pendingLetter.body}, ${pendingLetter.dateComposed}`)
        }
    }
)