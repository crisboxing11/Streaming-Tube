import React, {useState} from 'react'


const SearchBar = () => {
const [term, setTerm] = useState('')

onInputChange = (event) => {
    setTerm( {term:event.target.value})
}
onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
}
   
    return (
        <div className="search-bar ui segment"> 
            <form className="ui form" onSubmit={this.onFormSubmit} type="search">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" placeholder="Search" value={this.state.term} onChange={this.onInputChange}></input>
                </div>
                </form>
        </div>
    )

}

export default SearchBar
