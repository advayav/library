let myLibrary = []

class Book{
    constructor(title, author, pages, read) {
        if (!new.target) {
            return "You must use new to call the constructor"
        }
            this._id = crypto.randomUUID()
            this._title = title
            this._author = author
            this._pages = pages
            this._read = read
        //     this.info = function() {
        //         return title + ", " + author + ", " + pages + " pages, " + read
        // }
    }

    get id() {
        return this._id
    }

    get title() {
        return this._title
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }

    get read() {
        return this._read
    }

    get info() {
        return this._title + ", " + this._author + ", " + this._pages + " pages, " + this._read
    }

    swap() {
        if (this._read.startsWith("n") || this._read.startsWith("N")) {
            this._read = 'Read'
        } else {
            this._read = 'Not read yet'
        }
    }
    
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

function displayBooks() {
    const books = document.querySelector(".books")
    books.innerHTML = ''

    myLibrary.forEach(book => {
        const info = document.createElement('div')
        info.className = 'book-tile'
        info.dataset.id = book.id

        info.innerHTML = `
            <p class="title">${book.title}</p>
            <p class="author">Author: ${book.author}</p>
            <p class="pages">Pages: ${book.pages}</p>
            <p class="read">Status: ${book.read}</p>
            <button class=remove>Remove</button>
            <button class=swap-status>Change read status</button>`
            
        books.appendChild(info)
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 259, "Not read yet")
displayBooks()


const newBook = document.querySelector(".new-book")
const dialog = document.getElementById("dialog")
const submit = dialog.querySelector(".submit")
const form = dialog.querySelector(".newbook-form")

newBook.addEventListener("click", () => {
    dialog.showModal()
})

submit.addEventListener("click", (e) => {
    e.preventDefault()
    const title = document.getElementById("book-title").value
    const author = document.getElementById("book-author").value
    const pages = document.getElementById("book-pages").value
    const status = document.getElementById("book-status").value
    
    form.reset()
    dialog.close()

    addBookToLibrary(title, author, pages, status)
    displayBooks()
})

// Event delegation so that I don't need to add an event listener separately for each remove button in the tile

const books = document.querySelector(".books")

books.addEventListener("click", (e) => {
    const tile = e.target.closest(".book-tile")
    const id = tile.dataset.id
    
    if (e.target.classList.contains("remove")) {
        myLibrary = myLibrary.filter((book) => book.id !== id)
        displayBooks()
        return;
    }

    if (e.target.classList.contains("swap-status")) {
        const book = myLibrary.find((b) => b.id === id)
        book.swap()
        displayBooks()

        // if (book) {
        //     book.swap()
        // } else {
        //     console.log("Book not found")
        // }        
    }
})