var nodemailer = require('nodemailer');
var createSendgridTransport = require('nodemailer-sendgrid-transport');
var sendgridConfig = require('../config').sendGrid;
var sendgridTransport = createSendgridTransport(sendgridConfig);
var mailer = nodemailer.createTransport(sendgridTransport);

var Mail = function () {
	this.sendMail = function (mailOptions) {
		mailer.sendMail(mailOptions, function(error, info) {
	    if (error) {
				console.error('Unable to send email: ', error);
	    }
		});
	};
};

module.exports = new Mail();
