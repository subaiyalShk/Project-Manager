import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        alignItems:"flex-start"
        },
    },
}));

export default function PostStatus() {
    const classes = useStyles();
    const handleClick = event => {
    
    }

return (
    <form className={classes.root} noValidate autoComplete="off">
        <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
        <TextField 
            id="standard-basic" 
            label="Post Status" 
        />
        <IconButton 
            style={{width:'50px'}}
            aria-label="send"
            onClick={handleClick}
        >
            <SendIcon />
        </IconButton >
    </form>
    );
}