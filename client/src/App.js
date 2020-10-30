import React, {useState, useEffect} from 'react';
import './App.css';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/LoginView'
import TestView from './views/TestView'
import EditView from './views/EditView'
import Menu from './components/Menu'

// axios.interceptors.response.use(response => response, 
//   ()=>navigate('/login'))

function App() {
  const[projects, setProjects]=useState([]);
  const[reset, setReset]=useState(false)

  useEffect(()=>{
    axios.get('http://localhost:8000/api/projects')
    .then((response)=>{
        setProjects(response.data)
    })
    .catch(err=>{
        console.log(err);
    })
},[reset])

  return (
    <div className="App">
      <Menu>
        <Router>
          <Login path="/login"/>
          <IndexView projects={projects} setReset={setReset} path="/" />
          <CreateView setReset={setReset} path="/create" />
          <EditView setReset={setReset} path="/edit/:id" />
          <TestView path="/test" />
        </Router>
      </Menu>
    </div>
  );
}

export default App;
