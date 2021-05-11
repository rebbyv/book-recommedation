type BookProps = {
  volumeInfo: {
    title: string,
    authors: string[],
    imageLinks?: {
      thumbnail?: string
    } 
  },
}// "open": "google-chrome file:///home/rebbyv/Projects/book-recommedation/dist/index.html",

export const Book = (props: { book: BookProps, index: number, setBook: Function }) => {
  return ( 
    <div className='book' onClick={() => props.setBook(props.index)}>
      {props.book.volumeInfo.imageLinks && (
        <img alt={props.book.volumeInfo.title} src={props.book.volumeInfo.imageLinks.thumbnail}></img>
      )}
      <h3>{props.book.volumeInfo.title}</h3>
      <p>By {props.book.volumeInfo.authors?.length > 0 ? props.book.volumeInfo.authors[0] : 'Author Unknown'}</p>
    </div>
  )
}