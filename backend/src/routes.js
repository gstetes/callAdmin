const express = require('express');

const UserController = require('./controllers/UserController');
const WorkerController = require('./controllers/WorkerController');

const router = express.Router();

// User Routes
router.get('/users', UserController.index);
router.get('/users/:id', UserController.search);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

// Workers Routes
router.get('/workers', WorkerController.index);
router.get('/workers/:id', WorkerController.search);
router.post('/workers', WorkerController.create);
router.put('/workers/:id', WorkerController.update);
router.delete('/workers/:id', WorkerController.delete);

module.exports = router;
