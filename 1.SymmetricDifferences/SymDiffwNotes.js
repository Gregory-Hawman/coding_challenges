// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function symDiff(...args) {
    // return an array no duplicates (use set, convert to array)
    //compare first two arrays, take result of comparison and compare with next array in line.
    
    // loop through first array, save the element to a cache with the element as the key, and save the value as 1
    // loop through the second array, add the key/value to cache.
    
    console.log("All args : ", args)
    // An Array contaning each array [[...], [...]]

    let cache = {} // for finding all the numbers we have and how many of each we have
    let result = [] // pulling out the ones we only have once

    // take each args array and loop all through of them 
    args.forEach( array => {
      // for each individual array, loop through it
      array.forEach( num => {
        // if the number we are looking for is in the cache already, it will have a value of at least 1
        if (cache[num] === 1) {
          // since we came across it again, add 1 to its value
          cache[num] = cache[num] + 1
          // or it was not yet in the cache, so set it's value to 1
        } else {
          cache[num] = 1
        }
      })
    })

    // Now we've ran through all the arg arrays, the cache is full of all our numbers, and how many times they appeared
    // looping through the cache
    for (var number in cache){
      // we only care about the numbers that were never duplicated aka === 1
      if(cache[number] === 1){
        // push those numbers into the result array
        result.push(parseInt(number));
      }
    }
    // return the answer
    return result;
  }
  
  symDiff([1, 2, 3, 3], [5, 2, 1, 4], [6, 4, 1]); // [1, 3, 5, 6]

function symDiff2(...args) {
    console.log("All args 2 : ", args, args.length)
    let cache = {}
    let result = []
    // how many arrays are we given. args.length
    // removed the duplicates from the arrays
    args.forEach( array => {
      let arraySet = new Set([])
      array.forEach( num => {
        arraySet.add(num)
      })
      let nonDupArrays = Array.from(arraySet)
      // loop through each array
      nonDupArrays.forEach( num => {
        //compare each num to result
        if (cache[num] === 1) {
          cache[num] = 0
        } else if (cache[num] === 0) {
          cache[num] = 1
        } else {
          cache[num] = 1
        }
      })
    })

    for (var num in cache) {
      if(cache[num] === 1){
        result.push(parseInt(num));
      }
    }

    // test the first two args[], args[0], args[1] get a result [...]
    // take that result[] and run it again now against the nexts args[] (args[2])
    // keep going until no more args[] are left
    // you will be left with final result

    return result
  }
  
  symDiff2([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // [1, 2, 4, 5, 6, 7, 8, 9]

  // first found, cache is empty so add everything in cache[number] = 1
  // second round, check if anything is in the cache already. if it is, turn it off cache[number] = 0 else add it in cache[number] = 1
  // next rounds if num is in cache and cache[number] = 1 turn it off, else if it is in cache and ache[number] = 0 turn it on, else add it to cache at cache[number] = 1
  // return all cache[number] === 1