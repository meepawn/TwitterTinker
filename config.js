//TwitterTinker - NodeJS Personal Twitter Client Oldskool CLI Style
//author  : Taufiq Bahruddin
//email   : taufiky@gmail.com
//version : 0.1 prototype Windows
//license : MIT License

//TwitterTinker - Configurator

//imports
var fileSystem = require('fs');
var nConf = require('nconf');
var cPrompt = require('prompt');

//actual code
console.log('\n----------------------------\nTwitterTinker - Configurator\n----------------------------');

cPrompt.get(['CONSUMER_KEY', 'CONSUMER_SECRET', 'ACCESS_TOKEN_KEY', 'ACCESS_TOKEN_SECRET'], function (err, result) {
  nConf.argv().env().file({ file: 'confs/config.json' });

  nConf.set('CONSUMER_KEY', result.CONSUMER_KEY);
  nConf.set('CONSUMER_SECRET', result.CONSUMER_SECRET);
  nConf.set('ACCESS_TOKEN_KEY', result.ACCESS_TOKEN_KEY);
  nConf.set('ACCESS_TOKEN_SECRET', result.ACCESS_TOKEN_SECRET);
  console.log('\n----------------------------\nConfigured, restart main.js\n----------------------------');
  nConf.save(function (err) {
    fileSystem.readFile('confs/config.json', function (err, data) {
      console.dir(JSON.parse(data.toString()))
    });
  });
});
