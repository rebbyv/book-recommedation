var FullBookInfo = (props) => {
  return (
    <div id='details'>
      <div id='details-header'>
        <h5 onClick={() => props.close()}> Close &times;</h5>
        <h1>{props.book.title}</h1>
        <p>By {props.book.authors[0]}</p>
      </div>
      <div id='details-body'>
        <img id='details-img' src={props.book.imageLinks.thumbnail} alt={props.book.title}></img>
        <div id='details-txt'>
          <p>Average rating: {props.book.averageRating} / 5</p>
          <p>Page Count: {props.book.pageCount}</p>
          <p>{props.book.description}a</p>
        </div>
      </div>
    </div>
  )
}

export default FullBookInfo;