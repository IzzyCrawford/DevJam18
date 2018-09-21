import express from 'express';
import controller from '../controller';

const router = express.Router();

router.route('/')
    .get(controller.listLocalSpots);

router.route('/:localspot')
    .get(controller.getLocalSpot);

export default router;