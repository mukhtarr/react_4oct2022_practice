import React from 'react'

export default function Greet({name,age,address}) {
        
    //Destructure props object
    // let {name, age, address} = props

  return (
    <div>
        <h1>Welcome {name} your age is {age} and address is {address} </h1>
    </div>
  )
}
