import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import Requests from "./components/Requests";
import Connections from "./components/Connections";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/connections" element={<Connections />}></Route>
            <Route path="/requests" element={<Requests />}></Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
