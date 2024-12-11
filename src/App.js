import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EditPosts from "./Component/EditPosts";
import ItemContainer from "./Component/ItemContainer";
import Posts from "./Component/Post";
import Post from "./Component/Post";
import ClickCounter from "./HOC/ClickCounter";
import HOCDemo from "./HOC/HOCDemo";
import HoverCounter from "./HOC/HoverCounter";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Welcome from "./Pages/Welcome";
import store from "./redux/store";
import Random from "./Component/Random";
import Covid from "./Component/Covid";
import Register from "./Pages/Register";
import AddPost from "./Pages/AddPost";

function App() {


  return (
    <div className="App container mt-4">
      <BrowserRouter>
        <Menu />
        <hr />
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/random" element={<Random />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/addposts" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/posts/:id" element={<EditPosts/>} /> */}
        </Routes>
        <hr />
      </BrowserRouter>
    </div>
  );
}

export default App;
