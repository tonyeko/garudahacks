import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./Component/NavigationBar";
import OCR from "./pages/patients";
import AdminIndexPage from "./pages/admin";
import "./App.css";
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
