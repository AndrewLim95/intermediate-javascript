let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + author + pages + read;
    }
    console.log(this.info);
}

function addBookToLibrary() {
    var btitle = prompt("Title of book?");
    var bauthor = prompt("Name of author?");
    var bpages = prompt("Number of pages?");
    var bread = prompt("Read it?");
    const newBook = new Book(bname, bauthor, bpages, bread)
}
