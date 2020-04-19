import NewSearch from './newSearch.jsx';
import Books from './books.jsx';
import Book from './book.jsx';
import FullBookInfo from './fullBookInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      modal: true
    };
  }
  
  searchBooks(params) {
    var url = 'https://www.googleapis.com/books/v1/volumes?q=';
    if (params.title) {
      if (url[url.length - 1] === '=') {
        url += `intitle:${params.title}`;
      } else {
        url += `+intitle:${params.title}`;
      }
    } 
    if (params.author) {
      if (url[url.length - 1] === '=') {
        url += `inauthor:${params.author}`;
      } else {
        url += `+inauthor:${params.author}`;
      }    
    }
    if (params.subject) {
      if (url[url.length - 1] === '=') {
        url += `subject:${params.subject}`;
      } else {
        url += `+subject:${params.subject}`;
      }    
    }
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


  render() {
    return (
      <div>
        <div id='header'>
          <h1>Find your next Book</h1>
        </div>
        {this.state.books ? <div id='new-search' onClick={() => this.openModal()}> + New Search </div>: null}
        {this.state.modal ? <NewSearch searchBooks={this.searchBooks.bind(this)} close={this.closeModal.bind(this)}/>: null}
        {this.state.books? <Books books={this.state.books}/>: null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))