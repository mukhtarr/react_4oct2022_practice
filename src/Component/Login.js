import React, { useState } from 'react'

export default function Login(props) {

const [username, updateusername] = useState('')
const [password, updatepassword] = useState('')

const onTextChange = (event) => {
    switch (event.target.id) {
        case 'username':
            updateusername(event.target.value)
            break;
        case 'password':
            updatepassword(event.target.value)
            break;
        }
        
}

const onLoginClick = (event) => {
    event.preventDefault()
    console.log(username , password)
   
    props.updateUserInfo({username, password})
}


  return (
    <div>
        <h2>Login Component</h2>
        <form  onSubmit={onLoginClick}>
            <label>UserName :</label>
            <br/>
            <input
            className='form-control' 
            id='username'
            type="text" 
            value={username}
            onChange = {onTextChange}
            />
            <br/>
            <label>Password :</label>
            <br/>
            <input
            className='form-control' 
            id='password'
            type="password" 
            value={password}
            onChange = {onTextChange}
            />
            <br/>
            <button>Login</button>
        </form>

    </div>
  )
}
