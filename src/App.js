import React from 'react';
import './App.css';
import Feedback from "./components/Feedback";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/feedback" component={Feedback}/>
        <Route exact path="/about" component={About}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
