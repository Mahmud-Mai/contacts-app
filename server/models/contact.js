const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})

const Contact = mongoose.model('Contact', contactSchema)
export default Contact;
module.exports = Contact;