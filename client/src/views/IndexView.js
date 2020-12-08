import React, {useState, useEffect, Component} from 'react';
import {Link} from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';

import ProjectCard from '../components/ProjectCard';
import ProjectsList from '../components/ProjectsList';
import StatusBtn from '../components/Statusbtn';
import Logoutbtn from '../components/Logout';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor : 'black',
        'min-height':'90vh',
        padding:'40px'
        },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        },
    heading: {
        color: 'white'
    }
}));

const IndexView = props => {
    const classes = useStyles();
    const {setReset, projects}= props;
    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return(
        <div className={classes.root}>
        <Grid container spacing={3} >
            <Grid item xs={12} md={3}>
                <ProjectsList
                    setReset={setReset} 
                    status={'Backlog'} 
                    color={'red'} 
                    projects={projects.filter(project => project.status=='1')}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProjectsList
                    setReset={setReset} 
                    status={'In Progress'} 
                    color={'#FFBA00'}
                    projects={projects.filter(project => project.status=='2')}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProjectsList
                    setReset={setReset} 
                    status={'In Review'} 
                    color={'blue'}
                    projects={projects.filter(project => project.status=='3')}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProjectsList 
                    setReset={setReset}
                    status={'Completed'} 
                    color={'green'}
                    projects={projects.filter(project => project.status=='4')}
                />
            </Grid>
        </Grid>
        </div>
    )
}

export default IndexView;