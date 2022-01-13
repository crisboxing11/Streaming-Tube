import React, { useState, useEffect } from 'react'
import youtube from '../components/apis/youtube'


const useVideos = (defaultSearchTerm) => {
  // Manages list of videos
  const [videos, setVideos] = useState([]);
  //  This means to only run the function only one time[]
  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search]
}

export default useVideos
