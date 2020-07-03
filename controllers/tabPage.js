const Post = require('../database/models/Post')

module.exports = async (req, res) => {
    const posts = await Post.find({'theme' : req.params.theme});    
    posts.reverse();
    res.render(req.params.theme, {
        posts
    });
}

