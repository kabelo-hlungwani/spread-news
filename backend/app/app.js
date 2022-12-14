const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require('cors')
const db = require('../controller/controller')

app.use(cors())
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();    
});

app.get(``, (req, res) => { 

    res.json({info:'Node.js,Express, and mysql API'})
 });



// Listen to the specified port 3000
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});


//post
app.post('/register',db.createUser)
app.post('/login',db.login)
app.post('/addArticle/',db.addArticle)
app.post('/addCategory/',db.addCategory)

app.get('/allArticles',db.allArticles)

app.get('/currentUser/:id',db.currentUser)
app.get('/categoryId/:id',db.categoryId)



app.put('/updateprofile/:id',db.updateprofile)
app.put('/updateCat/:id',db.updateCat)
 app.put('/updateStory/:id',db.updateStory)
app.put('/restoreStory/:id',db.restoreStory)
app.put('/archiveBooking/:id',db.archiveBooking)

app.put('/activate/:id',db.activate)
app.put('/suspend/:id',db.suspend)

app.get('/adminstories/:id',db.adminstories)
app.get('/deladminstories/:id',db.deladminstories)
app.get('/authors',db.authors)
app.get('/category',db.category)
app.get('/countauthor',db.countauthor)
app.get('/countarticle',db.countarticle)
app.get('/viewstory/:id',db.viewstory)

app.delete('/removecat/:id',db.removecat)




