import React, { useEffect, useRef, useState } from 'react';
import QuestionMarkIcon from '../questionMarkIcon.png';
import '../Tooltip.css';

export const ShortContentClickKeypressGood = () => {
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

  const handleTooltipTriggerKeyDown = e => {
    switch (e.key) {
      case 'Space':
      case ' ':
      case 'Enter':
        e.preventDefault();
        toggleTooltip();
        break;
      case 'Escape':
        setShowTooltip(false);
        break;
      default:
      // do nothing
    }
  };

  return (
    <span className="tooltipTriggerContainer" ref={tooltipTriggerContainerRef}>
      <span
        tabIndex="0"
        role="button"
        onClick={toggleTooltip}
        onKeyDown={handleTooltipTriggerKeyDown}
        aria-expanded={showTooltip}
        aria-describedby="tooltip-content"
      >
        {children}
      </span>
      {showTooltip && (
        <div
          className="tooltipContainer"
          id="tooltip-content"
          role="tooltip"
          aria-live="polite"
        >
          {content}
        </div>
      )}
    </span>
  );
};

// TODO: Should the Escape key event listener be put on the document rather than the trigger button only?
