import React, { useState } from 'react'
import HOCDemo from './HOCDemo'

function ClickCounter({count, incrementCount, msg}) {
   
  return (
    <div>
        <button onClick={incrementCount}>
            Increment {count} times {msg}
        </button>
    </div>
  )
}
export default HOCDemo(ClickCounter)