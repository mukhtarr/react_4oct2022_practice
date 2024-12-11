import React from 'react'

export default function Employee(props) {
    const sayHello = (name)=>{
        alert(`Hi ${name}`)
      }
    
  return (
    <div>
        {
            props.data.map((emp)=>(
                <>
                <li>
                    {emp.id}, {emp.name}, {emp.age}
                </li> 
                {/* <button onClick={sayHello}>Print Name</button> */}
                <button onClick={()=>sayHello(emp.name)}>Print Name</button>
                </>
            ))

        }
    </div>
  )
}
