const arr = new Array("cars","bike","cycles","skooters");

console.log("Array Styles");

// 1
console.log("NORMAL Loop, Return the items");

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// 2
console.log("OF Loop, Returns the items");

for(let items of arr){
    console.log(items);
}

// 3
console.log("IN Loop, Return the index number");

for(let items in arr){
    console.log(items)
}
