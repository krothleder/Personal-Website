const routes = require('express').Router();
const exphbs = require('express-handlebars');

let hbsHelper = exphbs.create({

})

const home = require('./../api/home');
const workData = require('./../api/work');
const about = require('./../api/about');
const likes = require('./../api/likes');
const skills = require('./../api/skills');

routes.get('/', (req, res) => {
    res.render('index', {
        showWork: false,
        showTitle: true,
        showAbout: false,
        pageTitle: "Full Stack JavaScript Developer",
        home,
        skills
    });
});

routes.get('/work', (req, res) => {
    res.render('index', {
        showWork: true,
        showTitle: false,
        showAbout: false,
        pageTitle: "Work",
        workData,
        
    })
});

routes.get('/about', (req, res) => {
    res.render('index', {
        showWork: false,
        showTitle: false,
        showAbout: true,
        pageTitle: 'About',
        about,
        likes,
    })
})

routes.get('*', (req, res) => {
    res.render('404', {status: 404})
})

module.exports = routes;