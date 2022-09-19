import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Contact from './models/contact.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
 
const CONNECTION_URL= 'mongodb+srv://contacts-admin:Defaultpassword@contactsappcluster.nkhy5bc.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL)
.then( () => app.listen(PORT, () => console.log(`Connected to database successfully. Server is running on Port: ${PORT}`)) )
.catch( (error) => console.log(error.message))


app.get('/', (req, res) => {
    const contact = new Contact({
        name: 'new name',
        number: '07012341234'
    })
    constact.save()
     .then((result) => res.send(result))
     .catch(err => console.log(err))
})