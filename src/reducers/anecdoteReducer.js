const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const addVote = (id) => {
  return {
    type: "ADDVOTE",
    data: {
      id: id
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: "CREATE",
    data: {
      text: anecdote
    }
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