import React from 'react';
import { TitleAttributeBad } from './01_title_attribute/TitleAttributeBad';
import { TitleAttributeGood } from './01_title_attribute/TitleAttributeGood';
import { ShortContentHoverFocusBad } from './02_short_content_hover_focus/ShortContentHoverFocusBad';
import { ShortContentHoverFocusGood } from './02_short_content_hover_focus/ShortContentHoverFocusGood';
import { ShortContentClickKeypressBad } from './03_short_content_click_keypress/ShortContentClickKeypressBad';
import { ShortContentClickKeypressGood } from './03_short_content_click_keypress/ShortContentClickKeypressGood';
import './App.css';

export const App = () => (
  <main>
    <h1>Accessible Tooltips</h1>
    <hr />
    <h2>
      Using the <code>title</code> Attribute
    </h2>
    <h3>Bad Example</h3>
    <TitleAttributeBad />
    <h3>Good Example</h3>
    <TitleAttributeGood />
    <hr />
    <h2>Short Content (Hover/Focus)</h2>
    <h3>Bad Example</h3>
    <ShortContentHoverFocusBad />
    <h3>Good Example</h3>
    <ShortContentHoverFocusGood />
    <hr />
    <h2>Short Content (Click/Keypress)</h2>
    <h3>Bad Example</h3>
    <ShortContentClickKeypressBad />
    <h3>Good Example</h3>
    <ShortContentClickKeypressGood />
    <hr />
    <h2>Long Content</h2>
    <h3>Bad Example</h3>
    <p>TODO</p>
    <h3>Good Example</h3>
    <p>TODO</p>
    <hr />
    <h2>Interactive Content</h2>
    <h3>Bad Example</h3>
    <p>TODO</p>
    <h3>Good Example</h3>
    <p>TODO</p>
  </main>
);
