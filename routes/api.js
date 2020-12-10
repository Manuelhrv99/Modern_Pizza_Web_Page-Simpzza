var express = require('express');
var router = express.Router();

var Nexmo = require('nexmo');

router.post("/sms", function(req, res){

    var sms = req.body

    var nexmo = new Nexmo({
        apiKey: '29e0e63b',
        apiSecret: 'VwgA1lbmzTfuqH4d',
    });

    const from = 'Vonage APIs';
    const to = '52' + sms.toNumber;
    const text = sms.text;

    nexmo.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
            res.send(JSON.stringify("Error al enviar SMS"))
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
                res.send(JSON.stringify("SMS enviado con exito"))
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                res.send(JSON.stringify("Error al enviar SMS"))
            }
        }
    })
})

module.exports = router;