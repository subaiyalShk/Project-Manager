import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';


import StatusBtn from '../components/Statusbtn';
import Logoutbtn from '../components/Logout'

const IndexView = props => {
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

    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Project Manager</h1>
                </div>
        
                <div className="col-6">
                    <Logoutbtn/>
                </div>
            </div>
            
            <table className="table table-bordered " >
                <thead>
                    <th className="bg-primary">Backlog</th>  
                    <th className="bg-warning">In Progress</th>  
                    <th className="bg-success">Completed</th>    
                </thead>
                <tbody>  
                    {projects.map((proj, index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    {proj.backlog &&
                                        <div className="container">
                                            <div className="row">
                                                {proj.project}
                                            </div>
                                            <div className="row">
                                                {proj.dueDate}
                                            </div>
                                            <div className="row">
                                                <StatusBtn update={{
                                                    inProgress:true,
                                                    backlog:false,
                                                    completed:false
                                                }} project={proj} reset={reset} setReset={setReset}/>
                                            </div>
                                        </div>
                                    }
                                </td>
                                <td>
                                    {proj.inProgress &&
                                        <div className="container">
                                            <div className="row">
                                                {proj.project}
                                            </div>
                                            <div className="row">
                                                {proj.dueDate}
                                            </div>
                                            <div className="row">
                                            <StatusBtn update={{
                                                    inProgress:false,
                                                    backlog:false,
                                                    completed:true
                                                }} project={proj} reset={reset} setReset={setReset}/>
                                            </div>
                                        </div>
                                    }
                                </td>
                                <td>
                                    {proj.completed &&
                                        <div className="container">
                                            <div className="row">
                                                {proj.project}
                                            </div>
                                            <div className="row">
                                                {proj.dueDate}
                                            </div>
                                            <div className="row">
                                            <p>you deserve a cookie</p>
                                            </div>
                                        </div>
                                    }
                                </td>        
                            </tr>
                        )
                    })}
                </tbody>
                <Link to={"/create"}>Add New Project</Link>  
            </table>
        </div>
    )
}

export default IndexView;