import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import passport from 'passport'
import path from 'path'

import users from './routes/api/users'
import profile from './routes/api/profile'
import posts from './routes/api/posts'

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB config 
import config from '../config/keys'

// Connect to MongoDB
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport config
import pass from '../config/passport'
pass(passport)

// Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
// Set static folder
  app.use(express.static('../client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}


const port = process.env.PORT || 1337
app.listen(port, () => console.log(`Server running on port ${port}`))
