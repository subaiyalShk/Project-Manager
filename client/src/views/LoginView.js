import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import RegistrationForm from '../components/RegistrationForm';
import {Box, TextField, Button, Paper, Grid, Typography, Link, Checkbox, FormControlLabel, CssBaseline, Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       backgroundColor:'black',
//       'min-height': '100vh'
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const [err, setErr] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        setErr('');

        axios.post('http://localhost:8000/api/users/login', {
            email,
            password
        }, { withCredentials:true })
        .then(()=> navigate('/'))
        .catch(()=>setErr('Please check your credentials !'));
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {
                    err && (
                        <p style={{color:'red'}}>{err}</p>
                    )
                }
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                    <Box mt={5}>
                    <Copyright />
                    </Box>
                </form>
                </div>
            </Grid>
            </Grid>
        </div>
        );
}

