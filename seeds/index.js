const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seededU = [
    {
    username: "Vanellope",
    password: "theglitch"},
    {
    username: "Ralph",
    password: "wreckingriot"},
    {
    username: "FelixJr",
    password: "thegoodguy"},
    {
    username: "Sgt. Calhoun",
    password: "dynamitegal"},
    {
    username: "Sour Bill",
    password: "dontlickme"
}]

const seededP = [
{
    title:"Hero's Duty new update",
    content: "Sergeant Calhoun has a new mission to defend the citadel",
    user_id: 4
},
{
    title:"Sugar Rush",
    content: "Next Race at the Candy Cane Forest",
    user_id: 1
},
{
    title:"Dragon's lair",
    content: "Going to try and get a medal from this game then hit up Tappers",
    user_id: 2
},
{
    title:"Q-bert Game",
    content: "Any Idea when this game is going to be fixed by Litwak?",
    user_id: 2
},
{
    title:"Penthouse Repaired",
    content: "Gene, the owner was pleased with my work on repairing the floor, after you know who broke it!",
    user_id: 3
},
{
    title:"The House of the dead",
    content: "This rail shooter is going to be easy",
    user_id: 4
},
{
    title:"Ralph breaks this post",
    content: "This post is about to get wrecked, i mean deleted",
    user_id: 2
},
{
    title:"Tough life",
    content: "I have gotten enough licks out of life",
    user_id: 1
}]

const seededC = [
    {
    feedback: "This new level looks great",
    user_id: 1,
    post_id: 1
    },
    {
    feedback: "V, Do you need backup?",
    user_id: 2,
    post_id: 1
    },
        {
    feedback: "I do, Get moving you lazy bones!",
    user_id: 4,
    post_id: 1
    },
        {
    feedback: "Do you need a new car for the race?",
    user_id: 2,
    post_id: 2
    },
        {
    feedback: "I'm so going to win",
    user_id: 1,
    post_id: 2
    },
        {
    feedback: "Oh I still need to wax the floor",
    user_id: 3,
    post_id: 5
    },
        {
    feedback: "That's a nice floor you have there. It would be a shame to have it smashed",
    user_id: 2,
    post_id: 5
    },
        {
    feedback: "I'll take a look at it. My hammer is pretty good at fixing things",
    user_id: 3,
    post_id: 4
    },
        {
    feedback: "Maybe I can smash it!",
    user_id: 2,
    post_id: 4
    },
        {
    feedback: "Oh, come on. That isn't funny at all",
    user_id: 5,
    post_id: 7
    },
        {
    feedback: "My log in will probably time out anyway",
    user_id: 5,
    post_id: 8
    },

]

const seedUsers = () => User.bulkCreate(seededU);
const seedPosts = () => Post.bulkCreate(seededP);
const seedComments = () => Comment.bulkCreate(seededC);

const seedAll = async () => {
    await sequelize.sync({force: true})
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();
