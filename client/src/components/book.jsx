var Book = (props) => {
  return ( 
    <div className='book'>
      <img alt={props.volumeInfo.title} src={props.imageLinks.thumbnail}></img>
      <h3>{props.volumeInfo.title}</h3>
      <p>{props.volumeInfo.description}</p>
      <p>By {props.volumeInfo.authors[0]}</p>
    </div>
  )
}

export default Book;