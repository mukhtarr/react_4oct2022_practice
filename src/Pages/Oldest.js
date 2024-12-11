import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";

export default function Oldest() {

  const navigate = useNavigate()
  
  const [posts, setPosts] = useState();
 

  useEffect(() => {
    //logic to connect API --- read all records
    axios
      .get("http://localhost:3001/posts")
      .then((response) => {
        let postData = response.data
        postData = postData.filter(p => (p.latest === false && p.oldest === true))
        setPosts(postData)
      })
      .catch((error) => console.log(error));
  },[]);
  //puting an array will stop calling api again and again
  


  return (
    <div className='container mt-4'>
    <div className="row">
      <div className="col-md-12">
          <table className="table table-bordered table-info text-center text-secondary">
              <thead>
                  <tr key="">
                      <th>ID</th>
                      <th>Title</th>
                      <th>Body</th>
                      {/* <th colSpan={2}>Action</th> */}
                  </tr>
              </thead>
              <tbody>
                  {
                      posts?posts.map((p,index) => (
                          <tr key="">
                              <td>{p.id}</td>
                              <td>{p.title}</td>
                              <td>{p.body}</td>
                          </tr>
                      )): <tr key=""><td>Loading.....</td></tr>
                  }
              </tbody>
          </table>
      </div>
    </div>

  </div>
  )
}
