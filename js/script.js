for (var i = 1; i <= 100; i++) {
    parola= '';
    console.log(i);
    if ((i % 3 == 0) && (i % 5 == 0)) {
        parola = 'FizzBuzz';
        console.log(i + ' Ha il nome di: ' + parola);
    } else if (i % 5 == 0) {
        parola = 'Buzz';
        console.log(i + ' Ha il nome di: ' + parola);
    } else if(i % 3 == 0){
        parola = 'Fizz';
        console.log(i + ' Ha il nome di: ' + parola);
    }
}
