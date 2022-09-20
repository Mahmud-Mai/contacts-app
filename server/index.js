import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contact from './models/contact.js';

const app = express();
require('dotenv').config()
const Contact = require('./models/contact.js')


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
 
console.log(process.env)

app.get('/', (req, res) => {
    Contact.find({})
     .then((result) => {res.send(result)})
     .catch(err => console.log(err))
})

app.post('/', (req, res) => {
    console.log(req.body)
    const contactDetails = req.body;

    if(contactDetails === undefined) {
        return res.status(400).json({ error: 'content missing'})
    }

    const Contact = new Contact({
        name: contactDetails.name,
        number: contactDetails.number,
    })

    contact.save().then(savedNumber => {
        response.json(savedNote)
    })
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Connected to database successfully. Server is running on Port: ${PORT}`))

