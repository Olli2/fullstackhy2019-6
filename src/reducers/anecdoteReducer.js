import anecdoteService from '../services/anecdotes'

export const addVote = (id) => {
  return async dispatch => {
    await anecdoteService.addVote(id)
    dispatch({
      type: "ADDVOTE",
      data: {
        id: id
      }
    })
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const response = await anecdoteService.createAnecdote(anecdote)
    dispatch({
      type: "CREATE",
      data: {
        ...response
      }
    })
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADDVOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(n => n.id === id)
      const changedAnecdote =  {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    case 'CREATE':
      const createdAnecdote = action.data
      return state.concat(createdAnecdote)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default reducer