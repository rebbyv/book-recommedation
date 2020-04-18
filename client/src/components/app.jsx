class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('http://openlibrary.org/subjects/pride.json')
      .then((data) => {
        console.log(data.json())
        // api to get book cover img
        //http://covers.openlibrary.org/b/id/967869-M.jpg 
      })
      .catch((error) => console.log(error))
  }


  render() {
    return (
      <div>
        <h1>Hello!!! This is react!!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))