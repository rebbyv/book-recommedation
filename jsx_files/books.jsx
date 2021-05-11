import Book from '../src/book.jsx';

var Books = (props) => {
  return (
    <div id='books'>
      {props.books.map((book, index) => <Book book={book} key={index} index={index} bookClick={props.bookClick}/>)}
    </div>
  )
}

export default Books;