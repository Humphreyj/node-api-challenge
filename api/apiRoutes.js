const express = require('express');

const router = express.Router();

const projectRouter = require('../routers/projectRouter');
const actionRouter = require('../routers/actionsRouter');

router.use('/projects',projectRouter);
router.use('/actions',actionRouter);

module.exports = router;