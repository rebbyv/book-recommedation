import NewSearch from '../src/newSearch.jsx';
import Books from '../src/books.js';
import Book from '../src/book.js';
import FullBookInfo from '../src/fullBookInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      modal: true,
      book: null
    };
  }
  
  searchBooks(params) {
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
      this.setState({
        books: data.items,
        modal: false
      })
    })
    .catch((error) => console.log(error))
  }

  closeModal() {
    this.setState({ modal: false })
  }

  openModal() {
    this.setState({ modal: true })
  }

  bookClick(book) {
    this.setState({ book: book })
  }

  closeDetails() {
    this.setState({ book: null })
  }


  render() {
    return (
      <div>
        <div id='header'>
          <h1>Find your next Book</h1>
        </div>
        {this.state.books ? <div id='new-search' onClick={() => this.openModal()}> + New Search </div>: null}
        {this.state.modal ? <NewSearch searchBooks={this.searchBooks.bind(this)} close={this.closeModal.bind(this)}/>: null}
        {this.state.books ? <Books books={this.state.books} bookClick={this.bookClick.bind(this)}/>: null}
        {this.state.book ? <FullBookInfo book={this.state.books[this.state.book].volumeInfo} close={this.closeDetails.bind(this)}/>: null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))