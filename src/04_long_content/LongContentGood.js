import React, { useEffect, useRef, useState } from 'react';
import QuestionMarkIcon from '../questionMarkIcon.png';
import '../Tooltip.css';

export const LongContentGood = () => {
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
// Works well for mouse users to click to show or hide the tooltip
// You can click anywhere outside the tooltip content or trigger icon to close the tooltip
// Works well for keyboard users on Space/Enter keydown due to the use of the `tabIndex="0"`
// Works well for screen reader users due to NOT USING the `aria-describedby` and `aria-live` attributes so all the text IS NOT read all at once
// We use the `aria-expanded` attribute to communicate whether the tooltip is hidden or shown
// We use the `role="button"` because this is a clickable button
// You can also dismiss the tooltip by pressing the Escape key

// TODO: Confirm if this is the best approach for long content.
//   Right now I've chosen to remove the `aria-live` and the `aria-describedby`
//   attributes and just allow the screen reader user to navigate to this content
//   when they want to read it. That way they don't get blasted with a couple paragraphs
//   of text being read by them.
