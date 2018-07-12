const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/users', async (req, res ) => {
    const users = await User.find();

    return res.json(users);
});
/*
router.delete('/users', async (req, res ) => {
    const users = await User.remove(1);

    return res.json(users);
});
*/
module.exports = app => app.use('/', router);