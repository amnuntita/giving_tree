import React from "react";
import { Switch, Route} from "react-router-dom";

import Post from "./pages/post/post.js";
import Result from "./pages/result/result.js";
import Home from "./pages/home/home.js";
import NavBar from "./shared/NavBar.js";
import Footer from './shared/Footer.js'

const Main = () => {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/post" component={Post} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default Main;
