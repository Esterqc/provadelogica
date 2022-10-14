export default function calcularAcai(pequeno, medio, grande, porcentagem) {
    pequeno = pequeno * 13.50;
    medio = medio * 15;
    grande = grande * 17.50;

    const subTotal = pequeno + medio + grande;
    const valor = subTotal * (porcentagem / 100)
    const total = subTotal - valor;

    return `Total à pagar R$ ${total}`;
}