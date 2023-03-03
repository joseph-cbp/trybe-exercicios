const name = 'Adriana';
const lastName = 'Soares';
//console.log(`Olá, ${name} ${lastName} !`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
//console.log(`O resultado da soma ${a} + ${b} é ${soma(a,b)}`);

const numeroAleatorio = () => Math.random();
//console.log(numeroAleatorio());

const hello = (nome) => (`Olá, ${nome}`)
//function hello(nome) {
//    return `Olá, ${nome}!`
//  }
//let nome = 'Ivan';
//console.log(hello(nome));

const nomeCompleto = (nome,sobrenome) => (`${nome} ${sobrenome}`);
//function nomeCompleto(nome, sobrenome) {
//    return `${nome} ${sobrenome}`
//  }
//let nome = 'Ivan';
//let sobrenome = 'Pires';
//console.log(nomeCompleto(nome, sobrenome));

let speed = 90;
const speedCar = (speed) => (speed >= 120 ? 'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida');
  //if (speed >= 120) {
  //  return `Você ultrapassou o limite de velocidade`;
  //} else {
  //  return `Você está na velocidade permitida`;
console.log(speedCar(speed));

