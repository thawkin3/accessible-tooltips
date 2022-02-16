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
    const clickInteractionKeys = ['Space', ' ', 'Enter'];

    if (clickInteractionKeys.includes(e.key)) {
      e.preventDefault();
      toggleTooltip();
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

// NOTES:
// Works well for mouse users to click to show or hide the tooltip
// You can click anywhere outside the tooltip content or trigger icon to close the tooltip
// Works well for keyboard users on Space/Enter keydown due to the use of the `tabIndex="0"`
// Works well for screen reader users due to the use of the `aria-describedby` and `aria-live` attributes
// We use the `aria-expanded` attribute to communicate whether the tooltip is hidden or shown
// We use the `role="button"` because this is a clickable button
// You can also dismiss the tooltip by pressing the Escape key
