const express = require('express');
const data = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
    data.get()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.statusCode(500).json({message:"Big time error."})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    data.get(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.statusCode(500).json({message:"Big time error."})
    })
})

router.post('/', (req, res) => {
    const post ={
        project_id: req.body.project_id,
        description: req.body.description,
        notes: req.body.notes,
        completed: false
    }
    data.insert(post)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(err => {
        res.status(500).json({message: 'there was an error!'})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;

    data.update(id, req.body)
    .then(response => {
        if(response === null) {
            res.status(404).json({message: 'The action was not found'})
        }else {
            res.status(201).json(response);
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })

})


router.delete('/:id', (req,res) =>{
    const {id} = req.params
    data.remove(id)
    .then(response => {
        if(response > 0){
            res.status(204).end()
        }
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
})



module.exports = router;