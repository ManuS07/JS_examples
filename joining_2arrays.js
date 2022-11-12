let arr1 = [1,2,3,4,5,6,7];
let arr2 = [4,5,6,7,8,9,7];
let arr3 = arr1.concat(arr2);
arr4 = [];

for (let i = 0; i < arr3.length; i++) {
        
            if(!arr4.includes(arr3[i])){
                arr4.push(arr3[i]);
            }

        }    
console.log(arr4);

