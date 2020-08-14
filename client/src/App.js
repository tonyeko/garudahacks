import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <section className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
