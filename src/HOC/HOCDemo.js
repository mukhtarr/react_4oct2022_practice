import React, { useState } from 'react'

export default function HOCDemo(OGComponent) {
   
    function NEWComponent(){
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(c=>c+1)
    }

    return <OGComponent count = {count} incrementCount = {incrementCount} />

   }
  return NEWComponent
}
