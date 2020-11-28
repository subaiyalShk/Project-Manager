import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const ProfileView = props => {
    const {user, setUser, setReset}=props;
    const [error, setError] = useState("");
    const onChangeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        
        })
    }
    function errorHandler(obj){
        if(obj.errors){
            if('password' in obj.errors){
                return(obj.errors.password.message)
            }else if('confirmPassword' in obj.errors){
                return(obj.errors.confirmPassword.message)
            }else if('email' in obj.errors){
                return(obj.errors.email.message)
            }else if('firstName' in obj.errors){
                return(obj.errors.firstName.message)
            }else if('lastName' in obj.errors){
                return(obj.errors.lastName.message)
            }else if('userName' in obj.errors){
                return(obj.errors.userName.message)
            }
            }else if(obj.keyPattern){
            if('email' in obj.keyPattern){
                return('This email is already registered')
            }else if('userName' in obj.keyPattern){
                return('This username is already registered')
            }
            }
        }

    const saveHandler = (e) =>{
        e.preventDefault();
        if(user.password.length<2){
            setError('check your password')
            return
        } else if (user.password!=user.confirmPassword){
            setError('passwords dont match')
            return
        }
        axios.put("http://localhost:8000/api/user/"+user.id, user, {withCredentials:true})
        .then(response=>{
            navigate('/');
            setReset((reset)=>{return(!reset)});
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err);
            if(err.response.data.message=="Unauthorized"){
                navigate('/login')
            }
            setError('wrong password');
        })
    }

    // const deleteHandler = (e) =>{
    //     e.preventDefault();
    //     axios.delete("http://localhost:8000/api/project/"+id, {withCredentials:true})
    //     .then(response=>{
    //         navigate('/');
    //         setReset((reset)=>{return(!reset)});
    //         console.log(response.data)
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //         if(err.response.data.message=="Unauthorized"){
    //             navigate('/login')
    //         }
    //         setError(err.response.data.errmsg);
    //     })
    // }



    const useStyles = makeStyles((theme) => ({
        main:{
            backgroundColor:'white',
            marginTop:'50px',
            padding:'0px',
            borderRadius:'50px'
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        save: {
            margin: theme.spacing(3, 0, 2),
        },
        delete:{
            margin: theme.spacing(3, 0, 2),
            marginLeft:'15px',
            backgroundColor:'red',
            color:'white'
        },
        card:{
            width:'100%',
        }
    }));
    const classes = useStyles();

    return (
        <Container className={classes.main} component="main" maxWidth="xs">
        <CssBaseline />
        <Card
            className={classes.card}
        >
        <CardHeader
            avatar={
                <AddToPhotosIcon/>
            }
            title={
                <Typography component="h1" variant="h5">
                    Your profile
                </Typography>
                }
        >
        </CardHeader>
        <CardContent>
            {error}
            <form className={classes.form} noValidate onSubmit={saveHandler}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    label="First Name"
                    autoFocus
                    value={user.firstName}
                    onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={user.lastName}
                    onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Username"
                    variant="outlined"
                    required
                    fullWidth
                    name="userName"
                    value={user.userName}
                    onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    value={user.email}
                    onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Password"
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    type="password"
                    value={user.password}
                    onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    variant="outlined"
                    type="password"
                    required
                    fullWidth
                    value={user.confirmPassword}
                    onChange={onChangeHandler}
                    />
                </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.save}
                >
                save changes
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.delete}
                >
                Delete your profile
                </Button>
            </form>
        </CardContent>
        </Card>
    </Container>
    );
}

export default ProfileView;