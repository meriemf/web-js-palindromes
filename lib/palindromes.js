const isPalindrome = function(s) {
  let stringReverse = s.split("").reverse().join("");
  var re = /[\W_]/g;
  console.log(s.concat());
   console.log(stringReverse);
  return s.replace(re,"") == stringReverse.replace(re,"");
};

module.exports = isPalindrome;


