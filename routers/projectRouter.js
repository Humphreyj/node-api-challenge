const express = require('express');
const data = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    data.get()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({message: 'Data could not be found.'})
    })
});

router.get('/:id', (req, res) => {
    const {id}=req.params
    data.get(id)
    .then(response => {
        
        if(response === null) {
            res.status(404).json({message: 'Project not found'})
        }else {
            res.status(200).json(response)
        }

        
    })
    .catch(err => {
        res.status(500).json({message: 'Data could not be found.'})
    })
});

router.get('/:id/actions', (req, res) => {
    const {id} = req.params;
    data.getProjectActions(id)
    .then(response => {
        if(response.length < 1) {
            res.status(404).json({message: "Actions not found."})
        }
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

router.post('/', (req, res)=> {
    const project ={
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed
    }
    data.insert(project)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({message: 'Project could not be created.'})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const updatedPost = {
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed
    }

    data.update(id, updatedPost)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({message: 'There was an error editing the project.'})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    data.remove(id)
    .then(response => {
        res.status(204).json({message: 'rekt.'})
    })
    .catch(err => {
        res.status(500).json({message:'Project could not be deleted.'})
    })
})





module.exports = router;