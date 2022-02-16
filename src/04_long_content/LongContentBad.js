import React, { useEffect, useRef, useState } from 'react';
import QuestionMarkIcon from '../questionMarkIcon.png';
import '../Tooltip.css';

export const LongContentBad = () => {
  const tooltipContent = (
    <>
      <p>
        More info here. It's pretty lengthy text. In fact, it's a whole wall of
        text. So much that we could probably split this up into a couple
        paragraphs.
      </p>
      <p>
        It's a lot to take in! Wouldn't it be awful if the screen reader just
        read this all to you at once? That could be pretty overwhelming. No one
        wants that.
      </p>
    </>
  );

  return (
    <div>
      Here's a sentence that may need some clarification.{' '}
      <Tooltip content={tooltipContent}>
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

  useEffect(() => {
    const closeTooltipOnEscapeKeyDown = e => {
      if (e.key === 'Escape') {
        setShowTooltip(false);
      }
    };

    document.addEventListener('keydown', closeTooltipOnEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', closeTooltipOnEscapeKeyDown);
    };
  });

  const toggleTooltip = () => setShowTooltip(showTooltip => !showTooltip);

  const handleTooltipTriggerKeyDown = e => {
    switch (e.key) {
      case 'Space':
      case ' ':
      case 'Enter':
        e.preventDefault();
        toggleTooltip();
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
