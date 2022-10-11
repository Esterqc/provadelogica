export default function calcularSalario(salario, bonus, desc){

    const desconto = salario * (bonus / 100);
    const total = salario + desconto - desc;

    return `Seu salário líquido é de R$ ${total}`;
}