let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let addAll = 0;
for(let index = 0; index < numbers.length; index += 1){
    // Mostra todos os elementos do Array
    //console.log(numbers[index]); 
    
    //Somar todos os elementos do Array
    addAll += numbers[index]
    
}
console.log(addAll);
console.log(addAll/numbers.length);
if(addAll > 20){
    console.log('Valor Maior que 20');
}else{
    console.log('Valor Menor que 20');
}
