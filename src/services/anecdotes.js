import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (anecdote) => {
    const newAnecdote = {
        content: anecdote,
        votes: 0
    }
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

const addVote = async (id) => {
    const anecdoteToUpdate = await axios.get(baseUrl.concat(`/${id}`))
    await axios.put(baseUrl.concat(`/${id}`), {...anecdoteToUpdate.data, votes: anecdoteToUpdate.data.votes + 1})
}

export default { getAll, createAnecdote, addVote }