// var stringReverse = function(str){
//     var out = "";
//     for(var i = str.length - 1; i >= 0; i--){
//         out+= str[i];
//     }
//     return out;
// }

// var stringReverse = function(str){
//     return str.split('').reverse().join('');
// }

function stringReverse(str) {
  return (str === '') ? '' : stringReverse(str.substr(1)) + str.charAt(0);
}