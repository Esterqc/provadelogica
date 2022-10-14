export default function totalPagamento(qtdInteiras, qtdMeias, dia, pais) {
    let msg = 0

    if(pais == "nacional") {
        msg = (qtdInteiras + qtdMeias) * 5.0;
    }
    else {
        if (dia == "quarta-feira") {
            msg = (qtdInteiras + qtdMeias) * (28.5 / 2);
        }
        else {
            msg = (qtdInteiras * 28.5) + (qtdMeias * 28.5) / 2;
        }
    }
}