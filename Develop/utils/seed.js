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

  await User.insertMany(users);

  for (const user of users) {
    const createdThoughts = await Thought.insertMany(user.thoughts);

    const thoughtIds = createdThoughts.map(thought => thought._id);
    await User.updateOne({ username: user.username }, { $set: { thoughts: thoughtIds } });
  }

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});