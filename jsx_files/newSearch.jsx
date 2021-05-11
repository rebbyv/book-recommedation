// import { useState } from "react";

// var NewSearch = (props) => {
//   const [param, setParam] = useState('author');
//   const [queryCount, setQueryCount] = useState(1);

//   return (
//     <div id='modal'>
//       <h4 onClick={() => this.closeModal()}> Close &times;</h4>
//       <h2>Search by your interests or favorite author</h2>

//       {queryCount < 3 ? <h4 onClick={() => setQueryCount(queryCount + 1)}>+ Add a search parameter</h4>: <h4></h4>}
//       <Search changeParam={this.changeParam} changeEntry={this.changeEntry} key={1}/>
//       {queryCount >= 2 ? <Search changeParam={this.changeParam} changeEntry={this.changeEntry}/>: null}
//       {queryCount >= 3 ? <Search changeParam={this.changeParam} changeEntry={this.changeEntry}/>: null}

//       {this.state.invalidSearch ? <p id='error-msg'>* Please enter at least 1 search parameter *</p>: null}
//       <button onClick={() => this.search()}>Lookup Books</button>
//     </div>
//   ) 
// }

class NewSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      param: 'author',
      author: null,
      subject: null,
      title: null,
      queryCount: 1,
      invalidSearch: false
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
      queryCount: 1,
      invalidSearch: false
    })
    this.props.close();
  }
  
  search() {
    if (!this.state.author && !this.state.title && !this.state.subject) {
      this.setState({ invalidSearch: true })
    } else {
      this.props.searchBooks(this.state);
      this.closeModal();
    }
  }
  

  render() {
    return (
      <div id='modal'>
        <h4 onClick={() => this.closeModal()}> Close &times;</h4>
        <h2>Search by your interests or favorite author</h2>

        {this.state.queryCount < 3 ? <h4 onClick={() => this.addSearchParam()}>+ Add a search parameter</h4>: <h4></h4>}
        <Search changeParam={this.changeParam} changeEntry={this.changeEntry} key={1}/>
        {this.state.queryCount >= 2 ? <Search changeParam={this.changeParam} changeEntry={this.changeEntry}/>: null}
        {this.state.queryCount >= 3 ? <Search changeParam={this.changeParam} changeEntry={this.changeEntry}/>: null}
  
        {this.state.invalidSearch ? <p id='error-msg'>* Please enter at least 1 search parameter *</p>:null}
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