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

app.get('/motherboard', (req, res)=>{
    const motherboard = [];
    db
    .collection('motherboard')
    .find()//cursor 
    .forEach((motherboar) => motherboard.push(motherboar))
    .then(()=>{
        res
        .status(200)
        .json(motherboard);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "Something goes wrong.."})
    })
} );

app.get('/ram', (req, res)=>{
    const ram = [];
    db
    .collection('ram')
    .find()//cursor 
    .forEach((ramm) => ram.push(ramm))
    .then(()=>{
        res
        .status(200)
        .json(ram);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "Something goes wrong.."})
    })
});

app.get('/video_card', (req, res)=>{
    const video_card = [];
    db
    .collection('video_card')
    .find()//cursor 
    .forEach((video_car) => video_card.push(video_car))
    .then(()=>{
        res
        .status(200)
        .json(video_card);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "Something goes wrong.."})
    })
} );

app.get('/Hard_drive', (req, res)=>{
    const Hard_drive = [];
    db
    .collection('Hard_drive')
    .find()//cursor 
    .forEach((Hard_driv) => Hard_drive.push(Hard_driv))
    .then(()=>{
        res
        .status(200)
        .json(Hard_drive);

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
        .collection(req.body.collection) 
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

app.get('/SSD', (req, res)=>{
    const SSD = [];
    db
    .collection('SSD')
    .find()//cursor 
    .forEach((SS) => SSD.push(SS))
    .then(()=>{
        res
        .status(200)
        .json(SSD);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "Something goes wrong.."})
    })
} );

app.get('/Power', (req, res)=>{
    const Power = [];
    db
    .collection('Power')
    .find()//cursor 
    .forEach((Powe) => Power.push(Powe))
    .then(()=>{
        res
        .status(200)
        .json(Power);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "Something goes wrong.."})
    })
} );

app.get('/Monitor', (req, res)=>{
    const Monitor = [];
    db
    .collection('Monitor')
    .find()//cursor 
    .forEach((Monito) => Monitor.push(Monito))
    .then(()=>{
        res
        .status(200)
        .json(Monitor);

    })
    .catch(()=>{
        res
        .status(500)
        .json({error: "Something goes wrong.."})
    })
} );

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