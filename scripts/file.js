// alert("There will be an error")
// [1, 2].forEach(alert)

// alert("All fine now")
// [1, 2].forEach(alert)

// let user ="Jirawit";
// let age =22;
// let message ='Hello';
// alert(message);
// alert(age);
// console.log(x);
// var x = 5 ;
// console.log(x);

// console.log(y);
// var x = 5 ;
// console.log(y);

// let age = prompt('age?');

// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello!' :
//     (age < 100) ? 'Greetings!' :
//     'What an unusual age!' ;

// alert(message);

// myFunctionString.split("\n").reduce(function(map, line) {
//     if (/^\s*[^\s[\]]+\(\);?\s*$/.test(line))
//         map.push(line.split(".").pop().replace(/\(\);?\s*$/, ""));
//     return map;
// }, []);


// A stricter parse function //
//     if (/^[-+]?(\d+|Infinity)$/.test(value)) {


// function filter(value) {
//     if (/^[-+]?(\d+|Infinity)$/.test(value)) {
//         return Number(value)
//     } else {
//         return null
//     }
// }


loop:for (;;) {
    var prime = [];
    let message = prompt('Enter a positive integer');
    var number = message;
    if (number>0 && !(number % 1 != 0)) break;
}


function showPrime(number) {
    for (let i = 2; number>i; i++){
        if(!isPrime(i)) continue;
            prime.push(i)  
    }
    alert('For n = '+ number +' prime number are '+ prime)
}

function isPrime(number) {
    for (let i = 2; number>i; i++) {
        if (number%i == 0) return false;
    }
    return true;
}
showPrime(number);


