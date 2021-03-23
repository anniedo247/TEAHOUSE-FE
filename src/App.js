import React,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes"
import authActions from "./redux/actions/auth.actions";
import {useDispatch} from "react-redux"

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(authActions.getCurrentUser())
  },[])
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
