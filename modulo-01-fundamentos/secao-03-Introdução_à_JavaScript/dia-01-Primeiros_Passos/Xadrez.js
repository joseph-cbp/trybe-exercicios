let peça ='REI';
let textoGeral = peça.toLowerCase();
console.log(textoGeral);

switch (textoGeral){
    case 'peão'|| 'peao':
        console.log('2 ou 1 casa em frente');
        break;
    
    case 'bispo':
        console.log('diagonal');
        break;
    
    case 'cavalo':
        console.log('Em "L"');
        break;

    case 'torre':
        console.log('linha reta');
        break;

    case 'rainha':
        console.log('anda em todas as direções');
        break;

    case 'rei':
        console.log('1 casa em qualquer direção');
        break;
    default:
}