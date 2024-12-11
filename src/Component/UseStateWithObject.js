import React, { useState } from 'react'

export default function UseStateWithObject() {
    const [name, setName] = useState({fname:'',lname:''})
  return (
    <div className='container mt-4 text-center'>
        <form>
            <p>
                FirstName : 
            <input type="text" onChange={(event) => setName({...name,fname: event.target.value})} />
            </p>
            <p>
            LastName : 
            <input type="text" onChange={(event) => setName({...name, lname: event.target.value})} /> 
            </p>

            <h3>{JSON.stringify(name)}</h3>
        </form>
    </div>
  )
}
