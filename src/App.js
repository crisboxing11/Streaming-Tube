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
  }, []);

 const onTermSubmit = async (term) => {
   const response = await youtube
   .get('/search', {
     params: {
        q: term
     }
   });
   setVideos (response.data.items);
   setSelectedVideo(response.data.items[0])
  };

  return (
      <div className="ui container">
        <SearchBar onSubmit={onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList videos={videos} onSelect={setSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App


