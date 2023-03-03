let engine = true;
const carsEngine = (engine) => {
    if (engine === false) {
        engine = true;
        return 'O motor agora está ligado';
    } else {
        return 'O motor agora está desligado';
    }
}
console.log(carsEngine(engine));

const circleArea = (radious) =>{
    if (typeof radious !== 'number') {
        return 'O valor passado deve ser um número';
    }
    return Math.PI*(radious**2);
    //(typeof(radious) !== 'number') ? 'O valor passado deve ser um número' : Math.PI*(radious**2)
}
console.log(circleArea(2));

const biggestWord = (word) => {
    let arrWords = word.split(' ');
    let theWord = arrWords[0];
    for (let index = 1; index < arrWords.length; index += 1) {
        if (arrWords[index].length > theWord.length) {
            theWord = arrWords[index];
        }
    }
    return theWord;
}
console.log(biggestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));