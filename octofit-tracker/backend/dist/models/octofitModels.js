import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    team: { type: String, required: true },
    goal: { type: String, required: true },
    profile: {
        age: Number,
        heightCm: Number,
        preferredActivity: String,
    },
}, { versionKey: false });
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    captain: { type: String, required: true },
    focus: { type: String, required: true },
    members: [{ type: String }],
    weeklyGoalMinutes: { type: Number, required: true },
}, { versionKey: false });
const activitySchema = new Schema({
    username: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceKm: Number,
    calories: { type: Number, required: true },
    recordedAt: { type: Date, required: true },
}, { versionKey: false });
const leaderboardSchema = new Schema({
    rank: { type: Number, required: true },
    username: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, required: true },
    activityMinutes: { type: Number, required: true },
}, { versionKey: false });
const workoutSchema = new Schema({
    title: { type: String, required: true },
    level: { type: String, required: true },
    focus: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    exercises: [{ type: String }],
}, { versionKey: false });
export const User = mongoose.model('User', userSchema, 'users');
export const Team = mongoose.model('Team', teamSchema, 'teams');
export const Activity = mongoose.model('Activity', activitySchema, 'activities');
export const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema, 'leaderboard');
export const Workout = mongoose.model('Workout', workoutSchema, 'workouts');
//# sourceMappingURL=octofitModels.js.map