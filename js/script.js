for (var i = 1; i <= 100; i++) {
    parola= '';
    if ((i % 3 == 0) && (i % 5 == 0)) {
        parola = 'FizzBuzz';
        console.log(parola)
        i++;
    } else if (i % 5 == 0) {
        parola = 'Buzz';
        console.log(parola)
        i++;
    } else if(i % 3 == 0){
        parola = 'Fizz';
        console.log(parola)
        i++;
    }
    console.log(i);
}
