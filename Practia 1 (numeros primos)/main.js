document.querySelector("#btn").addEventListener("click", () =>{
    let num = document.querySelector("#numero").value;
    let result = document.querySelector("#result");
    let primos = [2];

    for(let i = 2; i < num; i++){
        let num = i;
        let primo = true;

        primos.forEach((nPrimo) =>{
            if(num !== nPrimo && (num % nPrimo) == 0){
                primo = false;
            }
        });
        if(primo === true) primos.push(num);
        console.log(primos);
        if(primo) result.innerHTML += num + ', ';
    }
});
