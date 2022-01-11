import React, { useState } from 'react'
const SearchBar = (onSubmit) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
      setTerm(event.target.value);
    };
    const onFormSubmit = (event) => {
      event.preventDefault();
      onSubmit(term);
    };
     
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={e => onFormSubmit(e)} type="search">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search"
              value={term}
              onChange={e => onInputChange(e)}
            ></input>
          </div>
        </form>
      </div>
    );

}

// class SearchBar extends React.Component {
// state = {term: ''};

// onInputChange = (event) => {
//     this.setState( {term:event.target.value})
// }
// onFormSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.term)
// }
//     render () {
//     return (
//         <div className="search-bar ui segment"> 
//             <form className="ui form" onSubmit={this.onFormSubmit} type="search">
//                 <div className="field">
//                     <label>Video Search</label>
//                     <input type="text" placeholder="Search" value={this.state.term} onChange={this.onInputChange}></input>
//                 </div>
//                 </form>
//         </div>
//     )
//     }
// }

export default SearchBar
