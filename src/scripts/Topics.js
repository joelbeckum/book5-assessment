import { getTopics } from "./dataAccess.js"

export const Topics = () => {
    const topics = getTopics()

    let html = topics.map(topic => {
                return `<input type="radio" class="topic" name="topic" id="${topic.id}" value="${topic.id}">
                        <label for="${topic.id}">${topic.name}</label>`
    }).join("")

    return html
    
}