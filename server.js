const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

//init mid ware
app.use(express.json({extended: false}));

app.get('/', (req,res) => res.json({ msg: 'did i do it? plz plz'}));

//define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/liens', require('./routes/liens'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`) );