// wikipedia api documentation
// https://en.wikipedia.org/w/api.php
// api that will be used here
// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=<searchterm>

import axios from 'axios';

export default axios.create({
  baseURL: 'https://en.wikipedia.org/w',
  params: {
    action: 'query',
    list: 'search',
    format: 'json',
    origin: '*',
  },
});

export const articleUrl = 'https://en.wikipedia.org';
