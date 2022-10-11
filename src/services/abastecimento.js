function calcularParadas(capac, consumo, dist){
    const litros = dist / consumo;
    const qtdParadas = litros / capac;

    qtdParadas = Math.cell(qtdParadas);

    return `Você precisará fazer ${qtdParadas} paradas para abastecer`
}