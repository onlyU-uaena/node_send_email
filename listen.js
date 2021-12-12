const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

function sendEmail () {
	let transporter = nodemailer.createTransport(smtpTransport({
		host: "smtp.exmail.qq.com",
		port: 465,
		auth: {
			user: 'your_email',
			// smtp授权码
			pass: 'your_password',
		}
	}));

	let mailOptions = {
		from: 'bot <5508118041@email.ncu.edu.cn>', // sender address
		to: '5508118041@email.ncu.edu.cn', // list of receivers
		subject: 'Hello', // Subject line
		// 发送text或者html格式
		// text: 'Hello world?', // plain text body
		html: '<b>保活</b>' // html body
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
		// Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
	});
}

sendEmail()
