const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
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

app.listen(3001,()=>{
    console.log('running on port 3001');
});
app.get('/add-blog', (req, res) => {
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