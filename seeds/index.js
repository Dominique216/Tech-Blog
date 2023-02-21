const sequelize = require('../config/connection');
const {User, Post, Comment} = require('../models')

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
// creates each user to seed database
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
// creates each post to seed database
  for (const post of postData) {
    await Post.create({
      ...post,
    });
  }
// creates each comment to seed database
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
    });
  }

  process.exit(0);
};

seedDatabase();