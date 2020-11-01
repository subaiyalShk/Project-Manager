import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import ProjectCard from '../components/ProjectCard';




const ProjectList = props => {
    const {setReset}=props;
    const[status, setStatus]=useState('loading');
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: '100%',
            backgroundColor:'black'
        },
    
        header: {
            backgroundColor: props.color,
            color:'white'
        },
    
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <GridList cellHeight={'auto'} spacing={4} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: '80px' }}>
                <ListSubheader className={classes.header} component="div">{props.status}</ListSubheader>
            </GridListTile>
            {props.projects.map((project) => (
            <GridListTile key={project.status} cols={2} rows={1.5} style={{'margin-bottom':'30px'}}>
                <ProjectCard project={project} setReset={setReset}/>
            </GridListTile>
            ))}
        </GridList>
        </div>
    );
    }

    export default ProjectList;