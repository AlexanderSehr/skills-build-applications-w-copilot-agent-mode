import mongoose, { Schema } from 'mongoose';

type OctofitRecord = Record<string, unknown>;

const userSchema = new Schema<OctofitRecord>(
	{
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
	},
	{ versionKey: false },
);

const teamSchema = new Schema<OctofitRecord>(
	{
		name: { type: String, required: true, unique: true },
		captain: { type: String, required: true },
		focus: { type: String, required: true },
		members: [{ type: String }],
		weeklyGoalMinutes: { type: Number, required: true },
	},
	{ versionKey: false },
);

const activitySchema = new Schema<OctofitRecord>(
	{
		username: { type: String, required: true },
		type: { type: String, required: true },
		durationMinutes: { type: Number, required: true },
		distanceKm: Number,
		calories: { type: Number, required: true },
		recordedAt: { type: Date, required: true },
	},
	{ versionKey: false },
);

const leaderboardSchema = new Schema<OctofitRecord>(
	{
		rank: { type: Number, required: true },
		username: { type: String, required: true },
		team: { type: String, required: true },
		points: { type: Number, required: true },
		activityMinutes: { type: Number, required: true },
	},
	{ versionKey: false },
);

const workoutSchema = new Schema<OctofitRecord>(
	{
		title: { type: String, required: true },
		level: { type: String, required: true },
		focus: { type: String, required: true },
		durationMinutes: { type: Number, required: true },
		exercises: [{ type: String }],
	},
	{ versionKey: false },
);

export const User = mongoose.model<OctofitRecord>('User', userSchema, 'users');
export const Team = mongoose.model<OctofitRecord>('Team', teamSchema, 'teams');
export const Activity = mongoose.model<OctofitRecord>('Activity', activitySchema, 'activities');
export const Leaderboard = mongoose.model<OctofitRecord>('Leaderboard', leaderboardSchema, 'leaderboard');
export const Workout = mongoose.model<OctofitRecord>('Workout', workoutSchema, 'workouts');