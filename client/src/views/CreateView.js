import React, {useState} from 'react';
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

const CreateView = props => {
    const [error, setError] = useState("");
    const [input, setInput] = useState("");
    const [project, setProject] = useState(
        {
            "name": "",
            "lead": "",
            "startDate":"",
            "deadline":"",
            "description":"",
            "status":"1"
        }
    )
    const onChangeHandler = (e) => {
        setProject({
            ...project,
            [e.target.name]:e.target.value
        
        })
    }


    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/project", project)
        .then(response=>{
            navigate('/test');
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err);
            setError(err.response.data.errmsg);
        })
    }
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
        submit: {
            margin: theme.spacing(3, 0, 2),
            backgroundColor:'red',
            color:'white'
        },
        card:{
            width:'100%'
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
                    Create a new project
                </Typography>
                }
        >
        </CardHeader>
        <CardContent>
            <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    label="Project Name"
                    autoFocus
                    onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Project Lead"
                    name="lead"
                    onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    label="Start Date"
                    variant="outlined"
                    required
                    fullWidth
                    name="startDate"
                    type="date"
                    onChange={onChangeHandler}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    label="Set a deadline"
                    name="deadline"
                    variant="outlined"
                    type="date"
                    required
                    fullWidth
                    onChange={onChangeHandler}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    label="Project Description"
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    rows={5}
                    name="description"
                    onChange={onChangeHandler}
                    />
                </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                >
                Add Project
                </Button>
            </form>
        </CardContent>
        </Card>
    </Container>
    );
}

export default CreateView;

{/* <div>
                            <TextField required id="standard-required" onChange={e=>{setName(e.target.value)}} label=" Project Name" />
                        </div>
                        <div>
                            <TextField required id="standard-required" onChange={e=>{setLead(e.target.value)}} label="Project Lead" />
                        </div>
                        <div>
                            <TextField required id="standard-required" onChange={e=>{setStartDate(e.target.value)}} label="Start Date" />
                        </div>
                        <div>
                            <TextField required id="standard-required" onChange={e=>{setDeadline(e.target.value)}} label="Deadline" />
                        </div>
                        <div>
                            <TextField required id="standard-required" onChange={e=>{setDescription(e.target.value)}} label="Description" /> */}