//insertion sort implemented as a stable sort, where same-value elements
//retain their general location
//can't do that with primitives, so we'll use objects
//[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]
//order is optiohal
"use strict";

function insertionSort (array) {
  //loop from 0 to max
  for(var i = 0; i < array.length; i++){
      debugger;
      var j = i;
      while(j > 0 && array[j].value < array[j - 1].value ){
          swap(array, j - 1, j);
          j = j - 1;
      }
  }
  return array;
}


function swap(arr, a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
