// FIRST ALTERNATIVE

// for (var i = 1; i <= 100; i++) {
//     parola= '';
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         parola = 'FizzBuzz';
//         document.getElementById('lista').innerHTML += '<li>' + parola + '</i>';
//     } else if (i % 5 == 0) {
//         parola = 'Buzz';
//         document.getElementById('lista').innerHTML += '<li>' + parola + '</i>';
//     } else if(i % 3 == 0){
//         parola = 'Fizz';
//         document.getElementById('lista').innerHTML += '<li>' + parola + '</i>';
//     }  else {
//         document.getElementById('lista').innerHTML += '<li>' + i + '</i>';
//     }
// }

// SECOND ALTERNATIVE

for (var i = 1; i <= 100; i++) {
    var parola= '';
    if ((i % 3 == 0) && (i % 5 == 0)) {
        parola = 'FizzBuzz';
    } else if (i % 5 == 0) {
        parola = 'Buzz';
    } else if(i % 3 == 0){
        parola = 'Fizz';
    }
    if (parola) {
        document.getElementById('lista').innerHTML += '<li>' + parola + '</i>';
    }  else {
        document.getElementById('lista').innerHTML += '<li>' + i + '</i>';
    }
}
