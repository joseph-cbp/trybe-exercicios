let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for(let index = 0; index < numbers.length; index +=1){
//    for
//}

//for (let index = 1; index < numbers.length; index += 1) {
//  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//    if (numbers[index] < numbers[secondIndex]) {
//      let position = numbers[index];
//      numbers[index] = numbers[secondIndex];
//      numbers[secondIndex] = position;
//    }
//  }
//}
//console.log(numbers);

// multiplica numero e anterior
let times = [];
for (let index = 1; index<numbers.length; index +=1){
    for(let secondIndex = index-1; secondIndex < index; secondIndex +=1){
        times.push(numbers[index]*numbers[secondIndex]);
        console.log(numbers[index], numbers[secondIndex])
    }
}
console.log(times)

// resultado esperado:
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
