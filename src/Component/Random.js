import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Random() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    //logic to connect API
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => setPosts(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h4 className="bg-secondary text-white text-center">
            RANDOM USER LIST
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr key="">
                <th>Sr. No</th>
                <th>Title</th>
                <th>First</th>
                <th>Last</th>
                <th>Gender</th>
                <th>Location-City</th>
                <th>Location-state</th>
                <th>Location-country</th>
                <th>Location-postcode</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {posts ? (
                posts.map((r, index) => (
                  <tr key="">
                    <td>{index+1}</td>
                    <td>{r.name.title}</td>
                    <td>{r.name.first}</td>
                    <td>{r.name.last}</td>
                    <td>{r.gender}</td>
                    <td>{r.location.city}</td>
                    <td>{r.location.state}</td>
                    <td>{r.location.country}</td>
                    <td>{r.location.postcode}</td>
                    <td>{r.dob.age}</td>
                  </tr>
                ))
              ) : (
                <tr key="">
                  {" "}
                  <td> Loading... </td>{" "}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
