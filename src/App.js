import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  // Manages the current selected video
  const [selectedVideo, setSelectedVideo] = useState(null);

 const [videos, search] = useVideos('Dragon Ball Z Abridged')
  //  This means to only run the function only one time[]
 
    // setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
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


