import React from 'react';
import './Notes.css';

const FractionsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 7: Fractions</h1>

      <section id="introduction">
        <h2>Understanding Parts of a Whole</h2>
        <p>
          Imagine sharing a pizza with friends! When you divide something into equal parts, you're dealing with fractions. A fraction represents a part of a whole.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Fractions have been used since ancient times! The Egyptians used a form of fractions with unit numerators (like 1/2, 1/3, 1/4).</p>
        </div>
      </section>

      <section id="types-of-fractions">
        <h2>Types of Fractions</h2>
        <p>Fractions come in different forms. Let's explore them:</p>
        <table>
          <thead>
            <tr>
              <th>Type of Fraction</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Proper Fraction</strong></td>
              <td>The numerator (top number) is smaller than the denominator (bottom number). Its value is less than 1.</td>
              <td>1/2, 3/4, 5/8</td>
            </tr>
            <tr>
              <td><strong>Improper Fraction</strong></td>
              <td>The numerator is greater than or equal to the denominator. Its value is 1 or greater than 1.</td>
              <td>5/3, 7/7, 9/4</td>
            </tr>
            <tr>
              <td><strong>Mixed Fraction</strong></td>
              <td>A combination of a whole number and a proper fraction. Improper fractions can be converted to mixed fractions.</td>
              <td>1 1/2, 2 3/4, 5 1/3</td>
            </tr>
            <tr>
              <td><strong>Equivalent Fractions</strong></td>
              <td>Fractions that represent the same value, even though they have different numerators and denominators. You get them by multiplying or dividing the numerator and denominator by the same non-zero number.</td>
              <td>1/2 = 2/4 = 3/6</td>
            </tr>
          </tbody>
        </table>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a <strong>Proper</strong> fraction as "proper" behavior – the top (numerator) is smaller than the bottom (denominator).</p>
          <p>An <strong>Improper</strong> fraction is "improper" – the top is bigger or equal to the bottom!</p>
        </div>
      </section>

      <section id="comparing-fractions">
        <h2>Comparing Fractions</h2>
        <p>To compare fractions, we need to make sure we're comparing apples to apples (or parts of the same whole!).</p>
        <ol>
          <li><strong>If Denominators are the Same:</strong> The fraction with the larger numerator is greater.</li>
          <li><strong>If Numerators are the Same:</strong> The fraction with the smaller denominator is greater.</li>
          <li><strong>Different Numerators and Denominators:</strong>
            <ol type="a">
              <li>Find the Least Common Multiple (LCM) of the denominators.</li>
              <li>Convert each fraction to an equivalent fraction with the LCM as the new denominator.</li>
              <li>Compare the new numerators.</li>
            </ol>
          </li>
        </ol>
        <div className="example-box">
          <h4>Example: Compare 2/3 and 3/4.</h4>
          <p><strong>Step 1:</strong> Find the LCM of the denominators (3 and 4). LCM(3, 4) = 12.</p>
          <p><strong>Step 2:</strong> Convert to equivalent fractions with denominator 12:</p>
          <ul>
            <li>2/3 = (2 × 4) / (3 × 4) = 8/12</li>
            <li>3/4 = (3 × 3) / (4 × 3) = 9/12</li>
          </ul>
          <p><strong>Step 3:</strong> Compare the new numerators. Since 9 &gt; 8, then 9/12 &gt; 8/12.</p>
          <p>Therefore, 3/4 &gt; 2/3.</p>
        </div>
      </section>

      <section id="operations-on-fractions">
        <h2>Operations on Fractions</h2>
        <h3>Addition and Subtraction:</h3>
        <ul>
          <li><strong>Same Denominator:</strong> Add/subtract the numerators and keep the denominator same.</li>
          <div className="example-box">
            <h4>Example:</h4>
            <p>1/5 + 2/5 = (1+2)/5 = 3/5</p>
            <p>4/7 - 1/7 = (4-1)/7 = 3/7</p>
          </div>
          <li><strong>Different Denominators:</strong> Find a common denominator (LCM) and then add/subtract the numerators of the equivalent fractions.</li>
          <div className="example-box">
            <h4>Example:</h4>
            <p>1/2 + 1/3</p>
            <p>LCM(2, 3) = 6</p>
            <p>1/2 = 3/6</p>
            <p>1/3 = 2/6</p>
            <p>1/2 + 1/3 = 3/6 + 2/6 = (3+2)/6 = 5/6</p>
          </div>
        </ul>
        <h3>Multiplication:</h3>
        <p>Multiply the numerators together and multiply the denominators together. Simplify if possible.</p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>2/3 × 4/5 = (2 × 4) / (3 × 5) = 8/15</p>
        </div>
        <h3>Division:</h3>
        <p>To divide fractions, multiply the first fraction by the reciprocal (flip) of the second fraction.</p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>1/2 ÷ 3/4 = 1/2 × 4/3 = (1 × 4) / (2 × 3) = 4/6 = 2/3</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Fractions represent parts of a whole.</li>
          <li>We learned about proper, improper, mixed, and equivalent fractions.</li>
          <li>We compared fractions with same and different denominators.</li>
          <li>We performed addition, subtraction, multiplication, and division on fractions.</li>
        </ul>
      </div>
    </div>
  );
};

export default FractionsNotes;