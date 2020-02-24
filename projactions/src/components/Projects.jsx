import React,{ useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%:
margin: 0 auto;

a {
    color: black;
    margin-top: 1.5em;
    
}
`

const Projects = () => {

    const [projects, setProjects]= useState();
    useEffect(() => {
        axios
        .get('http://localhost:3030/api/projects')
        .then(response => {
            setProjects(response.data);
            
            
        })
        .catch(err => {
            console.log(err);
        }) 

    }, [])
    return (
        <Div>
            
             {projects ? projects.map(project => (
                    <ProjectDetails
                    key={project.id}
                    project={project}
                    
                   
                     />
                )
            ): <h1>There are no projects!</h1> } 
            
        </Div>
    );
}

function ProjectDetails({project}) {
   
    
    return (
        <Link to={`/projects/${project.id}`}>
            <ProjectCard
                name={project.name}
                description={project.description}
                completed={project.completed}
            />
        </Link>
    )
}

export default Projects;
