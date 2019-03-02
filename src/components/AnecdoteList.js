import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showVoteNotification } from '../reducers/notificationReducer'
import Notification from './Notification'

const AnecdoteList = (props) => {

    const anecdotes = props.anecdotes

    const vote = (id) => {
        props.addVote(id)
        props.showVoteNotification(anecdotes.find(n => n.id === id).content, 1)
    }
        
    return (
        <div>
            <Notification/>
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

const mapStateToProps = (state) => {    
    return {
      anecdotes: state.anecdotes,
      notification: state.notification,
    }
  }

const connectedAnecdotes = connect(mapStateToProps, { showVoteNotification, addVote })(AnecdoteList)
export default connectedAnecdotes