const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

const applicationState = {
    authors: [],
    letters: [],
    topics: []
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (externalAuthors) => {
                applicationState.authors = externalAuthors
            }
        )
}

export const getAuthors = () => {
    return [...applicationState.authors]
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response = response.json())
        .then(
            (externalTopics) => {
                applicationState.topics = externalTopics
            }
        )
}

export const getTopics = () => {
    return [...applicationState.topics]
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response = response.json())
        .then(
            (externalLetters) => {
                applicationState.letters = externalLetters
            }
        )
}

export const getLetters = () => {
    return [...applicationState.letters]
}