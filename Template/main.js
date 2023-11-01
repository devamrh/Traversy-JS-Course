const arr = new Array("cars","bike","cycles","skooters");

console.log("Array Styles");


console.log("Normal Loop");

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}


console.log("Of Loop");

for(let items of arr){
    console.log(items);
}