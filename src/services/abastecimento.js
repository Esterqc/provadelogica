export default function calcularParadas(capac, consumo, dist){
    const resultado = dist / consumo / capac;

    return Math.ceil(resultado);
}