import axios from 'axios';
const API_KEY = 'AIzaSyDmmX5SStTO9K-K_-RYRICyzLH_l-hZa1c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: API_KEY,
  },
});
