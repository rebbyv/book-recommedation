import React from 'react'; 
import ReactDOM from 'react-dom';

import { Books } from './books';
import { NewSearch } from './newSearch';
import { FullBookInfo } from './fullBookInfo';

type ParamsType = {
  title: string,
  author: string,
  subject: string
};
type BookProps = {
  volumeInfo: {
    title: string,
    authors: string[],
    imageLinks?: {
      thumbnail?: string
    },
    averageRating: number,
    pageCount: number,
    description: string
  },
};

export const App = () => {
  const [books, setBooks] = React.useState<BookProps[] | null>(null);
  const [modal, setModal] = React.useState(true);
  const [book, setBook] = React.useState<number | null>(null);

  const searchBooks = (params: ParamsType) => {
    var url = 'https://www.googleapis.com/books/v1/volumes?q=';
    if (params.title) {
      url += (url[url.length - 1] === '=') ? `intitle:${params.title}`: `+intitle:${params.title}`;
    } 
    if (params.author) {
      url += (url[url.length - 1] === '=') ? `inauthor:${params.author}`: `+inauthor:${params.author}`;    
    }
    if (params.subject) {
      url += (url[url.length - 1] === '=') ? `subject:${params.subject}`: `+subject:${params.subject}`;   
    }
    url += '&maxResults=40'
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setBooks(data.items)
      setModal(false);
    })
    .catch((error) => console.log(error))
  }
  
  
  
  return (
    <div>
      <div id='header'>
        <h1>Find your next Book</h1>
      </div>
      {books && (
        <>
          <div id='new-search' onClick={() => setModal(true)}> + New Search </div>
          <Books books={books} setBook={setBook}/>
        </>
      )}

      {modal && (
        <NewSearch searchBooks={searchBooks} setModal={setModal}/>
      )}

      {books && book && (
        <FullBookInfo book={books[book].volumeInfo} setBook={setBook}/>
      )}

    </div>)
  
}

ReactDOM.render(<App />, document.getElementById('app'))