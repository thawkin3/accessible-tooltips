import React from 'react';
import QuestionMarkIcon from '../questionMarkIcon.png';
export const TitleAttributeBad = () => (
  <p>
    Here's a sentence that may need some clarification.{' '}
    <img
      src={QuestionMarkIcon}
      height="12"
      width="12"
      title="More info here"
      alt="More info here"
    />
  </p>
);

// NOTES:
// Works well for mouse users to hover
// Works well for screen reader users due to the use of the alt attribute
// Does not work for keyboard users
