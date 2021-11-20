import * as React from 'react';
import SearchBar from './components/SearchBar'
import youtube from './components/apis/youtube'

class App extends React.Component {
  state={videos: []};

  onTermSubmit = async (term) => {
   const response = await youtube
   .get('/search', {
     params: {
        q: term
     }
   });
   this.setState({videos: response.data.items})
  }


  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        I have added {this.state.videos.length} videos
      </div>
    );
  }
}

export default App


