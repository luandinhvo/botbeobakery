const Post = require('../database/models/Post')
 
module.exports = async (req, res) => {
    let post = await Post.findById(req.params.id);
    
    res.render(post.contentId);
}