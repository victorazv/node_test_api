const express = require('express');
//const bodyParser = require('body-parser');

const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(express.json());

require('./controllers/authController')(app);
require('./controllers/userController')(app);

app.listen(3333);

/*
//const cors = require('cors');
app.use(cors());

require('./models/user');
const Todo = mongoose.model('User');

app.get('/users', async (req , res) => {
    const todos = await Todo.find();

    return res.json(todos);
});

app.post('/users', async (req , res) => {
    const todo = await Todo.create(req.body);

    return res.json(todo);
});
*/