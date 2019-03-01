import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { showVoteNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {

    const anecdotes = store.getState().anecdotes

    const vote = (id) => {
        store.dispatch( addVote(id) )
        store.dispatch( showVoteNotification(store.getState().anecdotes.find(n => n.id === id).content) )
        setTimeout(() => {
            store.dispatch( hideNotification() )
          }, 5000)
    }
        
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList