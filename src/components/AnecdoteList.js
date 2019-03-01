import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showVoteNotification, hideNotification } from '../reducers/notificationReducer'
import Notification from './Notification'

const AnecdoteList = (props) => {

    const anecdotes = props.anecdotes

    const vote = (id) => {
        props.dispatch( addVote(id) )
        props.dispatch( showVoteNotification(anecdotes.find(n => n.id === id).content) )
        setTimeout(() => {
            props.dispatch( hideNotification() )
          }, 5000)
    }
        
    return (
        <div>
            <Notification text={props.notification}/>
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

const connectedAnecdotes = connect(mapStateToProps)(AnecdoteList)
export default connectedAnecdotes