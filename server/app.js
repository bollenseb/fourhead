const express = require('express');
let createError = require('http-errors');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
var cors = require('cors')

const app = express();

app.use(cors())


const googleTTS = require('google-tts-api');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/boas', function (req, res) {

  console.log("tts incoming!!!: " + req.body.message);

  let lang = "pt";
  if(req.body.lang) {
    lang = req.body.lang;
  }

  googleTTS
    .getAudioBase64(req.body.message, {
      lang: lang,
      slow: false,
      host: 'https://translate.google.com',
      timeout: 10000,
    })
    .then((r) => {
      return res.json({b64audio: r});
    })// base64 text
    .catch((err) => {
      console.log(err);
    });
   
   
    // googleTTS
    // .getAllAudioBase64(req.body.message, {
    //   lang: lang,
    //   slow: false,
    //   host: 'https://translate.google.com',
    //   timeout: 10000,
    // })
    // .then((r) => {
    //   if(r.length > 2) {
    //     return res.json({b64audio: r[0]});
    //   } else {
    //     let b64Grande = "";
    //     r.forEach(e => {
    //       b64Grande = b64Grande + e.base64;
    //     });

    //     console.log(b64Grande);

    //     return res.json({b64audio: b64Grande});
    //   }
    // })// base64 text
    // .catch(console.error);
});

app.listen(3000, function () {
  console.log("server on em port: 3000" );
});