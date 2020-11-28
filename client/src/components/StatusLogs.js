import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import {List, TextField, Divider, IconButton, Avatar, ListItemAvatar, Typography, ListItemText} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import PostStatus from '../components/PostStatus';


const StatusLogs = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
        }));
    const classes = useStyles();
    const logs = props.logs
    const handleClick = event => {
    
    }

    return (
        <List className={classes.root}>
        {logs.map((log) => (
            <>
                <ListItem key={log.name} alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary={log.name}
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {log.date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {log.message}
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </>
        ))}
        <form noValidate  autoComplete="off">
            <ListItem alignItems="flex-start">
                <ListItemAvatar >
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
            </ListItem>
        </form>
        </List>
    );
}

export default StatusLogs;