const express = require('express')
const cors = require('cors')
const app = express()

const connectDB = require('./config/db')
app.use(cors())
const mediaRoutes = require('./routes/media')

app.use('/api/v1/media', mediaRoutes)

connectDB()



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})