import React, {useState} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';



const StatusButton = props => {
    const {setReset, project} = props;
    const nextStatus = props.nextStat.status
    const onClickHandler = e => {
        let update = {
            ...project,
            'status':nextStatus
        }
        Axios.put("http://localhost:8000/api/project/" + project._id, update, {withCredentials:true})
        .then(response => {
            console.log(response);
            setReset((reset)=>{return(!reset)})
        })
        .catch(err => {
            console.log(err);
        })
    }
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            width: '190px',
            backgroundColor:props.nextStat.color
        },
    }));
    const classes = useStyles();  
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

// g5RV@E#rnnbg6-bB