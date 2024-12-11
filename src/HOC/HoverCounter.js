import React, { useState } from 'react'
import HOCDemo from './HOCDemo'

function HoverCounter({count, incrementCount, msg}) {
    
  return (
    <div>
        <button onClick={incrementCount}>
            Increment {count} times {msg}
        </button>
    </div>
  )
}
export default HOCDemo(HoverCounter)