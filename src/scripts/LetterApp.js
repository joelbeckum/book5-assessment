

export const LetterApp = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="authors">
    <h3>Author</h3>
    
    </section>

    <label for="letterField">Letter</label>
    <textarea id="letterField" name="letterField" rows="15" columns="10"></textarea>

    <section class="topics">
    <h3>Topic</h3>

    </section>

    <section class="recipients">
    <h3>Recipient</h3>
    
    </section>

    <button class="button" id="sendLetter">Send Letter</button>

    <section class="sentLetters">
    <h2>Letters</h2>

    </section>
    `
}