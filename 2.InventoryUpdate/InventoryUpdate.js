// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    const inventory = new Map()
    let updatedInventory = []
  
    arr1.forEach(pair => {
      inventory.set(pair[1], pair[0])
    })
  
    arr2.forEach(pair => {
      let addItemCount = inventory.get(pair[1])
      if (inventory.has(pair[1])){
        inventory.set(pair[1], (pair[0] + addItemCount))
  
      } else {
        inventory.set(pair[1], pair[0])
      }
    })
  
    updatedInventory = Array.from(inventory, ([name, value])=>([value,name])).sort((a,b)=>{
       return  a[1]>b[1] ? 1 : -1
      })
      return updatedInventory;
  }
  
  // Example inventory lists
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  
  updateInventory(curInv, newInv);