let myLibrary = []

function Book(title, author, pages, read) {
    if (!new.target) {
        return "You must use new to call the constructor"
    }
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ", " + author + ", " + pages + " pages, " + read
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    console.log("Books in the library: ", myLibrary )
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
            <button class=remove>Remove</button>`
            
        books.appendChild(info)
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 259, "not read yet")
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
    if (e.target.classList.contains("remove")) {
        const tile = e.target.closest(".book-tile")
        const id = tile.dataset.id

        myLibrary = myLibrary.filter((book) => book.id !== id)
        displayBooks()
    }
})
