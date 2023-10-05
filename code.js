function getSortedList (a) {
    return a.slice(1).every((item, i) => a[i] <= item)
}
function allEqual(a) {
    if(a.length===0) return false;
    for(var i = 0; i < a.length; i++) {
        if(a[i] !== a[i+1]) {
            return false
        }
    }
    return true;
}
function permutationSort(arr) {
    var results = [];
    if(allEqual(arr)) return arr;

    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
  
      return results;
    }
  
    var getAllList = permute(arr);
    var result =[];
    for (var i = 0; i < getAllList.length; i++){
        if(getSortedList(getAllList[i])) {
            result=getAllList[i];
        }
    }

    return result;
}

// I get help from TA
// I get sources from google, below links are from google.com
// https://stackoverflow.com/questions/9960908/permutations-in-javascript
// https://stackoverflow.com/questions/53833139/check-array-in-js-is-list-sorted

// For the test.js: always show error, tip with Counterexample: [0, 0];
// I use chatGPT give blow idea and then change the test.js file a little bit
// "jsverify is checking whether the specified property holds true for a wide range of test cases."
