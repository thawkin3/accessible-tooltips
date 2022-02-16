import React, { useState } from 'react';
import QuestionMarkIcon from '../questionMarkIcon.png';
import './Tooltip.css';

export const ShortContentHoverFocusBad = () => {
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

  return (
    <span className="tooltipTriggerContainer">
      <span
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </span>
      {showTooltip && <div className="tooltipContainer">{content}</div>}
    </span>
  );
};

// NOTES:
// Works well for mouse users to hover
// Does not work for keyboard users because you can't focus the icon
// Does not work for screen reader users because the tooltip content is not read
