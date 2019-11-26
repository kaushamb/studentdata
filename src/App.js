import React, { Component} from 'react';
import './App.css';
import { Link , Switch , Route } from "react-router-dom";
import Login from "./components/login";
import Admin from "./components/admin";
import Logout from "./components/logout";
import detail from './components/detail';

export default class App extends Component {
  render(){
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/detail" component={detail}/>
    </Switch>
  );
 }
}