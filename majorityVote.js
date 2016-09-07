//objs:  Given objects and the function isSame(obj a, obj b) it   returns true iff a == b. Given an array of these objects, return the object that appears more than 50% (not more than or equal) of the time. If no such object exists, return NULL. 

var majorityVote = function (arr) {
  //eliminate all elements but one
  var count = 0;
  var saved;
  arr.forEach((el) => {
    if (count === 0) {
      saved = el;
      count = 1;
    }
    else if (el === saved) {
      count++;
    }
    else{
      count--;
    }
  })

  //is remaining element good candidate for majority?
}

 input = [2,1,1,2,3,3,2,4,4,2,5,5];
 console.log(majorityVote(input));