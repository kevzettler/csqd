var fs = require('fs');
var rot = require('rot');
var utf8 = require('utf8');
var cipher = 'vOSnn95Lo8C1fDPMYKIUvrLcYZ8G699o';

function decrypt(string){
  return crypt(string, -1);
}

function encrypt(string){
  return crypt(string, 1);
}

function crypt(string, decode){
  if(!decode){
    throw "pass decode for encrypt or decrypt";
  }

  var ret = "";
  string.split('').forEach(function(character, i){
    var charCode = character.charCodeAt(0);
    var rotc = rot(cipher, 13);
    var rotSub = rotc.substr(i%32, 1);
    var wtf = decode * rotSub.charCodeAt(0);
    ret += String.fromCharCode(charCode + wtf);
  });

  return ret;
}

function csqdToJson(csqd){
  var ret = {};  

  csqd.split('#').forEach(function(pair){
    var kvs = pair.split('!');
    if(kvs.length > 1){
      ret[decrypt(kvs[0])] = decrypt(kvs[1]);
    }
  });
  
  return ret;
}

function jsonToCsqd(json){
  var ret = "";

  for(key in json){
    ret += (encrypt(key) + "!" + encrypt(String(json[key])) + "#" );
  }

  return ret;
}

module.exports = {
  toJSON: csqdToJson,
  fromJSON: jsonToCsqd
};
