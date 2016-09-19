var shuffle = function(arr){
  var out = [];
  arr = Array.prototype.slice.call(arr);
  while(arr.length){
    var rand = random(0, arr.length - 1 );
    out.push(arr[rand]);
    arr.splice(rand, 1);
  }
  return out;
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
