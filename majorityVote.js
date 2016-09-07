//objs:  Given objects and the function isSame(obj a, obj b) it   returns true iff a == b. Given an array of these objects, return the object that appears more than 50% (not more than or equal) of the time. If no such object exists, return NULL. 

var majorityVote = function (arr) {
  //eliminate all elements but one
  var count = 0;
  var candidate;
  arr.forEach((el) => {
    if (count === 0) {
      candidate = el;
      count = 1;
    }
    else if (el === candidate) {
      count++;
    }
    else{
      count--;
    }
  });

  //determine if candidate is majority
  count = 0;
  arr.forEach((el)=>{
    if(el === candidate){
      count++;
    }
  });
  return count > (arr.length / 2) ? candidate : -1;
}
