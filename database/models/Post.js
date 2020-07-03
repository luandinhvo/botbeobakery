const mongoose = require('mongoose')
 
// update mongodb
const PostSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date()
  },
  level: String
})
 
const Post = mongoose.model('Post', PostSchema)
 
module.exports = Post