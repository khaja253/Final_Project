//require("dotenv").config();
//const { pool } = require('mssql');
//mport { createRequire } from 'module';
//const require = createRequire(import.meta.url);
//const { createRequire } = require('module');
import { createPool } from 'mysql2';

//import express from 'express';


const pool= createPool({
    /*host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_NAME,
    database: process.env.DB_PASSWORD,*/
    host:'localhost',
    user:'root',
    password:'fareed12345',
    database: 'blog-app'
});

let sql = "SELECT * FROM posts;";

pool.execute(sql, function (err,result){
    if (err) throw err;
    //console.log(result)

    result.forEach((res) => {
        console.log(res.title);
    });
});

export default pool.promise();




