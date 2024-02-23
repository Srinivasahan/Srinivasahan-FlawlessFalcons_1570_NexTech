import React from 'react';
import './LectureList.css'; // Import CSS file for styling

const LectureList = ({ videos }) => {
  const handleClick = (video) => {
    // Handle click event for the selected video, e.g., play the video
    console.log(`Clicked video: ${video.title}`);
  };

  return (
    <div className="video-list-container">
      <h2>Videos</h2>
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-card" onClick={() => handleClick(video)}>
            <img src={video.thumbnail} alt={video.title} />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LectureList;