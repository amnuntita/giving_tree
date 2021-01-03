import React from "react";
import { Switch, Route} from "react-router-dom";

import Post from "./pages/post/post.js";
import Result from "./pages/result/result.js";
import Home from "./pages/home/home.js";
import SignUp from "./pages/sign_up.js";
import LogIn from './pages/log_in.js';

import NavBar from "./shared/NavBar.js";
import Footer from './shared/Footer.js'

const Main = () => {
  return (
    <div>
    <NavBar />
      <Switch>
      <Route path='/login' component={LogIn}/>
        <Route path='/signup' component={SignUp} />
        <Route path="/result" component={Result} />
        <Route path="/post" component={Post} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default Main;
