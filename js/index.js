const quantidadeProd = {
    qtd2: document.getElementById('qtd_Prod2'),
    qtd3: document.getElementById('qtd_Prod3'),
    qtd4: document.getElementById('qtd_Prod4')
}

const vlrItens = {
    vlr1: document.getElementById("res_item1"),
    vlr2: document.getElementById("res_item2"),
    vlr3: document.getElementById("res_item3"),
    vlr4: document.getElementById("res_item4")
}

const valorSugerido = {
    vlr1: document.getElementById("res_sug1"),
    vlr2: document.getElementById("res_sug2"),
    vlr3: document.getElementById("res_sug3"),
    vlr4: document.getElementById("res_sug4")
}

const resultCalculo = {
    descontoRevend: document.getElementById("res_Revend"),
    vlrCusto: document.getElementById("res_Custo"),
    vlrVenda: document.getElementById('res_Venda'),
    vlrGanho: document.getElementById('res_Ganho')
}

valorSugerido.vlr1.style.display = "none"
valorSugerido.vlr2.style.display = "none"
valorSugerido.vlr3.style.display = "none"
valorSugerido.vlr4.style.display = "none"

const avisoTotalKit = document.getElementById('aviso_total_kit')


function getPercentRevend() {
    const percentRevend = document.getElementById('porcent_revend').value
    if (percentRevend == "") {
        return 0
    }
    return percentRevend
}

function calcula() {
    // Calculo geral
    const total = document.getElementById("total_kit").value
    const percent_lucro = document.getElementById('porcent_itens').value
    let percentRevend = parseFloat(getPercentRevend()) / 100
    const descVend = parseFloat(total * percentRevend)
    const vlrCusto = parseFloat(total - descVend)
    let vlrVenda = vlrCusto + (parseFloat(vlrCusto) * (parseFloat(percent_lucro) / 100))
    let vlrGanho = vlrVenda - vlrCusto
    if (vlrCusto == 0) {
        vlrVenda = parseFloat(total + (total * (percent_lucro / 100)))
        vlrGanho = parseFloat(vlrVenda - total)
    }



    if (total == "") {
        vlrItens.vlr1.innerText = 'R$ 0,00'
        vlrItens.vlr2.innerText = 'R$ 0,00'
        vlrItens.vlr3.innerText = 'R$ 0,00'
        vlrItens.vlr4.innerText = 'R$ 0,00'
        valorSugerido.vlr1.innerText = 'R$ 0,00'
        valorSugerido.vlr2.innerText = 'R$ 0,00'
        valorSugerido.vlr3.innerText = 'R$ 0,00'
        valorSugerido.vlr4.innerText = 'R$ 0,00'
        vlrItens.vlr1.style.borderBottomLeftRadius = "10px";
        vlrItens.vlr1.style.borderBottomRightRadius = "10px";
        vlrItens.vlr2.style.borderBottomLeftRadius = "10px";
        vlrItens.vlr2.style.borderBottomRightRadius = "10px";
        vlrItens.vlr3.style.borderBottomLeftRadius = "10px";
        vlrItens.vlr3.style.borderBottomRightRadius = "10px";
        vlrItens.vlr4.style.borderBottomLeftRadius = "10px";
        vlrItens.vlr4.style.borderBottomRightRadius = "10px";
        valorSugerido.vlr1.style.display = "none"
        valorSugerido.vlr2.style.display = "none"
        valorSugerido.vlr3.style.display = "none"
        valorSugerido.vlr4.style.display = "none"
        resultCalculo.vlrCusto.innerText = 'R$ 0,00'
        resultCalculo.vlrVenda.innerText = 'R$ 0,00'
        resultCalculo.vlrGanho.innerText = "Ganho de: R$ 0,00"
        avisoTotalKit.innerText = "Preencha o total do kit para calcular os valores"
        avisoTotalKit.style.display = "block"
        return

    } else {
        avisoTotalKit.innerText = ""
        avisoTotalKit.style.display = "none"
    }

    resultCalculo.descontoRevend.innerText = descVend.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })
    resultCalculo.vlrCusto.innerText = vlrCusto.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })
    resultCalculo.vlrVenda.innerText = vlrVenda.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })
    if (percent_lucro != 0) {
        resultCalculo.vlrGanho.innerText = "Ganho de: " + vlrGanho.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
    } else {
        resultCalculo.vlrVenda.innerText = vlrCusto.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        resultCalculo.vlrGanho.innerText = "Ganho de: R$ 0,00"
    }

    // Calculo para 2 itens
    function calcula2() {
        const somaItens = 1 + 2
        let prcBase = 0
        if (vlrCusto == '0') {
            prcBase = total / somaItens
        } else {
            prcBase = vlrCusto / somaItens
        }

        const vlrItem1 = prcBase
        const vlrItem2 = prcBase * 2
        const prcSug1 = vlrItem1 + (vlrItem1 * (percent_lucro / 100))
        const prcSug2 = vlrItem2 + (vlrItem2 * (percent_lucro / 100))

        vlrItens.vlr1.innerText = vlrItem1.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        vlrItens.vlr2.innerText = vlrItem2.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })

        //-- Calculo de lucro (itens) --
        if (percent_lucro != 0) {
            valorSugerido.vlr1.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug1.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            valorSugerido.vlr2.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug2.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })

            vlrItens.vlr1.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr1.style.borderBottomRightRadius = "0px";
            vlrItens.vlr2.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr2.style.borderBottomRightRadius = "0px";
            vlrItens.vlr3.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr3.style.borderBottomRightRadius = "10px";
            vlrItens.vlr4.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr4.style.borderBottomRightRadius = "10px";
            valorSugerido.vlr1.style.display = "block"
            valorSugerido.vlr2.style.display = "block"
            valorSugerido.vlr3.style.display = "none"
            valorSugerido.vlr4.style.display = "none"
            valorSugerido.vlr3.innerText = ""
            valorSugerido.vlr4.innerText = ""

        } else {
            vlrItens.vlr1.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr1.style.borderBottomRightRadius = "10px";
            vlrItens.vlr2.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr2.style.borderBottomRightRadius = "10px";
            vlrItens.vlr3.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr3.style.borderBottomRightRadius = "10px";
            vlrItens.vlr4.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr4.style.borderBottomRightRadius = "10px";
            valorSugerido.vlr1.style.display = "none"
            valorSugerido.vlr2.style.display = "none"
            valorSugerido.vlr3.style.display = "none"
            valorSugerido.vlr4.style.display = "none"
            valorSugerido.vlr1.innerText = ""
            valorSugerido.vlr2.innerText = ""
            valorSugerido.vlr3.innerText = ""
            valorSugerido.vlr4.innerText = ""
            resultCalculo.vlrVenda.innerText = vlrCusto.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            resultCalculo.vlrGanho.innerText = "Ganho de: R$ 0,00"


        }
        //----------------------------------------
        vlrItens.vlr3.innerText = "---"
        vlrItens.vlr4.innerText = "---"

    }
    if (quantidadeProd.qtd2.checked == true) {
        calcula2()
    }
    quantidadeProd.qtd2.onclick = function() {
        calcula2()
    }

    // Calculo para 3 itens
    function calcula3() {
        const somaItens = 1 + 2 + 3
        let prcBase = 0
        if (vlrCusto == '0') {
            prcBase = total / somaItens
        } else {
            prcBase = vlrCusto / somaItens
        }
        let vlrItem1 = prcBase
        let vlrItem2 = prcBase * 2
        let vlrItem3 = prcBase * 3
        const prcSug1 = vlrItem1 + (vlrItem1 * (percent_lucro / 100))
        const prcSug2 = vlrItem2 + (vlrItem2 * (percent_lucro / 100))
        const prcSug3 = vlrItem3 + (vlrItem3 * (percent_lucro / 100))


        vlrItens.vlr1.innerText = vlrItem1.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        vlrItens.vlr2.innerText = vlrItem2.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        vlrItens.vlr3.innerText = vlrItem3.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })

        //-- Calculo de lucro (itens) --
        if (percent_lucro != 0) {
            valorSugerido.vlr1.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug1.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            valorSugerido.vlr2.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug2.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            valorSugerido.vlr3.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug3.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            vlrItens.vlr1.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr1.style.borderBottomRightRadius = "0px";
            vlrItens.vlr2.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr2.style.borderBottomRightRadius = "0px";
            vlrItens.vlr3.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr3.style.borderBottomRightRadius = "0px";
            vlrItens.vlr4.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr4.style.borderBottomRightRadius = "10px";
            valorSugerido.vlr1.style.display = "block"
            valorSugerido.vlr2.style.display = "block"
            valorSugerido.vlr3.style.display = "block"
            valorSugerido.vlr4.style.display = "none"
            valorSugerido.vlr4.innerText = ""

        } else {
            vlrItens.vlr1.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr1.style.borderBottomRightRadius = "10px";
            vlrItens.vlr2.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr2.style.borderBottomRightRadius = "10px";
            vlrItens.vlr3.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr3.style.borderBottomRightRadius = "10px";
            vlrItens.vlr4.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr4.style.borderBottomRightRadius = "10px";
            valorSugerido.vlr1.style.display = "none"
            valorSugerido.vlr2.style.display = "none"
            valorSugerido.vlr3.style.display = "none"
            valorSugerido.vlr4.style.display = "none"
            valorSugerido.vlr1.innerText = ""
            valorSugerido.vlr2.innerText = ""
            valorSugerido.vlr3.innerText = ""
            valorSugerido.vlr4.innerText = ""
            resultCalculo.vlrVenda.innerText = vlrCusto.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            resultCalculo.vlrGanho.innerText = "Ganho de: R$ 0,00"


        }

        //----------------------------------------

        vlrItens.vlr4.innerText = "---"
    }

    if (quantidadeProd.qtd3.checked == true) {
        calcula3()
    }

    quantidadeProd.qtd3.onclick = function() {
        calcula3()
    }

    // Calculo para 4 itens
    function calcula4() {
        const somaItens = 1 + 2 + 3 + 4
        let prcBase = 0
        if (vlrCusto == '0') {
            prcBase = total / somaItens
        } else {
            prcBase = vlrCusto / somaItens
        }
        const vlrItem1 = prcBase
        const vlrItem2 = prcBase * 2
        const vlrItem3 = prcBase * 3
        const vlrItem4 = prcBase * 4
        const prcSug1 = vlrItem1 + (vlrItem1 * (percent_lucro / 100))
        const prcSug2 = vlrItem2 + (vlrItem2 * (percent_lucro / 100))
        const prcSug3 = vlrItem3 + (vlrItem3 * (percent_lucro / 100))
        const prcSug4 = vlrItem4 + (vlrItem4 * (percent_lucro / 100))

        vlrItens.vlr1.innerText = vlrItem1.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        vlrItens.vlr2.innerText = vlrItem2.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        vlrItens.vlr3.innerText = vlrItem3.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        vlrItens.vlr4.innerText = vlrItem4.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })

        //-- Calculo de lucro (itens) --
        if (percent_lucro != 0) {
            valorSugerido.vlr1.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug1.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            valorSugerido.vlr2.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug2.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            valorSugerido.vlr3.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug3.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            valorSugerido.vlr4.innerText = `+ ${percent_lucro}% de lucro\n` + prcSug4.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            vlrItens.vlr1.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr1.style.borderBottomRightRadius = "0px";
            vlrItens.vlr2.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr2.style.borderBottomRightRadius = "0px";
            vlrItens.vlr3.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr3.style.borderBottomRightRadius = "0px";
            vlrItens.vlr4.style.borderBottomLeftRadius = "0px";
            vlrItens.vlr4.style.borderBottomRightRadius = "0px";
            valorSugerido.vlr1.style.display = "block"
            valorSugerido.vlr2.style.display = "block"
            valorSugerido.vlr3.style.display = "block"
            valorSugerido.vlr4.style.display = "block"

        } else {
            vlrItens.vlr1.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr1.style.borderBottomRightRadius = "10px";
            vlrItens.vlr2.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr2.style.borderBottomRightRadius = "10px";
            vlrItens.vlr3.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr3.style.borderBottomRightRadius = "10px";
            vlrItens.vlr4.style.borderBottomLeftRadius = "10px";
            vlrItens.vlr4.style.borderBottomRightRadius = "10px";
            valorSugerido.vlr1.style.display = "none"
            valorSugerido.vlr2.style.display = "none"
            valorSugerido.vlr3.style.display = "none"
            valorSugerido.vlr4.style.display = "none"
            valorSugerido.vlr1.innerText = ""
            valorSugerido.vlr2.innerText = ""
            valorSugerido.vlr3.innerText = ""
            valorSugerido.vlr4.innerText = ""
            resultCalculo.vlrVenda.innerText = vlrCusto.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            })
            resultCalculo.vlrGanho.innerText = "Ganho de: R$ 0,00"
        }
        //----------------------------------------
    }
    if (quantidadeProd.qtd4.checked == true) {
        calcula4()
    }
    quantidadeProd.qtd4.onclick = function() {
        calcula4()
    }

}