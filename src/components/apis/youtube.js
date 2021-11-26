import axios from 'axios';




const KEY = 'AIzaSyCv-Ju_3Jb2UAHqTlK_zrgQCEoLw0BWSkU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})


//remember the key