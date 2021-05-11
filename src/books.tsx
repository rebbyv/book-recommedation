import { Book } from './book';

type BookProps = {
  volumeInfo: {
    title: string,
    authors: string[],
    imageLinks?: {
      thumbnail?: string
    } 
  },
}

export const Books = (props: {books: BookProps[], setBook: Function}) => {
  return (
    <div id='books'>
      {props.books.map((book: BookProps, index: number) => <Book book={book} key={index} index={index} setBook={props.setBook}/>)}
    </div>
  )
}