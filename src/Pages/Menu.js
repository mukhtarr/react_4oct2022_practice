import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Menu() {

  const navigate = useNavigate()

  const [role, setrole] = useState()

  const params = useLocation()
  console.log(params)

  useEffect(() => {
   let userrole = sessionStorage.getItem('role')
   setrole(userrole)

  },[params])

  const logoutprocess = () => {
    sessionStorage.removeItem('role')
    alert('Logout Successfully')
    navigate('login')
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <div className="container-fluid">
    <Link className="navbar-brand" to= "/" > <b>R E A C T</b> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">  
        
        {
          role ? (role === 'Admin') ? (
            <>
              <Link className="nav-link fs-5" to="/welcome">Welcome</Link>
              <Link className="nav-link fs-5" to="/random">Random</Link>
              <Link className="nav-link fs-5" to="/covid">Covid</Link>
              <Link className="nav-link fs-5" to="/posts">Post</Link>
              <Link className="nav-link fs-5" to="/addposts">Add-Post</Link>
              <button className='btn btn-dark fs-5' onClick={logoutprocess}>Logout</button>
            </>
          ) : (
            <>
              <Link className="nav-link fs-5" to="/welcome">Welcome</Link>
              <Link className="nav-link fs-5" to="/random">Random</Link>
              <Link className="nav-link fs-5" to="/covid">Covid</Link>
              <Link className="nav-link fs-5" to="/posts">Post</Link>
              <button className='btn btn-dark fs-4' onClick={logoutprocess}>Logout</button>
            </>
          ) : (
            <>
              <Link className="nav-link fs-4" to="/login">Login</Link>
              <Link className="nav-link fs-4" to="/register">Register</Link>
            </>
          )
        }
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
