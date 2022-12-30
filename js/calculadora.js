const result = document.getElementById("res-calc")
const display_expressao = document.getElementById("expressao");
let expressao = display_expressao.innerText;


document.querySelectorAll('.btn-action').forEach(item => {

    item.addEventListener('click', event => {

        switch (item.innerText) {

            case '=':
                result.innerText = '=  ' + eval(expressao).toLocaleString('pt-BR', { style: 'decimal' });;
                break;

            case 'C':
                expressao = ''

                display_expressao.innerHTML = expressao;
                display_expressao.style.height = '1em'
                display_expressao.style.fontSize = '18px'
                display_expressao.style.width = '277px'

                result.innerText = expressao;
                result.style.height = '2em'
                result.style.fontSize = '22px'
                result.style.width = '275px'
                break;

            case '←':
                display_expressao.innerText = expressao.replace(/.$/, '')
                expressao = display_expressao.innerText

                if (display_expressao.innerText == '') {
                    result.innerText = ''
                } else {
                    result.innerText = '=  ' + eval(expressao).toLocaleString('pt-BR', { style: 'decimal' });;
                }
                break;

            default:
                expressao += item.innerHTML;
                result.innerText = '=   ' + eval(expressao).toLocaleString('pt-BR', { style: 'decimal' });;
                display_expressao.innerText = expressao;
        }

    });

});

document.querySelectorAll('.btn-num').forEach(item => {

    item.addEventListener('click', event => {

        switch (item.innerHTML) {

            default: expressao += item.innerText;

            if (expressao.length > 30) {
                display_expressao.style.height = 'auto'
                display_expressao.style.fontSize = '15px'
                display_expressao.style.width = '279px'
            }
            if (result.innerText.length > 30) {
                result.style.height = 'auto'
                result.style.fontSize = '18px'
            }
            result.innerText = '=   ' + eval(expressao).toLocaleString('pt-BR', { style: 'decimal' });;
            display_expressao.innerText = expressao;
        }

    });

});