class NewSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      subject: null,
      title: null,
      queryCount: 1
    }
  }

  addSearchParam() {
    var count = this.state.queryCount + 1;
    this.setState({ queryCount: count })
  }

  closeModal() {
    this.setState({
      author: null,
      subject: null,
      title: null,
      queryCount: 1
    })
  }
  
  render() {
    return (
      <div id='modal'>
        <h4 onClick={() => this.closeModal()}> Close &times;</h4>
        <h2>Search by your interests or favorite author</h2>

        <Search/>
        {this.state.queryCount === 2 || this.state.queryCount === 3 ? <Search/>: null}
        {this.state.queryCount === 3 ? <Search/>: null}
        {this.state.queryCount < 3 ? <h4 onClick={() => this.addSearchParam()}>+ Add a search parameter</h4>: null}
  
        <button>Lookup Books</button>
      </div>
    )
  }
}


var Search = (props) => {
  return (
    <div className='search'>
      <select>
          <option>Search by Author</option>
          <option>Search by Title</option>
          <option>Search by Subject</option>
        </select>
        <input type='text'></input>
    </div>
  )
}

export default NewSearch;