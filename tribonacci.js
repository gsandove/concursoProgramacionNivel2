//1. obtener la suma de los números en el array
//2. recorrer un for desde el 

function tribonacci(signature,n){
 //1. obtener la suma
    if( n == 0){
        signature = [];
    } else if (n>0 && n<3){
        signature = signature.splice(0, n)
    }

    if(n > 3){
        for (let index = 0; index < (n - 3); index++) {
        var sLength = signature.length;
        signature.push(signature[sLength - 3] + signature[sLength - 2] + signature[sLength - 1]);
        }
    }

    return signature;
}

console.log(tribonacci([1,1,1], 10))