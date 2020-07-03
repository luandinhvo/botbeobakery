const Post = require('../database/models/Post')
 
module.exports = async (req, res) => {
    const posts = await Post.find({});    
    posts.reverse();

    res.render("index", {
        posts
    });
}

