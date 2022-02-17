import React from 'react';
import { Section } from './Section';
import { TitleAttributeBad } from './01_title_attribute/TitleAttributeBad';
import { TitleAttributeGood } from './01_title_attribute/TitleAttributeGood';
import { ShortContentHoverFocusBad } from './02_short_content_hover_focus/ShortContentHoverFocusBad';
import { ShortContentHoverFocusGood } from './02_short_content_hover_focus/ShortContentHoverFocusGood';
import { ShortContentClickKeypressBad } from './03_short_content_click_keypress/ShortContentClickKeypressBad';
import { ShortContentClickKeypressGood } from './03_short_content_click_keypress/ShortContentClickKeypressGood';
import { LongContentBad } from './04_long_content/LongContentBad';
import { LongContentGood } from './04_long_content/LongContentGood';
import { InteractiveContentBad } from './05_interactive_content/InteractiveContentBad';
import { InteractiveContentGood } from './05_interactive_content/InteractiveContentGood';
import './App.css';

export const App = () => (
  <main>
    <h1>Accessible Tooltips</h1>
    <hr />

    <Section>
      <h2>
        Using the <code>title</code> Attribute
      </h2>
      <h3>Bad Example</h3>
      <TitleAttributeBad />
      <h3>Good Example</h3>
      <TitleAttributeGood />
    </Section>

    <Section>
      <h2>Short Content (Hover/Focus)</h2>
      <h3>Bad Example</h3>
      <ShortContentHoverFocusBad />
      <h3>Good Example</h3>
      <ShortContentHoverFocusGood />
    </Section>

    <Section>
      <h2>Short Content (Click/Keypress)</h2>
      <h3>Bad Example</h3>
      <ShortContentClickKeypressBad />
      <h3>Good Example</h3>
      <ShortContentClickKeypressGood />
    </Section>

    <Section>
      <h2>Long Content</h2>
      <h3>Bad Example</h3>
      <LongContentBad />
      <h3>Good Example (Under Certain Conditions!)</h3>
      <LongContentGood />
    </Section>

    <Section>
      <h2>Interactive Content (Tooltip Modal)</h2>
      <h3>Bad Example</h3>
      <InteractiveContentBad />
      <h3>Good Example</h3>
      <InteractiveContentGood />
    </Section>

    <h2>Key Takeaways</h2>
    <ol>
      <li>
        There are many different ways that tooltips can be used! Be sure to
        think about your use case before implementing a solution.
      </li>
      <li>
        Don't use the <code>title</code> attribute for tooltips.
      </li>
      <li>
        In general, tooltips should contain short, non-essential, supplemental
        content.
      </li>
      <li>
        Short tooltips may appear on hover/focus or on click/keypress. That
        feels like a design preference decision.
      </li>
      <li>
        In general, long tooltips should be avoided. If you do use a tooltip
        with lengthy content, it may be a good idea to treat it like a modal.
      </li>
      <li>
        If the tooltip has interactive content, it should be treated like a
        modal, regardless of length.
      </li>
    </ol>
  </main>
);
