import NewSearch from './newSearch.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      modal: true
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


  render() {
    return (
      <div>
        <div id='header'>
          <h1>Find your next Book</h1>
        </div>
        {this.state.modal ? <NewSearch />: null}

        {this.state.books ? <div> + New Search </div>: null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))