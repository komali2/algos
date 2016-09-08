var flattenArray = function(arr){
  var out = [];
  function recurse(anArray){
    if(!Array.prototype.isArray(anArray)){
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