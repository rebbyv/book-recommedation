import Book from './book.jsx';

var Books = (props) => {
  return (
    <div id='books'>
      {props.books.map((book, index) => {
        return <Book book={book} key={index}/>
      })}
    </div>
  )
}

export default Books;