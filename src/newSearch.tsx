import React from 'react'; 

export const NewSearch = (props: {searchBooks: Function, setModal: Function}) => {
  const [param, setParam] = React.useState('author');
  const [queryCount, setQueryCount] = React.useState(1);
  const [invalidSearch, setInvalidSearch] = React.useState(false);
  const [author, setAuthor] = React.useState<string | null>(null);
  const [subject, setSubject] = React.useState<string | null>(null);
  const [title, setTitle] = React.useState<string | null>(null);

  const changeEntry = (val: string) => {
    if (param === 'author') {
      setAuthor(val)
    } else if (param === 'title') {
      setTitle(val);
    } else {
      setSubject(val);
    }
  }

  const closeModal = () => {
    setAuthor(null);
    setSubject(null);
    setTitle(null);
    setQueryCount(1);
    setInvalidSearch(false);

    props.setModal(false);
  }
  
  const search = () => {
    if (!author && !title && !subject) {
      setInvalidSearch(true);
    } else {
      props.searchBooks({ author, title, subject });
      closeModal();
    }
  }
  
  return (
    <div id='modal'>
      <h4 onClick={() => closeModal()}> Close &times;</h4>
      <h2>Search by your interests or favorite author</h2>

      {queryCount < 3 ? <h4 onClick={() => setQueryCount(queryCount + 1)}>+ Add a search parameter</h4>: <h4></h4>}
      <Search setParam={setParam} changeEntry={changeEntry} key={1}/>
      {queryCount >= 2 ? <Search setParam={setParam} changeEntry={changeEntry} key={2}/>: null}
      {queryCount >= 3 ? <Search setParam={setParam} changeEntry={changeEntry} key={3}/>: null}

      {invalidSearch ? <p id='error-msg'>* Please enter at least 1 search parameter *</p>:null}
      <button onClick={() => search()}>Lookup Books</button>
    </div>
  ) 
}



var Search = (props: {setParam: Function, changeEntry: Function, key: number}) => {
  return (
    <div className='search'>
      <select onChange={(e) => props.setParam(e.target.value)}>
          <option value='author'>Search by Author</option>
          <option value='title'>Search by Title</option>
          <option value='subject'>Search by Subject</option>
        </select>
        <input type='text' onChange={(e) => props.changeEntry(e.target.value)}></input>
    </div>
  )
}