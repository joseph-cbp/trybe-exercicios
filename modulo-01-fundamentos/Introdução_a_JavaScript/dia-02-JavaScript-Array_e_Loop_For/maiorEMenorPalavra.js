let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggest = array[0];
for(let index = 0; index < array.length; index += 1){
    if (array[index].length >= biggest.length){
        biggest = array[index]
    }
}
console.log(biggest)
let lowest = array[0];
for(let index = 0; index < array.length; index += 1){
    if (array[index].length <= lowest.length){
        lowest = array[index]
    }
}
console.log(lowest);