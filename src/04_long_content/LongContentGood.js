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

// IMPORTANT DISCLAIMER:
// This approach happens to work because the tooltip content is rendered as the next
// element in the DOM after the tooltip trigger button. But if you used something like
// a React portal and/or rendered into a tooltip container element at the top or bottom
// of the DOM, the user would have to navigate around the page with the screen reader
// for awhile until they find the tooltip content. So a better approach of using a modal
// is outlined below.

// ALTERNATIVE APPROACH:
// One alternative to just removing the `aria-describedby` and `aria-live` attributes
// would be to do that and also turn the tooltip content into a modal with all the
// accompanying modal markup. You'd also need to include a Close button in the modal
// since the long content on its own doesn't have anything focusable or interactive in it.
