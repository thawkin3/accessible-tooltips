import React from 'react';
import { TitleAttributeBad } from './01_title_attribute/TitleAttributeBad';
import { TitleAttributeGood } from './01_title_attribute/TitleAttributeGood';
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
    <h2>Short Content</h2>
    <h3>Bad Example</h3>
    <p>TODO</p>
    <h3>Good Example</h3>
    <p>TODO</p>
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
