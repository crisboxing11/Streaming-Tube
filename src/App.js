import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import youtube from './components/apis/youtube'
import VideoDetail from './components/VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
//  This means to only run the function only one time[]
  useEffect(() => {
    onTermSubmit("Dragon Ball Z Abridged");
  }, [])


}





class App extends React.Component {
  state={videos: [], selectedVideo: null};
  componentDidMount () {
    this.onTermSubmit('Dragon Ball Z Abridged')
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


// App will be redesigned using hooks completely
// New style will be added as well using SASS