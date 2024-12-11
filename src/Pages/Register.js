import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate()

  const [newRecord, setNewRecord] = useState({
    id: "",
    email: "",
    password: "",
    name: "GUEST",
    role: "Guest",
  });

  const createRecord = () => {
    axios
      .post("http://localhost:3001/users", newRecord)
      .then((response) => {
        alert("Record Added Successfully");
        navigate('/login')
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h1>User Registration</h1>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) =>
              setNewRecord({
                ...newRecord,
                email: event.target.value,
              })
            }
          />

          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(event) =>
              setNewRecord({ ...newRecord, password: event.target.value })
            }
          />

          <button onClick={createRecord} className="btn btn-lg btn-info mt-4">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
