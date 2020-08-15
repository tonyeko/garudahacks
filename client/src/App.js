import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import OCR from "./pages/OCR";
import AdminIndexPage from "./pages/admin";
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={AdminIndexPage} />
        <Route exact path="/OCR" component={OCR} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
