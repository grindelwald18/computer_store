const express = require('express');
const{connectToDb, getDb} = require('./db');
// const mongoose = require('mongoose')
// const authRouter = require('./authRouter')
const cors=require('cors')
const PORT = 3000
const bcrypt = require ('bcrypt');
const app = express();
app.use(express.json())
app.use(cors());
// app.use("/img", express.static("img"))
// app.use("/auth", authRouter)
let db;
const saltRounds = 10;

connectToDb((err) => {
    if(!err){
        app.listen(PORT, (err) => {
            err ? console.log(err): console.log(`Listening port ${PORT}`);
        });
        db = getDb();
    }
    else{
        console.log(`DB connection error: ${err}`);
    }
});

app.get('/computer', (req, res)=>{
    const computer = [];
    db
    .collection('computer')
    .find()//cursor 
    .forEach((compute) => computer.push(compute))
    .then(()=>{
        res
        .status(200)
        .json(computer);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "Something goes wrong.."})
    })
} );


app.post('/addProduct', (req, res) => { 
    // let collname=String(select_selectType.value)
    // console.log(collname)
    db 
        .collection('computer') 
        .insertOne(req.body.addItems) 
        .then(() => { 
            res 
                .status(200) 
                .json({ error: "Продукт не найден" }); 
        }) 
        .catch(() => { 
            res 
                .status(500) 
                .json({ error: "Something goes wrong.." }) 
        }) 
 
});

app.post('/login', (req, res) => {
    db
        .collection('user')
        .findOne({ login: req.body.login })
        
        .then((result) => {
           
                console.log(result)
                console.log(req.body)
                bcrypt.compare( req.body.password,result.password, (err, result2)=>{
                    if(!result2){
                     res.status(401).json(`Пароль введен неверно`)
                        
                    }
                    else{
                        
                        res.status(200).json(result.login);
                    }
                })
            })
        .catch(()=>{
            res
            .status(500)
        })
});

app.post('/regist', (req, res) => { 
    
     
    bcrypt.genSalt(saltRounds, function(err, salt) {
        req.body.password = bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.body.password = hash;
        db 
            .collection('user') 
            .insertOne(req.body) 
            .then(() => { 
                res 
                    .status(200) 
                    .json(req.body); 
            }) 
            .catch(() => { 
                res 
                    .status(500) 
                    .json({ error: "Something goes wrong.." }) 
            }) 
     
        });
      });
});