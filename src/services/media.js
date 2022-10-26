export function criarArray(tamanho){
    let notas =[];
 for(let volta =1; volta <=tamanho; volta++){
    notas.push(0);
 }
 return notas;
}


export function CalcMedia(notas){
    let soma = 0;
    for(let volta = 0; volta < notas.length; volta++) {
        soma = soma + notas[volta]
    }
    let  m = soma / notas.length;
    return m;
}


export function CalcMaior(notas){
    let m = 0;
  for(let volta = 0; volta <notas.length; volta++){
    if (notas[volta] > m){
        m = volta[volta];
    }
  } 
  return m;
}


export function CalcMenor(notas){
    let m = 11;
  for(let volta = 0; volta <notas.length; volta++){
    if (notas[volta] > m){
        m = volta[volta];
    }
  } 
  return m;
}