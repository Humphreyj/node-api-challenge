import React,{ useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        <div>
            
             {projects ? projects.map(project => (
                    <ProjectDetails
                    key={project.id}
                    project={project}
                    
                   
                     />
                )
            ): <h1>There are no projects!</h1> } 
            
        </div>
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
