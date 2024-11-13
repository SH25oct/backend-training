// practice
const express = require('express');
//express stores a function in itself that contains all the functionalities of express
const users = require('./MOCK_DATA.json')
const cors = require('cors');
const app = express();
app.use(express.urlencoded({extended: false }));

app.use(cors()); 

app.get("/", function (req, res){
    res.send('This is the route for main page ');
})
app.get("/profile", function (req, res){
    res.send('this is the route for profile page ');
})

app.get("/aboutus", (req, res)=>{
    res.send("this is a about us page");
} )

app.get('/api/v1/users', (req, res)=> {
   return res.json(users)
})

app.get('/api/v1/users/:id', (req, res)=> {
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id == id)
    return res.json(user);
})

app.post('/api/v1/users',(req, res)=> {
    const body = req.body
    console.log(body);
    return res.json({status: 'pending'})
})

app.listen(5000, () => {
    console.log("app started running")
});