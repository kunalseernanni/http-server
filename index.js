const express = require("express")
const app = express()
const port = 3000
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// // app.post('/', (req, res)=> {
// //     console.log(req.body)
// //     res.send("2+2=4")
// // })
// app.get('/', (req, res)=> {
//     console.log(req.query.message)
//     res.send("2+2=4")
// })
// app.listen(port)

// function calcSum(a,b){
//     let anns=0;
//     anns=a+b;
//     return anns;

// }

// app.get('/', function(req, res){
//     let a=req.query.a;
//     let b=req.query.b;
//     let ans = calcSum(a,b);
//     res.send(ans.toString());
// })

// app.listen(3000);

var users=[{
    name:"kunal",
    metadata: [{
        pronouns:"he/him"
    }]
}]

app.get('/', function(req, res){
    const data= users[0].metadata
    const lengh=data.length
    res.send(users)
})
app.post('/', function(req, res){
    const pronoun= req.body.pronoun
    users[0].metadata.push({
        pronouns:pronoun
    })
    // res.json({
    //     msg :"DOne!"
    // })
    res.send(users)

})
app.put('/', function(req, res){

    for(let i=0;i<users[0].metadata.length; i++){
        users[0].metadata[i].pronouns= "he/him"
    }
    res.send("")
})
app.delete('/', function(req, res){
    
    const newPronoun= []
    for(let i=0; i<users[0].metadata.length; i++){
        if(users[0].metadata[i].pronouns=="he/him"){
            newPronoun.push({
                pronouns:"he/him"
            })
        }
    }
    users[0].metadata=newPronoun
    res.json({"msg": "done"})
})

app.listen(3000);