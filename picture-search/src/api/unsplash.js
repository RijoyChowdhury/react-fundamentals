import axios from 'axios';

// create a customised copy of axios
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Ghqwr9qQzQSJkCrQQTJkxNDufOpWb5F0O1GjGNo4svw',
  },
});
