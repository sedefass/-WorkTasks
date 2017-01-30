//adding a method to the Array prototype, that checks if it contains an object
Array.prototype.contains = function (obj) {
	var i = this.length;
	while (i--) {
		if (this[i] === obj) {
			return true;
		}
	}
	return false;
};

//declaration of class Library
var libraryCount = 0;
var Library = (function () {
	libraryCount++; //static field to keep the track of the created objects. In every created instance of this class it is the same number and it is updated
	function Library() {
		this.libraryCount = testV;
		var testValue = 1; //hidden for outside the class
		this.value = testValue; //not hidden for the outside world
		this._books = [];
		this._categories = [];
	}

	//adding some methods to the class
	Library.prototype = {

		addBook: function (book) {
			if (book) {
				this._books.push(book);
			}

			if (Array.isArray(book.categories)) {
				for (var i = 0, len = book.categories.length; i < len; i++) {
					if (!this._categories.contains(book.categories[i])) {
						this._categories.push(book.categories[i]);
					}
				}
			}
		},

		listBooks: function () {
			return this._books;
		},

		listCategories: function () {
			return this._categories;
		}
	};

	return Library;
} ());

//Declaration of secondary class book
function Book(title, author, categories, isbn) {
	//some validations needed in here

	this.title = title;
	this.author = author;
	this.categories = categories;
	this.isbn = isbn;
}

//Testing the system
//Creating 3 books
var testBook01 = new Book('Tittle01', 'Author01', ['Drama', 'Triller'], '01-1234567');
// console.log(testBook01);
// console.log(testBook01 instanceof Book);
var testBook02 = new Book('Tittle02', 'Author02', ['Humor', 'Triller'], '02-1234567');
//console.log(testBook02);
var testBook03 = new Book('Tittle03', 'Author03', ['Drama', 'Humor'], '03-1234567');
//console.log(testBook03);

//creating the test library
var libraryTest = new Library();
//console.log(libraryTest);

//adding the 3 test books to the library
libraryTest.addBook(testBook01);
libraryTest.addBook(testBook02);
libraryTest.addBook(testBook03);

//testing the methods of the library
libraryTest.listBooks();
libraryTest.listCategories();

var libraryTest2 = new Library();
libraryTest;
libraryTest2;