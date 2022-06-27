import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// Class component with connect()
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectMySong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// gets called every time we modify state object
const mapStateToProps = (state) => {
  // console.log(state);
  // return a prop object
  return { songs: state.songList };
};

// connect is actually a react component
// second argument takes actionCreators and creates
// a wrapper funtion named by the object key
// it incudes the dispatch function as well
export default connect(mapStateToProps, { selectMySong: selectSong })(SongList);
