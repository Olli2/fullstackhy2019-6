import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
      event.preventDefault()
      props.createAnecdote(event.target.newAnecdote.value)
      event.target.newAnecdote.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="newAnecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
      
  )
}


const connectedAnecdoteForm = connect(null, { createAnecdote })(AnecdoteForm)


export default connectedAnecdoteForm