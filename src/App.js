import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";

export default function App() {
  let routes = (
      <Switch>
        <Route to="/" component={MainPage}/>
        <Redirect to="/" />
      </Switch>
  );
  return (
      <div className="App">
          {routes}
      </div>
  )
}
