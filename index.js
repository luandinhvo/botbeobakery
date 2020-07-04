const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const { config, engine } = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');
const fileUpload = require("express-fileupload");

// khai báo các trang điều khiển
//const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
// const storePostController = require('./controllers/storePost')
// const getPostController = require('./controllers/getPost')
// const tabPageController = require('./controllers/tabPage')
// //đường dẫn file controller
// const contactController = require('./controllers/contact')

const app = new express();

// kết nối data mongodb
// mongoose.connect('mongodb+srv://dearmy22:22@cluster0-mbv6d.mongodb.net/dearmy22?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true })
//     .then(() => 'bạn đã kết nối đến Mongo!')
//     .catch(err => console.error('Có gì đó sai ở đây rồi ', err))

// xử lý ảnh
// app.use(fileUpload());

app.use(express.static('public'));

// express-edge engine trang web động
app.use(engine);

app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
    res.render('index')
});



// xử lý file json
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

//const storePost = require('./middleware/storePost')
//app.use('/posts/store', storePost)

// điều khiển tới trang chủ
//app.get("/", homePageController);

// điều khiển đến bài đọc
//app.get("/post/:id", getPostController);

// điều khiển đến trang tạo mới bài viết
//app.get("/posts/new", createPostController);

// điều khiển đến trình xử lý up ảnh
//app.post("/posts/store", storePostController);

//Vinh Nguyen: chức năng gửi email từ người đọc tới admin blog 
//app.post('/contact', contactController);

// chuyển đến trang giới thiệu
//app.get('/about', (req, res) => {
//    res.render('about')
//});

// chuyển đến trang liên hệ
//app.get('/contact', (req, res) => {
//    res.render('contact')
//});

app.listen(3000, () => {
    console.log('botbeobakery on port 3000')
});