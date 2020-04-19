import NewSearch from './newSearch.jsx';
import Books from './books.jsx';
import Book from './book.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: data,
      modal: false
    };
  }

  componentDidMount() {
    // Google books API https://developers.google.com/books/docs/v1/using#PerformingSearch
    // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes
    // keywords- intitle, inauthor, subject
    // fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes')
    //   .then((data) => {
    //     console.log(data.json())
    //   })
    //   .catch((error) => console.log(error))
  }

  searchBooks(params) {
    this.closeModal()
  }

  closeModal() {
    this.setState({ modal: false })
  }


  render() {
    return (
      <div>
        <div id='header'>
          <h1>Find your next Book</h1>
        </div>
        {this.state.modal ? <NewSearch searchBooks={this.searchBooks.bind(this)} close={this.closeModal.bind(this)}/>: null}
        {this.state.books? <Books books={this.state.books}/>: null}
        {this.state.books ? <div> + New Search </div>: null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))