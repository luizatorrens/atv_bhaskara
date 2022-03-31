function delta (a, b, c){
    return (b * b) - (4*(a*b))
}
function bhaskara(a, b, c){
    const valorDelta = delta(a, b, c)
    if (valorDelta < 0)
    return ({x1: "Inexistente", x2:"Inexistente"})
    else {
        const valor_x1 = (-b + Math.sqrt(valorDelta)) / (2 * a)
        const valor_x2 = (-b - Math.sqrt(valorDelta)) / (2 * a)
        return ({x1: valor_x1, x2: valor_x2})
    }
}

function handleBtnCalcular() {
    const vA = document.getElementById('valora').value
    const vB = document.getElementById('valorb').value
    const vC = document.getElementById('valorc').value
    const raizes = bhaskara(vA, vB, vC)
    document.getElementById('x1').innerHTML = raizes.x1
    document.getElementById('x2').innerHTML = raizes.x2
}

function handleBtnLimpar() {
    document.getElementById('valora').value = ''
    document.getElementById('valorb').value = ''
    document.getElementById('valorc').value = ''
    document.getElementById('x2').innerHTML = 'X2='
    document.getElementById('x1').innerHTML = 'X1='
}

document.getElementById('btnCalcular').addEventListener('click', handleBtnCalcular)
document.getElementById('btnLimpar').addEventListener('click', handleBtnLimpar)