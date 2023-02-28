// querySelector - #id | .class | p-primera etiqueta p (primero que encuentra)
// querySelectorAll -> todos

const xMens = [
  'Wolverine', 'Storm', 'Jubilee', 'Gambit'
]


const containerList = document.querySelector('#someid')

xMens.forEach((elementoIterado) => {
  containerList.innerHTML += `<li id="xmen" class="style">${elementoIterado}</li>`
})

// document.querySelectorAll('.style').classList.add('style-two')

// document.querySelectorAll('.style').classList.remove('style')

const handleCLick = () => {
  console.log('Clickado!!! Bienvenido a RTC')
}


// mis elementos no estaban en el HTML

let handleCLickXmen = (e) => {
  console.log('Insertado desde JS')

}

document.querySelector('#xmen').addEventListener('click', handleCLickXmen)