import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Post from "./pages/post.js";
import Result from "./pages/result/result.js";
import Home from "./pages/home/home.js";
import NavBar from "./shared/NavBar.js";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/" component={Post} />
      </Switch>
    </div>
  );
};

export default Main;
