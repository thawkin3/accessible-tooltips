import React, { useRef, useState } from 'react';
import FocusTrap from 'focus-trap-react';
import QuestionMarkIcon from '../questionMarkIcon.png';
import '../Tooltip.css';

export const InteractiveContentGood = () => {
  const tooltipContent = (
    <>
      <p>
        More info here. It's pretty lengthy text. In fact, it's a whole wall of
        text. So much that we could probably split this up into a couple
        paragraphs.
      </p>
      <p>
        This tooltip has even more content for you! You can click the link below
        to learn more.
      </p>
      <p>
        <a
          className="button outline buttonLink"
          href="http://tylerhawkins.info/accessible-tooltips/build/"
        >
          Learn More About Tooltips
        </a>
      </p>
    </>
  );

  return (
    <div>
      Here's a sentence that may need some clarification.{' '}
      <Tooltip content={tooltipContent} lightBackground isModal>
        <img src={QuestionMarkIcon} height="12" width="12" alt="Help" />
      </Tooltip>
    </div>
  );
};

const Tooltip = ({
  children,
  content,
  isModal = false,
  lightBackground = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTriggerButton = useRef(null);

  const closeTooltipModalOnEscapeKeyDown = e => {
    if (e.key === 'Escape') {
      setShowTooltip(false);
      tooltipTriggerButton.current.focus();
    }
  };

  const toggleTooltip = () => setShowTooltip(showTooltip => !showTooltip);

  const handleTooltipTriggerKeyDown = e => {
    const clickInteractionKeys = ['Space', ' ', 'Enter'];

    if (clickInteractionKeys.includes(e.key)) {
      e.preventDefault();
      toggleTooltip();
    }
  };

  const closeTooltipModal = () => {
    setShowTooltip(false);
    tooltipTriggerButton.current.focus();
  };

  return (
    <span className="tooltipTriggerContainer">
      <span
        tabIndex="0"
        role="button"
        ref={tooltipTriggerButton}
        onClick={toggleTooltip}
        onKeyDown={handleTooltipTriggerKeyDown}
        aria-haspopup="dialog"
      >
        {children}
      </span>
      {showTooltip && (
        <FocusTrap>
          <div>
            <div
              className="tooltipBackgroundOverlay"
              onClick={closeTooltipModal}
            />
            <div
              className={`tooltipContainer${
                lightBackground && ' lightBackground'
              }${isModal && ' tooltipContainerModal'}`}
              id="tooltip-content"
              role="dialog"
              aria-modal="true"
              onKeyDown={closeTooltipModalOnEscapeKeyDown}
            >
              <button
                className="tooltipCloseIconButton button outline"
                aria-label="Close"
                onClick={closeTooltipModal}
              >
                X
              </button>
              {content}
            </div>
          </div>
        </FocusTrap>
      )}
    </span>
  );
};

// NOTES:
// Works well for mouse users to click to show or hide the tooltip
// You can click anywhere outside the tooltip content or trigger icon to close the tooltip
// Works well for keyboard users on Space/Enter keydown due to the use of the `tabIndex="0"`
// Works well for keyboard users due to the use of the focus trap
// Works well for screen reader users due to the use of the `aria-haspopup="dialog" attribute and the focus trap
// We use the `role="button"` because this is a clickable button
// You can also dismiss the tooltip by pressing the Escape key
