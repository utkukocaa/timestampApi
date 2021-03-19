const express = require('express')
const app = express()
const calculate_date = require('./functions.js');

app.use(express.static('public'));


app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });


app.get('/api/timestamp/:date?',(req,res,next)=>{

    if(!req.params.date){
        let date_now = Date.now()
         res.json({unix:date_now,utc:calculate_date(date_now)})
    }else{
        next()
    }
},(req,res)=>{

    check_date = req.params.date
    
    if(check_date.includes('-')){                   

        new_date = new Date(check_date).getTime()

        if(new_date)      // Checking whether the date is valid or not
        {res.json({unix:new_date, utc:calculate_date(new_date)})}

        else{
        res.json({error:'Invalid Date'})
        }

    }else{

    let changedDate = calculate_date(check_date)
    
    if(changedDate==='Invalid Date')
       
    { res.json({error:"Invalid Date"})}

    else{
        res.json({unix:check_date, utc:changedDate})
    }
    
    }


})








app.listen(3000, ()=>{
    console.log("server is active")
})