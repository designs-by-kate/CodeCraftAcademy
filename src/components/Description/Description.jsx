import React from 'react';
import './description.css';

const Description = ({ selectedModule }) => {
  // Define descriptions for each language
  const descriptions = {
    HTML: "HTML (Hypertext Markup Language) is the standard markup language used to create and design web pages...",
    CSS: "CSS (Cascading Style Sheets) is a style sheet language used to define the presentation and layout of HTML documents...",
    JavaScript: "JavaScript (JS) is a versatile programming language commonly used for adding interactivity and dynamic behavior to web pages..."
  };

  return (
    <div>
      <h1>{selectedModule}</h1>
      <p>{descriptions[selectedModule]}</p>
    </div>
  );
}

export default Description;
