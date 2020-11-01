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

const EditView = props => {
    const {setReset, id}=props;
    const [error, setError] = useState("");
    const [project, setProject] = useState(
        {
            "name": "",
            "lead": "",
            "startDate":"",
            "deadline":"",
            "description":"",
            "status":"1"
        })

        useEffect(()=>{
            axios.get('http://localhost:8000/api/project/'+id)
            .then((response)=>{
                setProject(response.data)
            })
            .catch(err=>{
                console.log(err);
            })
        },[])

        const onChangeHandler = (e) => {
        setProject({
            ...project,
            [e.target.name]:e.target.value
        
        })
    }


    const saveHandler = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/project/"+id, project, {withCredentials:true})
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
            setError(err.response.data.errmsg);
        })
    }

    const deleteHandler = (e) =>{
        e.preventDefault();
        axios.delete("http://localhost:8000/api/project/"+id, {withCredentials:true})
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
                    Edit Project
                </Typography>
                }
        >
        </CardHeader>
        <CardContent>
            <form className={classes.form} noValidate onSubmit={saveHandler}>
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
                    value={project.name}
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
                    value={project.lead}
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
                    value={project.startDate}
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
                    value={project.deadline}
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
                    value={project.description}
                    onChange={onChangeHandler}
                    />
                </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.save}
                >
                save
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.delete}
                    onClick={deleteHandler}
                >
                Delete
                </Button>
            </form>
        </CardContent>
        </Card>
    </Container>
    );
}

export default EditView;