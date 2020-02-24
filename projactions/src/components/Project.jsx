import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import styled from  'styled-components';

const Div = styled.div`
border: 2px solid black;

.action {

}
`

const Project = (props) => {

    const [project, setProject] = useState();
    const [projectActions, setProjectActions] = useState();

    useEffect(() => {
        const id = props.match.params.id;

        axios.get(`http://localhost:3030/api/projects/${id}`)
        .then(response => {
            setProject(response.data)

        })
        .catch(err => {
            console.log(err);
        })

        axios.get(`http://localhost:3030/api/projects/${id}/actions`)
        .then(response => {
            setProjectActions(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    
    return (
        <Div>
            {project ? <ProjectCard
            name={project.name}
            description={project.description}
            completed={project.completed}
            projectActions={projectActions} /> : <h1>There is nothing here!</h1> }

{projectActions && projectActions.length ? projectActions.map(item => {
                return(
                    <div className='action'>
                        <h4>{item.description}</h4>
                        <p>{item.notes}</p>
                        <input type="checkbox"/>
                    </div>
                )
            }): <h4>There are no actions here.</h4> }
            
        </Div>
    );
}

export default Project;
