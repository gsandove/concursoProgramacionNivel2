

function findOutlier(integers){
  // lista de pares
  // lista de impares
  // si impares es mayor
  // se devuelve el par
  // si no lo es 
  // se devuelve el primer impar

  let listOdds = integers.filter( number => number % 2 != 0);
  let listEvens = integers.filter( number => number % 2 == 0);

  return (listOdds.length > listEvens.length) ? listEvens[0] : listOdds[0];
}


console.log("result : "+findOutlier([0,0,3,0,0]));