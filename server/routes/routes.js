import express from 'express';

import localSpotRoutes from './localspot.route';
import libraryRoutes from './library.route';

const router = express.Router();

router.use('/localspots', localSpotRoutes);
router.use('/library', libraryRoutes);

export default router;