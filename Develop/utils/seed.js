const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsers } = require('./data');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
  console.log('connected');

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }


  const users = getRandomUsers(20);
  const userDocs = [];

  for (const user of users) {
    const thoughts = user.thoughts.map(thought => ({
      thoughtText: thought.thoughtText,
      username: user.username,
      reactions: thought.reactions,
    }));

    const createdThoughts = await Thought.insertMany(thoughts);

    const thoughtIds = createdThoughts.map(thought => thought._id);

    userDocs.push({
      ...user,
      thoughts: thoughtIds, 
    });
  }


  await User.insertMany(userDocs);

  console.table(userDocs);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});