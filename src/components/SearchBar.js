import React, { useState } from 'react'
const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('');

    
    const onFormSubmit = (event) => {
      event.preventDefault();
      onSubmit(term);
    };
     
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onFormSubmit} type="search">
          <div className="field">
            <label>Search Videos</label>
            <input
              type="text"
              placeholder="Search"
              value={term}
              onChange={event => setTerm(event.target.value)}
            ></input>
          </div>
        </form>
      </div>
    );

}



export default SearchBar
