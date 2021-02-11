const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const dotenv = require('dotenv');
const authroute = require('./routes/auth');
const EmployeeTaxCalculation = require('./models/employeeTaxCalculation');
const Employee= require('./models/employee');



dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  mongoose.connection
  .once("open", () => console.log("Connected to db!"))
  .on("error", (error) => {
    logger.log('error', error);
  });

/*app.listen(3001,()=>{
    console.log('running on port 3001');
});*/
app.use(bodyParser.json());
app.use('/',authroute);
/*app.post('/admin/add-employee', (req, res) => {
  var employee  =new Employee(req.body);
  employee.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });*/

  app.post('/add-tax',(req,res)=>{
    var taxStructure =new EmployeeTaxCalculation(req.body);
    taxStructure.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err.message);
      //console.log(err);
    });
  });

  module.exports = app;