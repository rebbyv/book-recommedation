var Book = (props) => {
  return ( 
    <div className='book' onClick={() => props.bookClick(props.index)}>
      <img alt={props.book.volumeInfo.title} src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail: null}></img>
      <h3>{props.book.volumeInfo.title}</h3>
      <p>By {props.book.volumeInfo.authors[0]}</p>
    </div>
  )
}

export default Book;