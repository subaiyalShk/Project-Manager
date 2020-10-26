import React, {useState, useEffect, Component} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
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
        'min-height':'100vh',
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

const TestView = props => {
    const[projects, setProjects]=useState([
        {
            'name': 'build a rocket',
            'startDate': '8:59am 10/24/2020',
            'createdAt':'6:00am 01/24/2020',
            'lead': 'Subaiyal',
            'deadLine': '00:00 11/04/2020',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod quam at odio viverra volutpat. Mauris finibus tincidunt purus. Ut ac lorem at turpis scelerisque bibendum id a purus',
            'status':'1',
            'statusLogs':[{
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                },
                {
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                }
            ]
        },
        {
            'name': 'buy a Supra',
            'startDate': '8:59am 10/24/2020',
            'createdAt':'6:00am 01/24/2020',
            'projectLead': 'Subaiyal',
            'deadLine': '00:00 11/04/2020',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod quam at odio viverra volutpat. Mauris finibus tincidunt purus. Ut ac lorem at turpis scelerisque bibendum id a purus',
            'status':'1',
            'statusLogs':[{
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                },
                {
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                }
            ]
        },
        {
            'name': 'build a drifting warehouse',
            'startDate': '8:59am 10/24/2020',
            'createdAt':'6:00am 01/24/2020',
            'projectLead': 'Subaiyal',
            'deadLine': '00:00 11/04/2020',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod quam at odio viverra volutpat. Mauris finibus tincidunt purus. Ut ac lorem at turpis scelerisque bibendum id a purus',
            'status':'2',
            'statusLogs':[{
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                },
                {
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                }
            ]
        },
        {
            'name': 'Find Nemo',
            'startDate': '8:59am 10/24/2020',
            'createdAt':'6:00am 01/24/2020',
            'projectLead': 'Subaiyal',
            'deadLine': '00:00 11/04/2020',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod quam at odio viverra volutpat. Mauris finibus tincidunt purus. Ut ac lorem at turpis scelerisque bibendum id a purus',
            'status':'2',
            'statusLogs':[{
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                },
                {
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                }
            ]
        },
        {
            'name': 'Fuck the Queen',
            'startDate': '8:59am 10/24/2020',
            'createdAt':'6:00am 01/24/2020',
            'projectLead': 'Subaiyal',
            'deadLine': '00:00 11/04/2020',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod quam at odio viverra volutpat. Mauris finibus tincidunt purus. Ut ac lorem at turpis scelerisque bibendum id a purus',
            'status':'3',
            'statusLogs':[{
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                },
                {
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                }
            ]
        },
        {
            'name': 'Make Amreeka great again',
            'createdAt':'6:00am 01/24/2020',
            'startDate': '8:59am 10/24/2020',
            'createdAt':'6:00am 01/24/2020',
            'projectLead': 'Subaiyal',
            'deadLine': '00:00 11/04/2020',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod quam at odio viverra volutpat. Mauris finibus tincidunt purus. Ut ac lorem at turpis scelerisque bibendum id a purus',
            'status':'3',
            'statusLogs':[{
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                },
                {
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                }
            ]
        },
        {
            'name': 'Doughtnuts till tires pop',
            'startDate': '8:59am 10/24/2020',
            'createdAt':'6:00am 01/24/2020',
            'projectLead': 'Subaiyal',
            'deadLine': '00:00 11/04/2020',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod quam at odio viverra volutpat. Mauris finibus tincidunt purus. Ut ac lorem at turpis scelerisque bibendum id a purus',
            'status':'4',
            'statusLogs':[{
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                },
                {
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                }
            ]
        },
        {
            'name': '3D print yo mom',
            'startDate': '8:59am 10/24/2020',
            'createdAt':'6:00am 01/24/2020',
            'projectLead': 'Subaiyal',
            'deadLine': '00:00 11/04/2020',
            'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod quam at odio viverra volutpat. Mauris finibus tincidunt purus. Ut ac lorem at turpis scelerisque bibendum id a purus',
            'status':'4',
            'statusLogs':[{
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                },
                {
                    'name':'Jon Doe',
                    'date': '9:50am Friday, October, 2020',
                    'message': 'Ill be in your neighborhood doing errands this…'
                }
            ]
        },    
    ]);
    const[reset, setReset]=useState(false)
    const classes = useStyles();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects')
        .then((response)=>{
            setProjects(response.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[reset])

    const sortByStatus = (status, projects) => {
        return(
            projects.filter(project => project.status==status)
        )
    }

    return(
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
                <ProjectsList 
                    status={'Backlog'} 
                    color={'red'} 
                    projects={projects.filter(project => project.status=='1')}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProjectsList 
                    status={'In Progress'} 
                    color={'#FFBA00'}
                    projects={projects.filter(project => project.status=='2')}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProjectsList 
                    status={'In Review'} 
                    color={'blue'}
                    projects={projects.filter(project => project.status=='3')}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProjectsList 
                    status={'Completed'} 
                    color={'green'}
                    projects={projects.filter(project => project.status=='4')}
                />
            </Grid>
        </Grid>
        </div>
    )
}

export default TestView;