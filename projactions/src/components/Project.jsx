import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const Project = (props) => {

    const [project, setProject] = useState();

    useEffect(() => {
        const id = props.match.params.id;

        axios.get(`http://localhost:3030/api/projects/${id}`)
        .then(response => {
            setProject(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    
    return (
        <div>
            {project ? <ProjectCard
            name={project.name}
            description={project.description}
            completed={project.completed} /> : <h1>There is nothing here!</h1> }
            
        </div>
    );
}

export default Project;
