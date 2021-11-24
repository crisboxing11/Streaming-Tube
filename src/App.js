import * as React from 'react';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import youtube from './components/apis/youtube'
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  state={videos: [], selectedVideo: null};

  componentDidMount () {
    this.onTermSubmit('Super Broly')
  }

  onTermSubmit = async (term) => {
   const response = await youtube
   .get('/search', {
     params: {
        q: term
     }
   });
   this.setState({
     videos: response.data.items,
     selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
   this.setState({ selectedVideo: video })
  }
  
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList videos={this.state.videos} onSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App


