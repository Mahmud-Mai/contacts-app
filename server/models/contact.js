const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const url = process.env.MONGODB_URL


// mongoose.connect(url)
// .then( () => app.listen(PORT, () => console.log(`Connected to database successfully. Server is running on Port: ${PORT}`)) )
// .catch( (error) => console.log(error.message))


console.log('connecting to ..', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


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

module.exports = mongoose.model('Contact', contactSchema)
