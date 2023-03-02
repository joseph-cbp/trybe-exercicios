let numbers = ['java', 'javascript', 'python', 'html', 'css'];

let biggest = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index].length >= biggest.length){
        biggest = numbers[index]
    }
}
console.log(biggest)
let lowest = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index].length <= lowest.length){
        lowest = numbers[index]
    }
}
console.log(lowest);