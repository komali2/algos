var flattenArray = function(arr){
  var out = [];
  function recurse(anArray){
    if(!Array.isArray(anArray)){
      out.push(anArray);
    } else{
      anArray.forEach((el)=>{
        recurse(el);
      })
    }
  }
  recurse(arr);
  return out;
}

//only works one level deep
// var flattenArray = function(arr){
//   return [].concat.apply([], arr);
// }

//only works one level deep
// var flattenArray = function(arr){
//   var out = [];
//   for(var i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//       for(var j = 0; j < arr[i].length; j++){
//         out.push(arr[i][j]);
//       }
//     } else{
//       out.push(arr[i]);
//     }
//   }
//   return out;
// }