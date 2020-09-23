const express=require('express')
const app=express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

//Middleware function to render views only in workings hours
app.use('/', function(req, res, next){
    let day=new Date().getDay();
    let hour=new Date().getHours();
if (((day>0) && (day<6)) && ((hour>8) && (hour<18))) {next();}  
else {app.get(res.render("wrongHour"));}
 });

//routing using view ejs
app.get('/',(req,res)=>res.render("Home"));
app.get('/Services',(req,res)=>res.render("Services"));
app.get('/Contact',(req,res)=>res.render("Contact"));

//set up app on port 3000
app.listen(3000,()=>console.log("server is running"));

