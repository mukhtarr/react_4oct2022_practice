import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Liked from "../Pages/Liked";
import Disliked from "../Pages/Disliked";
import Latest from "../Pages/Latest";
import Oldest from "../Pages/Oldest";
 

export default function Posts() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item fs-5">
          <Link className="nav-link" to="liked">
            All-Posts
          </Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link" to="latest">
            Latest-Posts
          </Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link" to="oldest">
            Oldest-Posts
          </Link>
        </li>
      </ul>

    {/* Routing Configuration */}
   <Routes>
      <Route path="/liked" element={ <Liked /> }  />
      <Route path="/latest" element={ <Latest/> }  />
      <Route path="/oldest" element={ <Oldest/> }  />
    </Routes>

    </>
  );
}
