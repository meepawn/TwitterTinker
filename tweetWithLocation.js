//TwitterTinker - Your NodeJS personal Twitter client oldschool CLI style
//author  : Taufiq Bahruddin
//email   : taufiky@gmail.com
//version : 0.1 prototype Windows
//license : MIT License

//TwitterTinker - Tweeter
//Variant : 2

//imports
var nConf = require('nconf');
var cPrompt = require('prompt');
var twitterMaster = require('twitter');
var twitterInput = {
  properties: {
    STATUS: {
      message: '1 - 140 Characters',
      required: true,
      minLength: 1,
      maxLength: 140
    },
    LAT: {
      message: 'Latitude Information'
    },
    LONG: {
      message: 'Longitude Information'
    },
    DISPLAY_COORDINATES: {
      message: 'Display: true or false'
    }
  }
};

nConf.argv().env().file({ file: 'confs/config.json' });

var twitterClient = new twitterMaster({
  consumer_key: nConf.get('CONSUMER_KEY'),
  consumer_secret: nConf.get('CONSUMER_SECRET'),
  access_token_key: nConf.get('ACCESS_TOKEN_KEY'),
  access_token_secret: nConf.get('ACCESS_TOKEN_SECRET')
});

console.log('\n----------------------------\nTwitterTinker - Tweeter\n----------------------------');

cPrompt.get(twitterInput, function (err, result) {
  twitterClient.post('statuses/update', {status: result.STATUS, lat: result.LAT, long: result.LONG, display_coordinates: result.DISPLAY_COORDINATES},  function(error, tweet, response){
    if(error)
    {
      //throw error;
      console.log('\n----------------------------\nError, tweet was not sent\n----------------------------');
    }
    else
    {
      console.log('\n----------------------------\nSuccess, tweet was sent\n----------------------------');
    }
    //console.log(tweet);  // Tweet body.
    //console.log(response);  // Raw response object.
  });
});
