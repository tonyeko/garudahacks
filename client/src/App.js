import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import AdminIndexPage from "./pages/admin";
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={AdminIndexPage} />
      </Switch>
      {/* <section className="container"> */}
      {/* </section> */}
    </BrowserRouter>
  );
}

export default App;
