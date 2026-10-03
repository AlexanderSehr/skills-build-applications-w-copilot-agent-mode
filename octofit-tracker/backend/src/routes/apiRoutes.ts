import { Router } from 'express';
import type { Model } from 'mongoose';

import { Activity, Leaderboard, Team, User, Workout } from '../models/octofitModels.js';

const router = Router();
type OctofitRecord = Record<string, unknown>;

function registerCollectionRoute(path: string, model: Model<OctofitRecord>) {
  router.get(path, async (_request, response, next) => {
    try {
      const records = await model.find().lean();
      response.json(records);
    } catch (error) {
      next(error);
    }
  });
}

registerCollectionRoute('/users/', User);
registerCollectionRoute('/teams/', Team);
registerCollectionRoute('/activities/', Activity);
registerCollectionRoute('/leaderboard/', Leaderboard);
registerCollectionRoute('/workouts/', Workout);

export default router;