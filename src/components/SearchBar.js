import React from 'react'
import "../Style/SearchBar.css"

class SearchBar extends React.Component {
state = {term: 'FUccccck'};

onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
}


    
    render () {
    return (
        <div className="search-bar ui segment"> 
            <form className="ui form" onSubmit={this.onFormSubmit} type="search">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" placeHolder="Search" value={this.state.term} onChange={e => this.setState({term: e.target.value})}></input>
                </div>
                </form>
        </div>
    )
    }
}

export default SearchBar
