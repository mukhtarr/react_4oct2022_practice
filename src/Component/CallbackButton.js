import React from 'react'
import propTypes from 'prop-types'

export default function CallbackButton(props) {

  let {theme, text} = props
  return (
    <>
       <button
       className= {`btn btn-sm btn-${theme}`}
       onClick = {props.callback} 
       >
        {text}
       </button>
    </>
  )
}

CallbackButton.defaultProps = {
  theme: 'dark',
  text: 'Default',
  
}

CallbackButton.propTypes = {
  theme : propTypes.string,
  text : propTypes.string,
  callback : propTypes.func
}
