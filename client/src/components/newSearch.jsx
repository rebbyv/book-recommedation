class NewSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      param: 'author',
      author: null,
      subject: null,
      title: null,
      queryCount: 1
    }
    this.changeParam = this.changeParam.bind(this);
    this.changeEntry = this.changeEntry.bind(this);
  }

  addSearchParam() {
    this.setState({ queryCount: ++this.state.queryCount })
  }

  changeParam(e) {
    this.setState({ param: e.target.value })
  }

  changeEntry(e) {
    if (this.state.param === 'author') {
      this.setState({ author: e.target.value })
    } else if (this.state.param === 'title') {
      this.setState({ title: e.target.value })
    } else {
      this.setState({ subject: e.target.value })
    }
  }

  closeModal() {
    this.setState({
      author: null,
      subject: null,
      title: null,
      queryCount: 1
    })
    this.props.close();
  }
  
  search() {
    this.props.searchBooks(this.state);
    this.closeModal();
  }
  

  render() {
    return (
      <div id='modal'>
        <h4 onClick={() => this.closeModal()}> Close &times;</h4>
        <h2>Search by your interests or favorite author</h2>

        <Search changeParam={this.changeParam} changeEntry={this.changeEntry}/>
        {this.state.queryCount >= 2 ? <Search changeParam={this.changeParam} changeEntry={this.changeEntry}/>: null}
        {this.state.queryCount >= 3 ? <Search changeParam={this.changeParam} changeEntry={this.changeEntry}/>: null}
        {this.state.queryCount < 3 ? <h4 onClick={() => this.addSearchParam()}>+ Add a search parameter</h4>: null}
  
        <button onClick={() => this.search()}>Lookup Books</button>
      </div>
    ) 
  }
}


var Search = (props) => {
  return (
    <div className='search'>
      <select onChange={(e) => props.changeParam(e)}>
          <option value='author'>Search by Author</option>
          <option value='title'>Search by Title</option>
          <option value='subject'>Search by Subject</option>
        </select>
        <input type='text' onChange={(e) => props.changeEntry(e)}></input>
    </div>
  )
}

export default NewSearch;