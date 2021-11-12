// getElementById()

// const element = document.getElementById('blog-title')

// getElementByClassName()
// const element = document.getElementsByClassName('one')

// getElementTagName()
// const element = document.getElementsByTagName('p')

// querySelector()
// const element = document.querySelector('h1')

// querySelectorAll()
// const elements = document.querySelectorAll('.one')

// elements.forEach(el => console.log(el))
// consigo usar o forEach com o querySelectorAll, pois não dar para usar com ByClassName()

// Manipulando conteúdo 
// textContent
// const element = document.querySelector('h1')
// element.textContent += ' Olá Luis!'

// const element = document.querySelector('h1')
// element.innerHTML = 'Olá Devs!'

//  OBS: Dentro do InnerHTML(""), eu posso usar codigo em html.

// value
// const element = document.querySelector('input')
// console.log(element.value)
// element.value = 'outro valor'

// Atributos dos elementos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')