
const books = [
    {title: 'A tale of Two Cities', author: 'Charles Dickens'},
    {title: 'War and Peace', author: 'Leo Tolstoy'},
    {title: 'Count of Monte Cristo', author: 'Alexandre Dumas'},
    {title: "The Federalist Papers", author: 'Alexander Hamilton', featured: true},
    {title: "The Art of War", author: 'Sun Tzu', featured: true}
]
let h = React.createElement;

let BookRow = (book) => 
    h('li', null, book.title + ' by ' + book.author)

let BookList = (props) => 
    h('ul', { className: 'book-list' },
        props.books.map(book => 
            h(BookRow, book)
        )
    )

let container = h('div', null, [
    h('h1', null, 'Bookstore'),
    h(BookList, { books:books}),
    h('h2', null, 'Featured'),
    h(BookList, { books: books.filter(book => book.featured)}),
    h('footer', null, 'Copyright 2018'),
])

ReactDOM.render(
    container, 
    document.querySelector('.react-root')
);