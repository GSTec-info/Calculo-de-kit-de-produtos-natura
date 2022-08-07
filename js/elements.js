<<<<<<< Updated upstream
function abreConfig() {
    const modal = document.querySelector('#modal-container-config')
=======
function abreModal() {
    const modal = document.querySelector('#modal-container')
>>>>>>> Stashed changes
    modal.classList.add('mostrar')


    modal.addEventListener('click', (e) => {
<<<<<<< Updated upstream
        if (e.target.id === 'modal-alt-btn' || e.target.id === 'modal-container-config') {
            modal.classList.remove('mostrar')
        }
    })
}

function abreCalc() {
    const modal = document.querySelector('#modal-container-calc')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if (e.target.id === 'modal-btn-fechar-calc' || e.target.id === 'modal-container-calc') {
            modal.classList.remove('mostrar')
        }
    })
}

function abreInfo() {
    const modal = document.querySelector('#modal-container-info')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if (e.target.id === 'modal-btn-fechar-info' || e.target.id === 'modal-container-info') {
=======
        if (e.target.id === 'modal-close-btn' || e.target.id === 'modal-container') {
>>>>>>> Stashed changes
            modal.classList.remove('mostrar')
        }
    })
}