import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from '../models/octofitModels.js';
const router = Router();
function registerCollectionRoute(path, model) {
    router.get(path, async (_request, response, next) => {
        try {
            const records = await model.find().lean();
            response.json(records);
        }
        catch (error) {
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
//# sourceMappingURL=apiRoutes.js.map