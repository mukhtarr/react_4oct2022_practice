import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {

const [loginInfo, setloginInfo] = useState({Email:'', Password:''})
const [users, setusers] = useState()

const navigate = useNavigate();

    const inputRef = useRef()

    useEffect(() => {
      axios
      .get(`http://localhost:3001/users`)
      .then((response) => {
        setusers(response.data)
      })
      .catch((error) => console.log(error.message))
    }, [])

   const loginProcess = () => {
      let founduser = users.find((u) => u.email === loginInfo.Email)
      if(founduser){
        if (founduser.password === loginInfo.Password){
          if (founduser.role === "Admin"){
            sessionStorage.setItem("role", "Admin");
            navigate("/welcome");
          }
          else{
            sessionStorage.setItem("role", "Guest");
            navigate("/welcome");
          }
        }
        else{
          alert("Wrong Password");
        }
      }
      else{
        alert("Username does not exist");
      }
   }

  

  return (
    <div className="container mt-4">
     
          <h1>Login Page</h1>
            <label>Email</label>
            <input className="form-control" type="email" ref={inputRef} onChange= {(e) => setloginInfo({...loginInfo, Email: e.target.value})} />
            
            <label>Password</label>
            <input className="form-control" type="password" onChange= {(e) => setloginInfo({...loginInfo, Password: e.target.value})} />
                <br/>
            <button className="btn btn-lg btn-info" onClick={loginProcess}>Login</button>
            <hr/>
            {/* <h3>{JSON.stringify(loginInfo)}</h3> */}
    </div>
  );
}
