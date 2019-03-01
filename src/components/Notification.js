import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  return (
    props.text === ''
      ? <div></div>
      : <div style={style}>
          {props.text}
        </div>
  )
}



export default Notification
