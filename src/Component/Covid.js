import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Covid() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    //logic to connect API
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => setPosts(response.data.Countries))
      .catch((error) => console.log(error));
  },[]);

  //puting an array will stop calling api again and again

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h4 className="bg-secondary text-white text-center">COVID INFORMATION</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
            <table className="table table-bordered text-center text-secondary">
                <thead>
                    <tr key="">
                        <th>Country</th>
                        <th>CountryCode</th>
                        <th>Slug</th>
                        <th>NewConfirmed</th>
                        <th>TotalConfirmed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts?posts.map((c,index) => (
                            <tr key="">
                                <td>{c.Country}</td>
                                <td>{c.CountryCode}</td>
                                <td>{c.Slug}</td>
                                <td>{c.NewConfirmed}</td>
                                <td>{c.TotalConfirmed}</td>
                            </tr>
                        )): <tr key=""><td>Loading.....</td></tr>
                    }
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
}
