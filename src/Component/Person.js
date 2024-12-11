import React from 'react'

export default function Person(props) {

    let {email, gender, city} = props.names

  return (
    <div>

    Email is {email} <br/>
    Gender is {gender} <br/>
    City is {city} <br/>

    

    </div>
  )
}
