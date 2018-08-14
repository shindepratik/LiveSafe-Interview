/*Author: Pratik Shinde */

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

/* LiveSafe model schema, Mongoose connection, and BodyParser created to demonstrate creation and storing of new entries into the DB using POST requests */

const {LiveSafeSchema} = require('./model/liveSafeModel')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Item = mongoose.model('Item', LiveSafeSchema)

//Mongoose DB connection		
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/LiveSafeDB')

//BodyParser creation
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.json());

var dataFile = require('./sampleData.json')

app.use(cors())


/* Initial GET request when user loads the project */

app.get('/data', function(req, res) {
    res.json(dataFile);
})


/* The GET request below is triggered in real-time as user types something in the search box. 
If the user input matches either the title, user, or URL field, that entry is displayed to the user */

app.get('/data/:id', function(req, res) {
    var output = []

    for (var i = 0; i < dataFile.length; i++) {
        
	var title = dataFile[i].title
        var userSearch = dataFile[i].user
        var urlSearch = dataFile[i].url
       
	if (title.toLowerCase().search(`${req.params.id}`) !== -1 ) {
            output.push(dataFile[i])
        }

        else if (userSearch.search(`${req.params.id}`) !== -1) {
            output.push(dataFile[i])
        }

        else if (urlSearch.search(`${req.params.id}`) !== -1) {
            output.push(dataFile[i])
        }
    }
    res.json(output);
})


/* Creation and storage of new entry into the DB using POST request*/

app.post('/data', function(req, res) {
    
	let newItem = new Item(req.body);
    	newItem.save((err, item) => {
        
	if (err) {
            res.send(err);
        }
        res.json(item);
    });
})

app.listen(PORT, () => {
    console.log(`Your Server is Running on PORT: ${PORT}`)
})

module.exports = { app };
