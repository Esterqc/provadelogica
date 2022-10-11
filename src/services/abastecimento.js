export default async function calcularParadas(capac, consumo, dist){
    let calc=  await dist / consumo / capac;

  

    return Math.ceil(calc);
}