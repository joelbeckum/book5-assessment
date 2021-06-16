import { getAuthors, getLetters, getTopics } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")



// document.addEventListener(
//     "click", event => {
//         if (event.target.id === "sendLetter") {
//             const authorId = document.getElementById("authorSelect").value
//             // const topicId = document.querySelector()
//             window.alert(`the selected author's id is ${authorId}`)
//         }
//     }
// )