// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// que actividades crees que tiene que hacer

// 1. obtener la lista de palabras : OK
// 2. definir hasta que número tiene que viajar : OK
// 2.5 validar que el lenght sea mayor a cero : OK
// 3.5 recorro un for con números 
// 4. luego recorro el for. : 
// 5. inserto en un en un objeto con clave valor


// step 1 Gert each word
function order(words){
    var result = ""
    var listWords = words.split(" ");
    var limitIterator = listWords.length +1
    if(listWords.length > 0){
        for (let index = 1; index < limitIterator ; index++) {
            listWords.forEach(element => {
                if(element.includes(index)){
                    result += " ".concat(element);
                } 
            });
        }
    }
    
    return result.substring(1,result.length);
}

console.log(order("is2 Thi1s T4est 3a"));