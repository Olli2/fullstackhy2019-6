import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {

  const addAnecdote = (event) => {
      event.preventDefault()
      store.dispatch(
        createAnecdote(event.target.newAnecdote.value)
      )
      event.target.newAnecdote.value = ''
  }

  return (
      <form onSubmit={addAnecdote}>
        <div><input name="newAnecdote" /></div>
        <button type="submit">create</button>
      </form>
  )
}

export default AnecdoteForm