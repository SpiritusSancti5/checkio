"use strict";

function romanNumerals(num) {
    var char = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var str = '';
  
   for (var i = 0; i < arr.length; i++) {
    while (arr[i] <= num) {
      str += char[i];
      num -= arr[i];
    }
  }
  
  
 return str;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}
