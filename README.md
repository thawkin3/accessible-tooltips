# Accessible Card Components

This project is meant to teach software engineers how to create accessible tooltips in React. It includes good examples and bad examples. [View the demo app here.](http://tylerhawkins.info/accessible-tooltips/build/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Key Takeaways

1. There are many different ways that tooltips can be used! Be sure to think about your use case before implementing a solution.
2. Don't use the <code>title</code> attribute for tooltips.
3. In general, tooltips should contain short, non-essential, supplemental content.
4. Short tooltips may appear on hover/focus or on click/keypress. That feels like a design preference decision.
5. In general, long tooltips should be avoided.</li>
6. If the tooltip has interactive content, it should be treated like a modal, regardless of length.

## Available Scripts

In the project directory, you can run:

- `build`: Builds the app
- `eject`: Ejects the app from using react-scripts
- `format`: Formats the code using Prettier
- `format-watch`: Formats the code using Prettier in watch mode
- `start`: Starts the app in development mode
- `test`: Runs the tests in watch mode

## Resources

- [Inclusive Components - Tooltips and Toggletips](https://inclusive-components.design/tooltips-toggletips/)
- [SVGs and Title Attributes](http://web-accessibility.carnegiemuseums.org/code/svg/)
- [Problems with Using the Title Attribute](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Use of the Title Attribute is Officially Discouraged](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [MDN - role="tooltip"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [Tooltips in the Time of WCAG 2.1](https://sarahmhigley.com/writing/tooltips-in-wcag-21/)
