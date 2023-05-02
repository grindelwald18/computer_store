const express = require('express');
const{connectToDb, getDb} = require('./db');
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const cors=require('cors')
const PORT = 3000

const app = express();
app.use(express.json())
app.use(cors());
// app.use("/img", express.static("img"))
app.use("/auth", authRouter)
let db;


const start = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://admin:admin@cluster0.hnni2ip.mongodb.net/authentication?retryWrites=true&w=majority`);
    }
    catch(e){
        console.log(e)
    }
}

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
// app.login('/singIn')
start()