const container = document.querySelector('.container')
const main = document.querySelector('.main')
const readButton = document.querySelector('#status')
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

    if (readButton.classList.contains('yes')) {
        newButton.setAttribute('style', 'background: rgb(47, 218, 84) ')
        
    } else {
        newButton.setAttribute('style', 'background: rgb(255 97 76) ')
    }
    newButton.addEventListener('click', () => {
        newButton.classList.toggle('yes')
        if (newButton.classList.contains('yes')) {

            newButton.textContent = 'Read'

            newButton.setAttribute('style', 'background: rgb(47, 218, 84) ')  
            return
            
        }else {
            newButton.textContent = 'Not Read'

            newButton.setAttribute('style', 'background: rgb(255 97 76)')    
            return 
        }
    })

    //CHECK IF INPUT EMPTY
    if (tit !== '' && aut !== '' && pag !== '' && rat <= 10){

        // CREATE CARD FOR BOOK
        const div = document.createElement('div')
        div.textContent = ` ${tit}
                            ${aut}
                            ${pag} pages
                            ${rat} /10`

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

        clearInputs()
        form.setAttribute('style', 'display: none')
        
    } else {
        alert('Please Fill Out The Form Correctly')
        form.setAttribute('style', 'display: flex')
    } 
    
}

function submit() {
    const sub = document.querySelector('#sub')
    sub.addEventListener('click', addBookToLibrary)
}submit()

function checkRead () {
    
        readButton.addEventListener('click', () => {
            readButton.classList.toggle('yes')

            if (readButton.classList.contains('yes')) {
                readButton.value = 'Read'
                
                    readButton.setAttribute('style', 'background: rgb(47, 218, 84) ')  
                return
            }else {
                readButton.value= 'Not Read' 
                readButton.setAttribute('style', 'background: rgb(255 97 76)')  
                return
            }
        })
}checkRead()

function clearInputs() {
    const input = document.querySelectorAll('.input')
    input.forEach(e => {
        e.value = '';
    })
    readButton.value = 'Read?'
    readButton.setAttribute('style', 'background: #f1f1f1')
}

addBook.addEventListener('click', function() {
    form.setAttribute('style', 'display: flex')
})

exit.addEventListener('click', () => {
    form.setAttribute('style', 'display: none')
    clearInputs()
})