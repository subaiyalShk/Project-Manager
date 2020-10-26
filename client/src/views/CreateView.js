import React, {useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const CreateView = props => {
    const [error, setError] = useState("");
    const [project, setProject] = useState("");
    const [dueDate, setDate]= useState("");


    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/project", {
            project,
            dueDate
        })
        .then(response=>{
            navigate('/');
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err);
            setError(err.response.data.errmsg);
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1>Project Manager</h1> 
                </div>
                <div className="col-4">
                    <Link to="/">Back to Dashboard</Link>
                </div>
            </div>
            <br>
            </br>
            <br>
            </br>
            <div className="row">
                <div className="col-12">
                    <h4>Plan a Project</h4>
                </div>
            </div>

            {error&&
                <p>{error}</p>
            }
            <br>
            </br>
           <form className="container" onSubmit={(onSubmitHandler)}>
                <div className="col-12">
                        <label>Project</label>
                        <input type="text" name="project"  onChange={e=>{setProject(e.target.value)}}/>
                </div>
                <div classname="col-12">
                        <label>Date</label>
                        <input type="date" name="dueDate" onChange={e=>{setDate(e.target.value)}}/>
                </div>
            <button type="submit">Plan Project</button>
            </form>
        </div>
    )
}

export default CreateView;