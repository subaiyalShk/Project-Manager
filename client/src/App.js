import React from 'react';
import './App.css';
import { Router, Link, navigate } from '@reach/router';
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/LoginView'
import TestView from './views/TestView'
import Menu from './components/Menu'

// axios.interceptors.response.use(response => response, 
//   ()=>navigate('/login'))

function App() {
  return (
    <div className="App">
      <Menu>
        <Router>
          <Login path="/login"/>
          <IndexView path="/" />
          <CreateView path="/create" />
          <TestView path="/test" />
        </Router>
      </Menu>
    </div>
  );
}

export default App;
