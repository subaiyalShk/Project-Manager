import React, {useState} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';



const StatusButton = props => {
    const project = props.project
    const nextStatus = props.nextStat.status
    let update = {
        ...project,
        'status':nextStatus
        
    }
    const [projectObj, setProjectObj] = useState(update)
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            width: '190px',
            backgroundColor:props.nextStat.color
        },
    }));
    const classes = useStyles();  

    const onClickHandler = e => {
        Axios.put("http://localhost:8000/api/project/" + project._id, projectObj)
        .then(response => {
            console.log(response);
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
        >{props.nextStat.newStat}</Button>
    )
}

export default StatusButton;