import React from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
