const mysql = require('mysql2');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "spreadnews"
});


//Register fuction 

const createUser = (req, res) => {

const {firstname,lastname,email,password} = req.body; 

const hashed_password = md5(password.toString())


if(firstname && lastname && email && password){



con.query('SELECT * FROM user WHERE email =?',[email],function (error, results, fields){

if(results.length > 0)
{ 
res.send('Email exists already')
}
else{

var user={

"firstname":firstname,
"lastname":lastname,
"email":email,          
"password":hashed_password

}
con.query('INSERT INTO user SET ?',[user], function (error, results, fields) 
{
if(error){
res.send('data not sent')

}else{
res.send('Account created succesfully!')
}

})



}

});

}

};

//===================================================================================================================================

const login = (req, res) => {


let { email, password } = req.body; 

const hashed_password = md5(password.toString())
con.query('select * from user where email = ? AND password = ?' ,[email,hashed_password],(error, results)=> {
//console.log(results.length)
if (results.length > 0) {

//res.send('success')
let token = jwt.sign({
data: results 
}, 'sgdfiuejsncksdncoihfoiwefwkwoidwnw',{
algorithm: 'HS256',
expiresIn:120
})

//console.log(token)
res.status(200).json({token: token})
// res.send({ status: 1, data: results, token: token });

}else{
res.send('invalid login details')
}
});


}
//===================================================================================================================================================
//update profile

const updateprofile= (req, res) => {


const id=parseInt(req.params.id)
const {firstname,lastname,email} = req.body; 
var profilevalue={

"firstname":firstname,
"lastname":lastname,
"email":email


}
con.query('UPDATE User SET ? WHERE user_id= ?',[profilevalue,id], function (error, results, fields) 
{
if(error){
res.send('data not sent')

}else{
res.send(' Profile Updated succesfully!')
}

})
}


//===================================================================================================================================================

//add article 

const addArticle = (req, res) => {

const {user_id,title, img_url,category,content} = req.body; 
if(title && img_url && category && content){

var values={

"user_id":user_id,
"title":title,
"img_url":img_url, 
"category":category,
"content":content
}


con.query('INSERT INTO article SET ?',[values], function (error, results, fields) 
{
if(error){
res.send('data not sent')

}else{
res.send('article added successfully.')
}

})



}}
//===================================================================================================================================================
//get user by id
const currentUser = (req, res) => {


  {
  const id=parseInt(req.params.id)
  
  con.query('select * from user where user_id= ?',[id], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}

//============================================================================
//admin stories
const adminstories = (req, res) => {


  {
  const id=parseInt(req.params.id)
  
  con.query('select * from article,user where article.user_id=user.user_id and article.archived=0 and article.user_id= ?',[id], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}

//============================================================================
//deleted stories
const deladminstories = (req, res) => {


  {
  const id=parseInt(req.params.id)
  
  con.query('select * from article,user where article.user_id=user.user_id and article.archived=1 and article.user_id= ?',[id], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}


//============================================================================
//all users
const authors = (req, res) => {


  {

  
  con.query('select * from user where user_id > 3',[], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}

//============================================================================
//count authors
const countauthor = (req, res) => {


  {

  
  con.query('select count(*) as users from user where user_id > 3',[], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}

//============================================================================


//count authors
const countarticle = (req, res) => {


  {

  
  con.query('select count(*) as articles from article',[], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}

//============================================================================
//category
const category = (req, res) => {


  {

  
  con.query('select * from category',[], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}

//============================================================================

//viewstory
const viewstory = (req, res) => {


  {
    const id=parseInt(req.params.id)
  
  con.query('select * from article where article_id=?',[id], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}

//============================================================================
//update story
const updateStory= (req, res) => {


  const id=parseInt(req.params.id)
  const {title, img_url,category,content} = req.body; 
  var story={

    "title":title,
    "img_url":img_url,
    "category":category,
    "content":content
 
}
if(title && img_url && content && category){
 con.query('UPDATE article SET ? WHERE article_id= ?',[story,id], function (error, results, fields) 
  {
       if(error){
        res.send('data not sent')

       }else{
        res.send(' booking Updated succesfully!')
       }

  })
}}
//============================================================================
//archive booking
const archiveBooking = (req, res) => {


{


const id=parseInt(req.params.id)


con.query('Update article SET archived=1 where article_id =?',[id], function (error, results, fields) 
{
if(error){
res.send('data archived.')

}else{
res.send(results)
}

})



}}
//================================================================================================
//restoreStory
const restoreStory = (req, res) => {


  {
  
  
  const id=parseInt(req.params.id)
  
  
  con.query('Update article SET archived=0 where article_id =?',[id], function (error, results, fields) 
  {
  if(error){
  res.send('data restored.')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}
  //================================================================================================
  //add article 

const addCategory = (req, res) => {

  const {title} = req.body; 
  if(title){
  
  var values={
  

  "name":title,

  }
  
  
  con.query('INSERT INTO category SET ?',[values], function (error, results, fields) 
  {
  if(error){
  res.send('data not sent')
  
  }else{
  res.send('category added successfully.')
  }
  
  })
  
  
  
  }}
  //===================================================================================================================================================
  //===================================================================================================================================================
//get user by id
const categoryId = (req, res) => {


  {
  const id=parseInt(req.params.id)
  
  con.query('select * from category where category_id= ?',[id], function (error, results, fields) 
  {
  if(error){
  res.send('data not found')
  
  }else{
  res.send(results)
  }
  
  })
  
  
  
  }}

//============================================================================


//update story
const updateCat= (req, res) => {


  const id=parseInt(req.params.id)
  const {title} = req.body; 
  var story={

    "name":title,

 
}
if(title){
 con.query('UPDATE category SET ? WHERE category_id= ?',[story,id], function (error, results, fields) 
  {
       if(error){
        res.send('data not sent')

       }else{
        res.send(' Category Updated succesfully!')
       }

  })
}}
//============================================================================
module.exports = {
 
  createUser,
  login,addArticle,updateprofile,currentUser,adminstories,deladminstories,authors,countauthor,countarticle,category,viewstory,updateStory,archiveBooking,restoreStory,addCategory,
  categoryId,updateCat


  
}    