import express from 'express'
import passport from 'passport'
import mongoose from 'mongoose'
import Profile from '../../models/Profile'
import User from '../../models/User'

const router = express.Router()


/* @route   GET api/profile/test
   @desc    Tests profile route
   @access  Public
**/
router.get('/test', (req, res) => res.json({ msg: "Profile Works" }))

/* @route   GET api/profile
   @desc    Get current user profile
   @access  Private
**/
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {}
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user'
        return res.status(404).json(errors)
      }
      res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})

export default router
