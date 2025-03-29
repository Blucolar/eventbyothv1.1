import React from 'react'

const ReadMoreLess = ({ text, wordLimit }) => {
    const words = text.split(" ");
    const shortText = words.slice(0, wordLimit).join(" ") + "...";
    const [isExpanded, setIsExpanded] = React.useState(false);
  
    return (
      <div className="transition-all">
        <span>{isExpanded ? text : shortText}</span>
        <button className=" text-primary text-base font-bold " onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    );
  };

export default ReadMoreLess;