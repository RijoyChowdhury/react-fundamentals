import { combineReducers } from 'redux';

const songs = [
  { title: 'Smells Like Teen Spirit', duration: '4:05' },
  { title: 'No Scrubs', duration: '3:15' },
  { title: 'New Divide', duration: '4:15' },
  { title: "Sweet Child O' Mine", duration: '3:45' },
];

const songList = () => {
  return songs;
};

const selectedSong = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({ songList, selectedSong });
