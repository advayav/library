const myLibrary = []

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

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 259, "not read yet")
// console.log(theHobbit.info())

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
        info.innerHTML = `
            <p class="title">${book.title}</p>
            <p class="author">Author: ${book.author}</p>
            <p class="pages">Pages: ${book.pages}</p>
            <p class="read">Status: ${book.read}</p>`
        
        books.appendChild(info)
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 259, "not read yet")
displayBooks()