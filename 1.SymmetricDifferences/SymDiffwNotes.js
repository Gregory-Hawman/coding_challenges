// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
  
function symDiff(...args) {
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
    return result
}
  
  symDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // [1, 2, 4, 5, 6, 7, 8, 9]