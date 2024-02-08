// Envío de EMAIL
var nodemailer = require('nodemailer');

// Configura el transporte con Outlook
var transporter = nodemailer.createTransport({
  service: 'Outlook365',
  auth: {
    user: 'darancuga@hotmail.com',
    pass: 'Derancuga_2022%'
  }
});

// Opciones del correo
var mailOptions = {
  from: 'darancuga@hotmail.com',
  to: 'drodsan2708@g.educaand.es',
  subject: 'Prueba node.js',
  text: 'Contenido del correo en texto plano',
  html: '<b>Contenido del correo en formato HTML</b>'
};

// Envía el correo
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Correo enviado: ' + info.response);
  }
});
