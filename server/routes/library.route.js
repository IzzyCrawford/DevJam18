import express from 'express';
import controller from '../controller';

const router = express.Router();

router.route('/')
    .get(controller.listFishLibrary);

router.route('/:name')
    .get(controller.getFish);

export default router;