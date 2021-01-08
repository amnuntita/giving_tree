import React from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Post from "./pages/post/post.js";
import Result from "./pages/result/result.js";
import Home from "./pages/home/home.js";
import SignUp from "./pages/sign_up.js";
import LogIn from './pages/log_in.js';

import NavBar from "./shared/NavBar.js";

const Main = () => {

  const post_page = ({match}) => {
    return(<Post postId={match.params.postId}/>)
  }

  return (
    <div className="wrap">
      <Router>
    <NavBar />
      <Switch>
      <Route path='/login' component={LogIn}/>
        <Route path='/signup' component={SignUp} />
        <Route path="/result" component={Result} />
        <Route path="/post/:postId" component={post_page} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    </div>
  );
};

export default Main;
