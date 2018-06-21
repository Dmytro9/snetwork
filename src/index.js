import express from 'express'
import mongoose from 'mongoose'

import users from './routes/api/users'
import profile from './routes/api/profile'
import posts from './routes/api/posts'

const app = express()

// DB config 
import config from '../config/keys'

// Connect to MongoDB
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

app.get('/', (req, res) => res.send('!'))

// Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)


const port = process.env.PORT || 1337
app.listen(port, () => console.log(`Server running on port ${port}`))
