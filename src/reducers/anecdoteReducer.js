import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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
    await anecdoteService.createAnecdote(anecdote)
    dispatch({
      type: "CREATE",
      data: {
        text: anecdote
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
      return state.concat(asObject(action.data.text))
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default reducer