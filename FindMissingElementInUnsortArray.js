//given the unsorted array you need to find the missing element in the given array
//ex: 13255 ->4
//23524 ->4

const findMissing = (arr) =>{
    const dumb = Array(arr.length +1).fill(0)
    for(let i = 0; i < arr.length; i ++){
        dumb[arr[i]] = 1
    }
    for(let i = 1; i < arr.length; i ++){
        if (dumb[i] == 0){
            return i
        }
    }
}
const num = [1, 3, 2, 5, 5];
console.log(findMissing(num))