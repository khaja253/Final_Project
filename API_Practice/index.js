import express from 'express';
import bodyParser from 'body-parser';
//import mssql from 'mssql';
import cors from "cors";
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;
//const mssql = require('mssql');

/*mssqlConnectiom = mssql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database: 'EmployeeDB'
    
})*/

/*mssqlConnection.connect((err)=>{
    if(!err)
    console.log('DB conection succeded.');
    else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});*/

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

app.use('/users', usersRoutes);

//request and response call back function
app.get('/',(req, res) => {
    console.log('[TEST]!');

    res.send('Hello from Homepage.');
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));