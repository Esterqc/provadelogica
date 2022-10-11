export default function calcularAcai(pequenos, medios, grandes, porcentagem) {
    pequenos = pequenos * 13.50;
    medios = medios * 15;
    grandes = grandes * 17.50;

    const subTotal = pequenos + medios + grandes;
    const valor = subTotal * (porcentagem / 100)
    const total = subTotal - valor;

    return `Total à pagar R$ ${total}`;
}