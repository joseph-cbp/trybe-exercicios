let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let addAll = 0;
for(let index = 0; index < numbers.length; index += 1){
    // Mostra todos os elementos do Array
    //console.log(numbers[index]); 
    
    //Somar todos os elementos do Array
    addAll += numbers[index]
    
}
console.log(addAll);

// Calcula Média
console.log(addAll/numbers.length);

// Verifica Se é Maior ou Menor que 20
if(addAll > 20){
    console.log('Valor Maior que 20');
}else{
    console.log('Valor Menor que 20');
}

// Verifica qual é o Maior elemento
let biggest = 0;
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] >= biggest){
        biggest = numbers[index]
    }
}
console.log(biggest)

//Valor Impar
let oddNumbers = [];
for(let number of numbers){
    if (number%2 != 0){
        oddNumbers.push(number);
    }
}
console.log(oddNumbers)

//Valor Menor
let lowest = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] <= lowest){
        lowest = numbers[index]
    }
}
console.log(lowest)

//Array de 1 à 25
let number1To25 = [];
for(let index = 1; index <= 25; index +=1){
    number1To25.push(index)
}
console.log(number1To25);

//Dividir por 2
let dividedBy2 = [];
for(let number of number1To25){
    dividedBy2.push(number/2)
}
console.log(dividedBy2);