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
      description: 'Your tweet, put here',
      message: 'Required, 1 - 140 Characters',
      required: true,
      allowEmpty: false,
      maxLength: 140
    },
    IN_REPLY_TO_STATUS_ID: {
      description: 'Which tweet are you replying to? (tweet ID)',
      message: 'Should be a tweet ID',
      type: 'number'
    },
    POSSIBLY_SENSITIVE: {
      description: 'Sensitive content? (true/false)',
      message: 'Sensitive? boolean true/false',
      type: 'boolean',
    },
    LAT: {
      description: 'Latitude Information',
      message: 'Latitude Information, please see standards',
      type: 'number'
    },
    LONG: {
      description: 'Longitude Information',
      message: 'Longitude Information, please see standards',
      type: 'number'
    },
    PLACE_ID: {
      description: 'Hash of place information, skip this',
      message: 'Place Information',
      type: 'number'
    },
    DISPLAY_COORDINATES: {
      description: 'Display tweet coordinates? (true/false)',
      message: 'Display: boolean true/false',
      type: 'boolean'
    },
    TRIM_USER: {
      description: 'Trim user information? (true/false)',
      message: 'Trim user? boolean true/false',
      type: 'boolean'
    },
    MEDIA_IDS: {
      description: 'Hash of media ids, skip this.',
      message: 'Longitude Information',
      type: 'number'
    },
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

console.log('\n----------------------------\nPress [ENTER] to skip optional fields\n----------------------------');
cPrompt.get(twitterInput, function (err, result) {
  twitterClient.post('statuses/update', {status: result.STATUS, possibly_sensitive: result.POSSIBLY_SENSITIVE, lat: result.LAT, long: result.LONG, display_coordinates: result.DISPLAY_COORDINATES, trim_user: result.TRIM_USER},  function(error, tweet, response){
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
