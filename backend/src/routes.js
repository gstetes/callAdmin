const express = require('express');

const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const WorkerController = require('./controllers/WorkerController');
const CallController = require('./controllers/CallController');
const SessionController = require('./controllers/SessionController');
const DashboardController = require('./controllers/DashboardController');

const router = express.Router();

// User Routes
router.get('/users', authMiddleware, UserController.index);
router.get('/users/:id', authMiddleware, UserController.search);
router.post('/users', authMiddleware, UserController.create);
router.put('/users/:id', authMiddleware, UserController.update);
router.delete('/users/:id', authMiddleware, UserController.delete);

// Workers Routes
router.get('/workers', authMiddleware, WorkerController.index);
router.get('/workers/:id', authMiddleware, WorkerController.search);
router.post('/workers', authMiddleware, WorkerController.create);
router.put('/workers/:id', authMiddleware, WorkerController.update);
router.delete('/workers/:id', authMiddleware, WorkerController.delete);

// Call Routes
router.get('/calls/?', authMiddleware, CallController.index);
router.get('/calls/:id', authMiddleware, CallController.search);
router.post('/calls', authMiddleware, CallController.create);
router.put('/calls/:id', authMiddleware, CallController.update);
router.delete('/calls/:id', authMiddleware, CallController.delete);

// Dashboard Routes
router.get('/dashboard', authMiddleware, DashboardController.index);

// Session Routes
router.post('/session/login', SessionController.login);
module.exports = router;
