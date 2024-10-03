const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
  ];
  
  const thoughtsText = [
    'How to disagree with someone',
    'iPhone review',
    'how-to video',
    'video essay on the history of video games',
    'How to make money on the App Store',
    'Learn NextJS in five minutes (Not clickbait)',
    'Movie trailer',
    'Hello world',
    'Another possible solution to the algorithm',
    'Apology video',
    'Submission for startup pitch',
  ];
  
  const reactionBodies = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my response',
    'Like and subscribe!',
    'Reply: The side effects of digital marketplaces',
  ];
  
  // Get a random item from an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random thoughts and reactions
  const getRandomThoughts = (numThoughts) => {
    const thoughts = [];
    for (let i = 0; i < numThoughts; i++) {
      thoughts.push({
        thoughtText: getRandomArrItem(thoughtsText),
        username: getRandomName(),
        reactions: getRandomReactions(3), 
      });
    }
    return thoughts;
  };
  
  // Create the reactions for each thought
  const getRandomReactions = (numReactions) => {
    const reactions = [];
    for (let i = 0; i < numReactions; i++) {
      reactions.push({
        reactionBody: getRandomArrItem(reactionBodies),
        username: getRandomName(),
      });
    }
    return reactions;
  };
  
  // Function to generate random users with their thoughts
  const getRandomUsers = (numUsers) => {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
      users.push({
        username: getRandomName(),
        email: `${getRandomName().split(' ')[0].toLowerCase()}@gmail.com`,
        thoughts: getRandomThoughts(2), // Each user will have 2 thoughts
        friends: [], // No friends initially
      });
    }
    return users;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsers, getRandomThoughts };