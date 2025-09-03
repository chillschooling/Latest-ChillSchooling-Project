import React from 'react';
import './Notes.css';

const AHouseAHomeNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Poem: A House, A Home</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          The poem "A House, A Home" by Lorraine M. Halli explores the fundamental difference between a physical structure and a place filled with emotional connection.
        </p>
        <p>
          A "house" is described as a non-living structure built from materials like bricks, stone, wood, and glass, with features such as windows, chimneys, and a yard. It is purely a physical entity.
        </p>
        <p>
          In contrast, a "home" is not defined by its physical components but by the presence of a loving and caring family. It is a place where family members—fathers, mothers, brothers, and sisters—live together, share emotions, perform selfless acts, and show kindness and affection towards one another. A home is created by love, care, and selflessness.
        </p>
      </section>

      <section id="characters">
        <h2>Characters (Implied)</h2>
        <p>
          The poem does not feature specific named characters. Instead, it refers to the universal members of a family who collectively create a home:
        </p>
        <ul>
          <li>Fathers</li>
          <li>Mothers</li>
          <li>Brothers</li>
          <li>Sisters</li>
        </ul>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The primary theme is the <strong>Distinction between Material and Emotional Value</strong>. It differentiates a physical building (a house) from a place imbued with love, care, and relationships (a home).
        </p>
        <p>
          Another key theme is <strong>The Importance of Family</strong>. The poem emphasizes that a home is created by the people who live in it, highlighting the significance of family bonds, mutual affection, and selfless actions.
        </p>
        <p>
          It also underscores <strong>Love, Care, and Selflessness</strong>, showing that a true home is built on acts of kindness, sharing, understanding, and the willingness of family members to work for each other's happiness.
        </p>
      </section>
    </div>
  );
};

export default AHouseAHomeNotes;