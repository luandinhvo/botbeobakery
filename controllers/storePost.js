const path = require('path')
const Post = require('../database/models/Post')
const fs = require('fs');

 
module.exports = (req, res) => {
    const {
        image
    } = req.files
    data = "@layout('layouts.app')\n@section('content')\n<article>\n<div class='container'>\n<div class='row'>\n";
    data += req.body.content;
    data += "\n</div>\n</div>\n</article>\n<hr>\n@endsection\n";
    filename = req.body.contentId + ".edge";
    // append data to file
    fs.appendFile(path.resolve(__dirname, '..', 'views', filename),data, 'utf8',
        // callback function
        function(err) { 
        if (err) throw err;
    });
    image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
        Post.create({
            ...req.body,
            image: `/posts/${image.name}`
        }, (error, post) => {
            res.redirect("/");
        });
    })
}