const express = require('express');
const app = express();
const parser = require('body-parser')
const mysql = require('mysql');
const cors = require('cors');


app.use(parser.json());
app.use(parser.urlencoded({ extended: false }))
app.use(cors({
    origin: 'http://localhost:3000'
}));

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "user_db"
})
connection.connect((err) => {
    if (err)
        throw err;
    else
        console.log("mysql database connected");
})


app.get('/', (req, res) => {
    res.send("API is working");
})

//add user detail

app.post('/addUser', (req, res) => {
    let name = req.body['uName'];
    let email = req.body['uEmail'];
    let mobile = req.body['uMobile'];
    let location = req.body['uLocation'];
    if (!name || !email || !mobile || !location) {
        res.status(400).send("Invalid request body");

    }
    else {

        let mysqlQuery = 'insert into users(name,email,mobile,location) values (?,?,?,?)';
        let value = [name, email, mobile, location];
        connection.query(mysqlQuery, value, (err, result) => {
            if (err)
                throw err;
            else
                console.log("user inser count" + result.affectedRows);
        })

        res.send("added user");
    }

})

//Read User detail

app.get('/users', (req, res) => {
    connection.query('select * from users', (err, result, fields) => {
        if (err)
            throw err;
        else {
            console.log('result=> ', result);
            console.log('fields=> ', fields);
            res.send(result);
        }

    });
})


app.listen(8080, () => {
    console.log("server running on 8080 port")
})