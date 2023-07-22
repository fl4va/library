const container = document.querySelector('.container')
const main = document.querySelector('.main')
const readButton = document.querySelector('.yes')
const addBook = document.querySelector('.addBook')
const form = document.querySelector('.form')
const exit = document.querySelector('.exit')
let myLibrary = []

function Book (title, author, pages, rate) {

    this.t = title,
    this.a = author,
    this.p = pages,
    this.r = rate

}

function addBookToLibrary (e) {

    e.preventDefault()

    // DOM
    const tit = document.querySelector('#title').value
    const aut = document.querySelector('#author').value
    const pag = document.querySelector('#pages').value
    const rat = document.querySelector('#rate').value
    
   
    // CREATE NEW OBJECT (BOOK) & PUSH TO LIBRARY
    const newBook = new Book(tit, aut, pag, rat)
    myLibrary.push(newBook)

    // CHECK READ BUTTON 
    const newButton = document.createElement('button')
    newButton.className = 'yes'
    newButton.textContent = readButton.value
    newButton.addEventListener('click', () => {
        newButton.classList.toggle('yes')
        if (newButton.classList.contains('yes')) {

            newButton.textContent = 'Read'

            newButton.setAttribute('style', 'background: rgb(47, 218, 84) ')  
            return
            
        }else {
            newButton.textContent = 'Not Read'

            newButton.setAttribute('style', 'background: rgb(255, 57, 31)')    
            return 
        }
    })

    //CHECK IF INPUT EMPTY
    if (tit !== '' && aut !== '' && pag !== '' ){

        // CREATE CARD FOR BOOK
        const div = document.createElement('div')
        div.textContent = ` Title  :  ${tit}
                            Author :  ${aut}
                            Pages  :  ${pag}
                            Rating :  ${rat} /10`

        // CREATE DELETE BUTTON
        const del = document.createElement('button')
        del.textContent = 'Delete'
        del.addEventListener('click', () => {
            myLibrary.splice(-1, 1)
            main.removeChild(div)
        })
        
        // APPEND CHILDS
        div.appendChild(newButton);
        div.appendChild(del);
        main.appendChild(div);
    } else  alert('Please Fill Out The Form')
   clearInputs()
   form.setAttribute('style', 'display: none')
}

function subbmit() {
    const sub = document.querySelector('#sub')
    sub.addEventListener('click', addBookToLibrary)
    
}subbmit()

function checkRead () {
    
        readButton.addEventListener('click', () => {
            readButton.classList.toggle('yes')

            if (readButton.classList.contains('yes')) {
                readButton.value = 'Read'
                
                    readButton.setAttribute('style', 'background: rgb(47, 218, 84) ')  
                return
            }else {
                readButton.value= 'Not Read' 
                readButton.setAttribute('style', 'background: rgb(255, 57, 31)')  
                return
            }

        })
}checkRead()

function clearInputs() {
    const input = document.querySelectorAll('.input')
    input.forEach(e => {
        e.value = '';
    })
    readButton.value = 'Read'
}

addBook.addEventListener('click', function() {
    form.setAttribute('style', 'display: flex')
})

exit.addEventListener('click', () => {
    form.setAttribute('style', 'display: none')
})