import * as React from 'react';
import SearchBar from './components/SearchBar'
import youtube from './components/apis/youtube'

class App extends React.Component {
  state={video: []};

  onTermSubmit = (term) => {
   const responce = youtube
   .get('/search', {
     params: {
        q: term
     }
   })
  }


  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App


