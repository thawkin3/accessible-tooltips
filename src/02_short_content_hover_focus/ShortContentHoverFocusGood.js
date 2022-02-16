import React, { useEffect, useState } from 'react';
import QuestionMarkIcon from '../questionMarkIcon.png';
import '../Tooltip.css';

export const ShortContentHoverFocusGood = () => {
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

  return (
    <span className="tooltipTriggerContainer">
      <span
        tabIndex="0"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-describedby="tooltip-content"
      >
        {children}
      </span>
      {showTooltip && (
        <div className="tooltipContainer" id="tooltip-content" role="tooltip">
          {content}
        </div>
      )}
    </span>
  );
};

// NOTES:
// Works well for mouse users on mouseenter and mouseleave
// Works well for keyboard users on focus and blur due to the use of the `tabIndex="0"`
// Works well for screen reader users due to the use of the `aria-describedby` attribute
// No need to use the `aria-expanded` attribute since it will always be open when the screen reader gets to the trigger icon
// No need to use the `role="button"` because this is not actually a clickable button
// You can also dismiss the tooltip by pressing the Escape key
