export default function calcularSalario(salario, bonus, desc){
    const subTotal = salario + bonus + desc;
    const valor = subTotal * (desc / 100)
    const total = subTotal - valor;

    return `Seu salário líquido é de R$ ${total}`;
}