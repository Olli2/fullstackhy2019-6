import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const handleClick = (type) => () => {
    store.dispatch({
      type: type
    })
  }

  const totalAmount = () => {
    return store.getState().good + store.getState().ok + store.getState().bad
  }

  const getStatsFor = (what) => {
    switch (what) {
      case 'amount':
        return totalAmount()
      case 'average':
        return store.getState().good - store.getState().bad / totalAmount()
      case 'positive':
        return store.getState().good / totalAmount() * 100
      default:
        return 0
    }
  }

  const Statistics = () => (
    <div>
      <div>yhteensä {getStatsFor('amount')}</div>
      <div>keskiarvo {getStatsFor('average')}</div>
      <div>positiivisia {getStatsFor('positive')}</div>
    </div>
  )

  return (
    <div>
      <button onClick={handleClick('GOOD')}>hyvä</button> 
      <button onClick={handleClick('OK')}>neutraali</button> 
      <button onClick={handleClick('BAD')}>huono</button>
      <button onClick={handleClick('ZERO')}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
      {totalAmount() > 0 ? <Statistics /> : <div>Ei yhtään palautetta annettu</div>}
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
