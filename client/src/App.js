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
// import Drawer from './components/Drawer'
import ProfileView from './views/ProfileView';
import ChatView from './views/ChatView';
import Zoom from './views/Zoom_join'

// axios.interceptors.response.use(response => response, 
//   ()=>navigate('/login'))

function App() {
  const[projects, setProjects]=useState([]);
  const[reset, setReset]=useState(false);
  const[user, setUser]= useState({
    _id:'',
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
  });

  useEffect(()=>{
    axios.get('http://localhost:8000/api/projects', {withCredentials:true})
    .then((response)=>{
        setProjects(response.data)
        setUser(JSON.parse(sessionStorage.getItem('user')))
    })
    .catch(err=>{
        console.log(err);
        if(err.response.data.message=="Unauthorized"){
          navigate('/login')
      }
    })
},[reset])

  return (
    <div className="App">
        <Router>
          <Login setUser={setUser} setReset={setReset} path="/login"/>
          <Menu path="/">
            <IndexView projects={projects} setReset={setReset} path="/" />
            <CreateView setReset={setReset} path="/create" />
            <EditView setReset={setReset} path="/edit/:id" />
            <ProfileView user={user} setUser={setUser} setReset={setReset} path="/profile"/>
            <TestView path="/test" />
            <ChatView path="/chat/:name/channel/:room"/>
          </Menu>
          <Zoom path="/zoom"/>
        </Router>
    </div>
  );
}

export default App;
