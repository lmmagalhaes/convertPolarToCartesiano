const tamanhoPe = document.querySelector('#formulario')
const valorR = document.querySelector('#valor-r')
const valorTheta = document.querySelector('#valor-theta')
const warningInputRadianos = document.querySelector('.warningInput')
const spanTeste = document.querySelector('.spanTeste')

// Imports do teseract
const inputImage = document.querySelector('.input-image')
const btnAdImage = document.querySelector('.btnAdcImage')
const saidaDeTexto = document.querySelector('.output-text')
const previewImage = document.querySelector('.preview')

const divDeResultado = document.querySelector('.resultado')
const divDoResumo = document.querySelector('.resume')
const botaoExplicacao = document.querySelector('.botaoExplicacao')
const divDeExplicacao = document.querySelector('.explicacao')
const primeiroResultado = document.querySelector(
  '.resultado_transforme_polar_cartesiano',
)
const secondResult = document.querySelector(
  '.resultado_transforme_polar_cartesiano-2',
)

const grausToRadiano = (graus) => {
  let calcShowPI = graus / 180

  calcShowPI === 1 ? (calcShowPI = '') : calcShowPI

  return calcShowPI + 'π'
}

function polarToCartesian(r, thetaDegrees) {
  const thetaRadians = thetaDegrees * (Math.PI / 180)
  const x = (r * Math.cos(thetaRadians)).toFixed(2)
  const y = (r * Math.sin(thetaRadians)).toFixed(2)

  return { x, y }
}

botaoExplicacao.addEventListener('click', () => {
  primeiroResultado.innerHTML = `Suas cordenadas cartesianas ficam dessa forma: (${
    polarToCartesian(Number(valorR.value), Number(valorTheta.value)).x
  }, ${polarToCartesian(Number(valorR.value), Number(valorTheta.value)).y})`
})

valorTheta.addEventListener('focusin', () => {
  spanTeste.className = 'colorRed'
  spanTeste.innerHTML = `Coloque o valor de θ em graus`
  warningInputRadianos.appendChild(spanTeste)
})

valorTheta.addEventListener('focusout', () => {
  spanTeste.classList.add('removeSpan')
})

// Aqui começa a lógica de lê imagem

btnAdImage.addEventListener('click', () => {
  inputImage.click()
})

inputImage.addEventListener('change', () => {
  let fileImage = inputImage.files[0]
  console.log('Exemplo de imagem', fileImage)

  previewImage.src = URL.createObjectURL(fileImage)
})
