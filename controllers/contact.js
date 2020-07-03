const sgMail = require('@sendgrid/mail');

module.exports = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  //đây là API key của sendgrid mail
  sgMail.setApiKey('Cb95Cy-7uT0GonmPcP_EuG7clGI');

  //set nội dung của người dùng nhập vào thành form của một email
  //subject là tiêu đề của email ở phần nhập không thấy nên để tạm là số điện thoại của người dùng
  //to: là địa chỉ mail của admin trang 
  //html: là nội dung của phần email
  const msg = {
    to: 'luandinhvo@gmail.com',
    from: email,
    subject: phone,
    text: message,
    html: message,
  };
  
  //gửi email đi với data là msg
  sgMail
  .send(msg)
  .then(() => {}, error => {
    if (error.response) {
      console.error(error.response.body)
    }
  });

  //sau khi người dùng nhấn send mail thì nó sẽ quay lại trang contact.
  res.redirect('/contact');
}