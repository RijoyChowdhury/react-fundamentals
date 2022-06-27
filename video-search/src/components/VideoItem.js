import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
