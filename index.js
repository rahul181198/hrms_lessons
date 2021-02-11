const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const dotenv = require('dotenv');
const authroute = require('./routes/auth');

const EmployeeYearlyStructure= require('./models/employeeYearlyStructure');

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

app.listen(3001,()=>{
    console.log('running on port 3001');
});
app.use(bodyParser.json());
app.use('/employee',authroute);
/*app.get('/add-blog', (req, res) => {
    const employee = new Employee({
      employeeId: '7899',
      name:'rahul',
      email:'rapandey',
      phone:'789654123',
      designation:'huwueg',
      bankName:'djkweud',
      ifscCode:'6456',
      accountNumber:'465489',
      accountName:'vlrthuviht',
      branchAddress:'hjvgery'
      
    })
  
    employee.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.post('/add-structure',(req,res)=>{
    var yearlyStructure =new EmployeeYearlyStructure(req.body);
    yearlyStructure.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err.message);
      //console.log(err);
    });
  });*/

  module.exports = app;