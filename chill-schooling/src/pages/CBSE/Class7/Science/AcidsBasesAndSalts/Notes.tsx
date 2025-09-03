import React from 'react';
import './Notes.css';

const AcidsBasesAndSaltsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 4: Acids, Bases and Salts</h1>

      <section id="introduction">
        <h2>Introduction to Acids, Bases, and Salts</h2>
        <p>
          In our daily lives, we encounter a variety of substances. Some, like lemon and vinegar, taste sour, while others, such as baking soda, are bitter. These tastes are due to the presence of chemical compounds that can be broadly classified as acids, bases, and salts.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word "acid" comes from the Latin word 'acidus', which means sour.</p>
        </div>
      </section>

      <section id="acids">
        <h2>Acids: The Sour Truth</h2>
        <p>
          Acids are substances that are sour in taste. They are corrosive in nature and can be found in many foods we eat.
        </p>
        <h4>Properties of Acids:</h4>
        <ul>
          <li>Sour taste</li>
          <li>Turn blue litmus paper red</li>
          <li>Corrosive</li>
        </ul>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Natural Acid</th>
                <th>Found In</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acetic Acid</td>
                <td>Vinegar</td>
              </tr>
              <tr>
                <td>Formic Acid</td>
                <td>Ant's sting</td>
              </tr>
              <tr>
                <td>Citric Acid</td>
                <td>Citrus fruits (oranges, lemons)</td>
              </tr>
              <tr>
                <td>Lactic Acid</td>
                <td>Curd</td>
              </tr>
              <tr>
                <td>Oxalic Acid</td>
                <td>Spinach</td>
              </tr>
              <tr>
                <td>Ascorbic Acid (Vitamin C)</td>
                <td>Amla, Citrus fruits</td>
              </tr>
              <tr>
                <td>Tartaric Acid</td>
                <td>Tamarind, grapes, unripe mangoes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="bases">
        <h2>Bases: The Bitter Reality</h2>
        <p>
          Bases are substances that are bitter in taste and have a soapy feel. Bases that are soluble in water are called <strong>alkalis</strong>.
        </p>
        <h4>Properties of Bases:</h4>
        <ul>
          <li>Bitter taste</li>
          <li>Soapy feel</li>
          <li>Turn red litmus paper blue</li>
        </ul>
        <div className="example-box">
          <h4>Examples of Bases in Everyday Life:</h4>
          <ul>
            <li><strong>Calcium Hydroxide:</strong> Limewater</li>
            <li><strong>Ammonium Hydroxide:</strong> Window cleaner</li>
            <li><strong>Sodium Hydroxide/Potassium Hydroxide:</strong> Soap</li>
            <li><strong>Magnesium Hydroxide:</strong> Milk of magnesia (antacid)</li>
          </ul>
        </div>
      </section>

      <section id="indicators">
        <h2>Indicators: The Chemical Detectives</h2>
        <p>
          Indicators are special substances that change their color when they come in contact with an acidic or a basic solution.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Indicator</th>
                <th>Acidic Solution</th>
                <th>Basic Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Litmus Paper</strong></td>
                <td>Red</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td><strong>Turmeric</strong></td>
                <td>Yellow</td>
                <td>Red</td>
              </tr>
              <tr>
                <td><strong>China Rose</strong></td>
                <td>Dark Pink (Magenta)</td>
                <td>Green</td>
              </tr>
              <tr>
                <td><strong>Phenolphthalein</strong></td>
                <td>Colorless</td>
                <td>Pink</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="neutralization">
        <h2>Neutralization: The Balancing Act</h2>
        <p>
          When an acid and a base are mixed, they neutralize each other's properties. This reaction is called a <strong>neutralization reaction</strong>, and it produces salt, water, and heat.
        </p>
        <div className="memory-trick">
          <h4>Remember the Equation!</h4>
          <p>Acid + Base → Salt + Water + Heat</p>
        </div>
        <h4>Neutralization in Everyday Life:</h4>
        <ul>
          <li><strong>Indigestion:</strong> Antacids (bases) neutralize excess stomach acid.</li>
          <li><strong>Ant Bite:</strong> Baking soda (base) neutralizes the formic acid from an ant's sting.</li>
          <li><strong>Soil Treatment:</strong> Bases like quicklime are used to neutralize acidic soil.</li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Acids are sour, and bases are bitter and soapy.</li>
          <li>Indicators are used to test for acids and bases.</li>
          <li>Neutralization is the reaction between an acid and a base, which produces salt and water.</li>
          <li>Neutralization has many applications in our daily lives.</li>
        </ul>
      </div>
    </div>
  );
};

export default AcidsBasesAndSaltsNotes;
