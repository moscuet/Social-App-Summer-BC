import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';import LoginForm from './components/loginForm/LoginForm'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
          <LoginForm/>
      </Router>
    </div>
  );
}

export default App;
