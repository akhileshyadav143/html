let arr =[1,2,3,4,6]

console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
arr[0]=5666;
console.log(arr.toString())
console.log(arr.join("and"))

let newArr =arr.map((e,index,array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven =(e)=>{
    if(e>7){
        return true
    }
    return false

}
newArr.filter(greaterThanSeven)

