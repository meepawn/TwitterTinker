//TwitterTinker - Your NodeJS personal Twitter client oldschool CLI style
//author  : Taufiq Bahruddin
//email   : taufiky@gmail.com
//version : 0.1 prototype Windows
//license : MIT License

//TwitterTinker - Miner
//Variant : 1

//imports
var fileSystem = require('fs');
var nConf = require('nconf');
var cPrompt = require('prompt');
var twitterMaster = require('twitter');
var jsonFile = require('jsonfile');
var twitterInput = {
  properties: {
    SCREEN_NAME: {
      message: 'Target screen name / username (case sensitive)',
      required: true,
      minLength: 1,
      maxLength: 255
    },
    COUNT: {
      message: '1 - 200 integer',
      type: 'integer',
      maximum: 200
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

console.log('\n----------------------------\nTwitterTinker - Miner\n----------------------------');

var nextCount = nConf.get('LAST_LOG');
nextCount++;

var filePath = 'logs/data_'+nextCount+'.json';
var fileResponse = 'logs/response_'+nextCount+'.json';

cPrompt.get(twitterInput, function (err, result) {
  twitterClient.get('statuses/user_timeline', {screen_name: result.SCREEN_NAME, count: result.COUNT}, function(error, tweets, response){
    if(error)
    {
      //throw error;
      console.log('\n----------------------------\nError, Miner was not working properly\n----------------------------');
    }
    else
    {
      console.log('\n----------------------------\nSuccess, all data saved in logs dir\n----------------------------');
      jsonFile.writeFile(filePath, tweets, function (err) {
        //console.error(err);
      });
      jsonFile.writeFile(fileResponse, response, function (err) {
        //console.error(err);
      });
      nConf.set('LAST_LOG', nextCount);
      nConf.save(function (err) {
        fileSystem.readFile('confs/config.json', function (err, data) {
          //console.dir(JSON.parse(data.toString()))
        });
      });
    }
    //console.log(tweets);  // The favorites.
    //console.log(response);  // Raw response object.
  });
});
