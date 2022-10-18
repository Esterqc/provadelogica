export default function totalPagamento(inteiras, meias, diaSemana, nacional) {
    let msg = 0

    if(nacional == true) {
        msg = (inteiras + meias) * 5.0;
    }
    else {
        if (diaSemana == "quarta-feira") {
            msg = (inteiras + meias) * (28.5 / 2);
        }
        else {
            msg = (inteiras * 28.5) + (meias * 28.5) / 2;
        }
    }
}