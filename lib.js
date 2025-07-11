function Book(title, author, pages, read) {
    if (!new.target) {
        return "You must use new to call the constructor"
    }

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ", " + author + ", " + pages + " pages, " + read
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 259, "not read yet")
console.log(theHobbit.info())
