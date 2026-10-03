import mongoose from 'mongoose';

import { Activity, Leaderboard, Team, User, Workout } from '../models/octofitModels.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  {
    username: 'maya.chen',
    name: 'Maya Chen',
    email: 'maya.chen@example.com',
    team: 'Trail Blazers',
    goal: 'Run a 10K under 55 minutes',
    profile: { age: 29, heightCm: 168, preferredActivity: 'Running' },
  },
  {
    username: 'jordan.rivera',
    name: 'Jordan Rivera',
    email: 'jordan.rivera@example.com',
    team: 'Core Crew',
    goal: 'Build consistent strength training habits',
    profile: { age: 34, heightCm: 181, preferredActivity: 'Strength training' },
  },
  {
    username: 'sam.patel',
    name: 'Sam Patel',
    email: 'sam.patel@example.com',
    team: 'Velocity Squad',
    goal: 'Cycle 100 miles in a week',
    profile: { age: 41, heightCm: 176, preferredActivity: 'Cycling' },
  },
];

const teams = [
  {
    name: 'Trail Blazers',
    captain: 'maya.chen',
    focus: 'Outdoor endurance',
    members: ['maya.chen', 'sam.patel'],
    weeklyGoalMinutes: 420,
  },
  {
    name: 'Core Crew',
    captain: 'jordan.rivera',
    focus: 'Strength and mobility',
    members: ['jordan.rivera'],
    weeklyGoalMinutes: 300,
  },
  {
    name: 'Velocity Squad',
    captain: 'sam.patel',
    focus: 'Cycling performance',
    members: ['sam.patel', 'maya.chen'],
    weeklyGoalMinutes: 480,
  },
];

const activities = [
  {
    username: 'maya.chen',
    type: 'Run',
    durationMinutes: 45,
    distanceKm: 7.2,
    calories: 510,
    recordedAt: new Date('2026-09-28T07:30:00Z'),
  },
  {
    username: 'jordan.rivera',
    type: 'Strength',
    durationMinutes: 55,
    calories: 430,
    recordedAt: new Date('2026-09-29T18:15:00Z'),
  },
  {
    username: 'sam.patel',
    type: 'Cycling',
    durationMinutes: 75,
    distanceKm: 32.4,
    calories: 690,
    recordedAt: new Date('2026-09-30T06:45:00Z'),
  },
  {
    username: 'maya.chen',
    type: 'Yoga',
    durationMinutes: 30,
    calories: 120,
    recordedAt: new Date('2026-10-01T12:00:00Z'),
  },
];

const leaderboard = [
  { rank: 1, username: 'sam.patel', team: 'Velocity Squad', points: 1380, activityMinutes: 295 },
  { rank: 2, username: 'maya.chen', team: 'Trail Blazers', points: 1210, activityMinutes: 255 },
  { rank: 3, username: 'jordan.rivera', team: 'Core Crew', points: 990, activityMinutes: 210 },
];

const workouts = [
  {
    title: '10K Tempo Builder',
    level: 'Intermediate',
    focus: 'Running endurance',
    durationMinutes: 50,
    exercises: ['10 minute warmup jog', '4 x 6 minute tempo intervals', '8 minute cooldown'],
  },
  {
    title: 'Full Body Strength Circuit',
    level: 'Beginner',
    focus: 'Strength',
    durationMinutes: 40,
    exercises: ['Goblet squats', 'Push-ups', 'Dumbbell rows', 'Plank holds'],
  },
  {
    title: 'Weekend Climb Ride',
    level: 'Advanced',
    focus: 'Cycling power',
    durationMinutes: 90,
    exercises: ['Zone 2 warmup', '5 hill repeats', 'Cadence drills', 'Easy spin cooldown'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany(users);
    await Team.insertMany(teams);
    await Activity.insertMany(activities);
    await Leaderboard.insertMany(leaderboard);
    await Workout.insertMany(workouts);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
