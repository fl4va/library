const main = document.querySelector('#main')
const myLibrary = []

class Book {

    constructor(name, author, numPages, checkbox, rate) {
        this.n = name,
        this.a = author,
        this.np = numPages,
        this.s = checkbox,
        this.r = rate;
    }

    toggleCheckBox() {       
      const checkbox = document.querySelector('#checkbox');
        this.toggleCheckBox.checked = !this.toggleCheckBox.checked
        if (this.toggleCheckBox.checked) {
            return `Yes`
        } else {
            return `No`
        }
    }

    theFinalBook () {
        return `
        The Name : ${this.n}
        The Author : ${this.a}
        Number of Pages : ${this.np}
        Read : ${this.toggleCheckBox()}
        Rate : ${this.r} / 10`
    };
}


function createBook () { 

    const name = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const numPages = document.querySelector('#numPages').value;
    const checkbox = document.querySelector('#checkbox');
    const rate = document.querySelector('#rate').value;

    // check if book exists

    const bookExist = myLibrary.find((book) => {
        return book.n === name  && book.a === author 
    })

    // add to myLibrary

    if ( bookExist ) {
        // const msg = document.querySelector('legend')
        // msg.textContent = 'this book is already exists'
        alert('this book is already exists in your library')
        return '';
    }

    const book = new Book(name, author, numPages, checkbox, rate)
    myLibrary.push(book)

    const bindFun = book.theFinalBook.bind(book)
    return bindFun()
    
}

const sub = document.querySelector('#button')   
sub.addEventListener('click', () => {
    
    const name = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const checkbox = document.querySelector('#checkbox');
    
    const remove = document.createElement('button')
    const changeStatus = document.createElement('input')

    // validation check

    if (name.trim() === '' || author.trim() === '') {
        alert('Please enter the book name and author.');
        return;
    }
    

    let content = createBook()
    if (content != '') {
        
        const div = document.createElement('div')
        div.innerHTML = content

        // remove button
        remove.textContent = 'Remove'
        remove.addEventListener('click', () => {
        main.removeChild(div)
        removeBookFromLibrary(name, author)
        })

        // change read status

        changeStatus.setAttribute('type', 'checkbox')
        changeStatus.textContent = 'Have You Read it?'
        div.appendChild(changeStatus)
        
        
        div.appendChild(remove)
        main.appendChild(div)
        console.log(myLibrary)

        fyrma.setAttribute('style', 'display: none')
        bytina.setAttribute('style', 'display: grid')
        remove.setAttribute('style', 'display: flex')
        clearInputs()
    }
})



function removeBookFromLibrary(name, author) {
    const index = myLibrary.findIndex((book) => {
      return book.n === name && book.a === author;
    });
  
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
  }

const fyrma = document.querySelector('#fyrma')
const bytina = document.querySelector('#bytina')
bytina.addEventListener('click', () => {
    fyrma.setAttribute('style', 'display: grid')
    bytina.setAttribute('style', 'display: none')
})


function clearInputs() {
    const input = document.querySelectorAll('.input')
    input.forEach((e) => {
        e.value = '';
    })
}

