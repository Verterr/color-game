import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import GamePage from "./Components/GamePage/GamePage";

export default function App() {
  let routes = (
      <Switch>
          <Route path="/game" component={GamePage}/>
          <Route path="/" component={MainPage}/>
          <Redirect to="/" />
      </Switch>
  );
  return (
      <div className="App">
          {routes}
      </div>
  )
}
