import React, {useState} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';



const StatusButton = props => {
    const [projectObj, setProjectObj] = useState(props.project)
    const {update, reset, setReset}=props
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            width: '190px',
            
        },
    }));
    const classes = useStyles();  

    const onClickHandler = e => {
        let project =projectObj;
        for(var key in update){
            project[key]= update[key]
        }
        const payload={
            project:project.project,
            dueDate:project.dueDate,
            completed:project.completed,
            backlog:project.backlog,
            inProgress:project.inProgress
        }
        Axios.put("http://localhost:8000/api/project/" + projectObj._id, payload)
        .then(response => {
            console.log(response);
            setReset(!reset);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClickHandler}
            className={classes.button}
        >Start</Button>
    )
}

export default StatusButton;