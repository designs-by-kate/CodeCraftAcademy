
import React from "react";
import PropTypes from "prop-types";

const TutorialVideo = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="TutorialVideo"
        />
    </div>
);

TutorialVideo.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default TutorialVideo;

import React from 'react'
import './Tutorial.css'
const Tutorial = () => {
  return (
    <div>
      
    </div>
  )
}

export default Tutorial

