const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// all the static resources will be present in 'public' named dir
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

// __dirname refers to the path where index.js is located
// we want our server to look inside that path/views for the views
// in this way we can run our index.js from any directory and 
// the views directory will be located correctly.
app.set('views', path.join(__dirname, '/views'));

// res.render() : Renders a view and sends the rendered HTML string to the client.
// in res.render(), we may not add .ejs extension cause we have already set the 
// view engine to ejs 
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data)
        res.render('subreddit', { ...data })
    else
        res.render('notfound', { subreddit });
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})