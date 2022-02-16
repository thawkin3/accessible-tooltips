import React, { useEffect, useRef, useState } from 'react';
import QuestionMarkIcon from '../questionMarkIcon.png';
import '../Tooltip.css';

export const ShortContentClickKeypressBad = () => {
  return (
    <div>
      Here's a sentence that may need some clarification.{' '}
      <Tooltip content="More info here">
        <img src={QuestionMarkIcon} height="12" width="12" alt="Help" />
      </Tooltip>
    </div>
  );
};

const Tooltip = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTriggerContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (!tooltipTriggerContainerRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setShowTooltip]);

  const toggleTooltip = () => setShowTooltip(showTooltip => !showTooltip);

  return (
    <span className="tooltipTriggerContainer" ref={tooltipTriggerContainerRef}>
      <span onClick={toggleTooltip}>{children}</span>
      {showTooltip && <div className="tooltipContainer">{content}</div>}
    </span>
  );
};

// NOTES:
// Works well for mouse users to click
// Does not work for keyboard users because you can't focus the icon
// Does not work for screen reader users because the tooltip content is not read
