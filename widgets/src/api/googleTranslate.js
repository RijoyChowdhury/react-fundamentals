import axios from 'axios';

// this API key needs billing to be used
// this can only be used under localhost:3000
// all other domains are balcklisted
const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

export default axios.create({
  baseURL: 'https://translation.googleapis.com/language/translate',
  params: {
    source: 'en',
    key: API_KEY,
  },
});

export const languages = axios.create({
  baseURL: 'https://translation.googleapis.com/language/translate',
  params: {
    key: API_KEY,
    target: 'en',
  },
});
