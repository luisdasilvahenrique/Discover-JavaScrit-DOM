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

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerID = document.querySelector('#header')

// console.log(headerID.getAttribute('class'))

// header.removeAttribute('id')
// header.removeAttribute('class')

// Alterando estilos com style
// const element = document.querySelector('body')
// element.style.backgroundColor = "#f9f301"

// classList

// const element = document.querySelector('body')

// element.classList.add('active', 'green')

// console.log(element.classList)

// element.classList.remove('active')
// element.classList.toggle('active')

// Navegando pelos elementos
// parentNode parentElement

// const element = document.querySelector('h1')
// console.log(element.parentElement)

// Pegando elementos filhos
// ChildNodes children
// const el = document.querySelector('body')
// console.log(el.children)

// firstChild firstElementChild
// console.log(el.firstElementChild)
// lastChild
// console.log(el.lastElementChild)//lastChild

// Buscando Irmãos
// nextSibling nextElementSibling
// const el = document.querySelector('body script')
// console.log(el.nextElementSibling)// nextSibling

// previousSibling previousElementSibling
// console.log(el.previousElementSibling)// previousSibling

// criando e adicionando elementos na página
// createElement
// const div = document.createElement('div')
// div.innerText = 'Olá Dev!'

// append prepend
// const body = document.querySelector('body')
// body.prepend(div)//prepend = antes

// Adicionando elementos
// const div = document.createElement('div')
// div.innerText = 'Olá Devs!'
// insertBefore = antes
// const body = document.querySelector('body')
// const script = document.querySelector('script')
// body.insertBefore(div, script)

// Eventos
// function print(){
//     console.log('Print!')
// }

// Eventos teclado
// const input = document.querySelector('input')

// input.onkeydown = function() {
//     console.log('rodei')
// }

// Adicionando eventos via JS
// const h1 = document.querySelector('h1')

// h1.addEventListener('click', print)

// function print(){
//     console.log('print')
// }

// Adicionando eventos via JS (outro método)

// const h1 = document.querySelector('h1')

//  h1.addEventListener('click', print)

//  function print(){
//      console.log('print')
//  }

//  h1.addEventListener('click', function() {
//      console.log('outro método')
//  })

// Argumento event
const input = document.querySelector('input')

input.onclick = function(event) {
    console.log(event.currentTarget.value)
}
