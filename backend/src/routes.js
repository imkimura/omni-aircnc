const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const DashboardController = require('./controllers/DashboardController')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const BookingController = require('./controllers/BookingController')
const ApprovalController = require('./controllers/ApprovalController')
const RejectionController = require('./controllers/RejectionController')

const routes = express.Router();
const upload = multer(uploadConfig);

/**
 *  req.params =  Acessar route params (para edição, delete)
 *  req.query = Acessar query params (para filtros)
 *  req.body = Acessar corpo do body
 */

routes.post('/sessions/', SessionController.store);

routes.post('/spots/', upload.single('thumbnail'), SpotController.store);

routes.get('/spots/', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;