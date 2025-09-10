import React from 'react';
import './Notes.css';

const IntegersNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 6: Integers</h1>

      <section id="introduction">
        <h2>What are Integers?</h2>
        <p>
          Get ready to meet a new family of numbers! So far, we've learned about whole numbers (0, 1, 2, 3...). But what about numbers that represent things like temperatures below zero, or debts? That's where <strong>Integers</strong> come in!
        </p>
        <p>
          Integers are a collection of whole numbers and negative numbers. They can be positive, negative, or zero.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Integers are used in many real-life situations, like measuring temperature (above/below 0°C), tracking bank balances (deposits/withdrawals), and even in sports (yards gained/lost in football)!</p>
        </div>
      </section>

      <section id="representation-on-number-line">
        <h2>Representation of Integers on a Number Line</h2>
        <p>
          We can easily show integers on a number line. Zero is in the middle. Positive numbers are to the right of zero, and negative numbers are to the left.
        </p>
        <div className="visual-example">
          <svg width="400" height="50">
            <line x1="20" y1="25" x2="380" y2="25" stroke="black" strokeWidth="2" />
            {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((num, index) => (
              <React.Fragment key={index}>
                <circle cx={20 + index * 35} cy="25" r="2" fill="black" />
                <text x={20 + index * 35 - 5} y="45">{num}</text>
              </React.Fragment>
            ))}
          </svg>
          <p>A number line showing integers.</p>
        </div>
      </section>

      <section id="ordering-integers">
        <h2>Ordering of Integers</h2>
        <p>
          On a number line, numbers to the right are always greater than numbers to the left.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <ul>
            <li>5 &gt; 2 (5 is to the right of 2)</li>
            <li>-1 &gt; -3 (-1 is to the right of -3)</li>
            <li>0 &gt; -2 (0 is to the right of -2)</li>
            <li>-5 &lt; 1 (-5 is to the left of 1)</li>
          </ul>
        </div>
      </section>

      <section id="addition-subtraction-integers">
        <h2>Addition and Subtraction of Integers</h2>
        <h3>Adding Integers:</h3>
        <p>Follow these rules when adding integers:</p>
        <table>
          <thead>
            <tr>
              <th>Case</th>
              <th>Rule</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Same Signs</strong></td>
              <td>Add the absolute values and keep the common sign.</td>
              <td>3 + 2 = 5<br />(-3) + (-2) = -5</td>
            </tr>
            <tr>
              <td><strong>Different Signs</strong></td>
              <td>Subtract the smaller absolute value from the larger absolute value. The result takes the sign of the integer with the larger absolute value.</td>
              <td>5 + (-2) = 3<br />(-5) + 2 = -3</td>
            </tr>
          </tbody>
        </table>
        <h3>Subtracting Integers:</h3>
        <p>Subtracting an integer is the same as adding its opposite. Change the subtraction sign to an addition sign and change the sign of the number being subtracted to its opposite.</p>
        <div className="example-box">
          <h4>Examples:</h4>
          <ul>
            <li>5 - 3 = 5 + (-3) = 2</li>
            <li>3 - 5 = 3 + (-5) = -2</li>
            <li>5 - (-3) = 5 + 3 = 8</li>
            <li>-5 - (-2) = -5 + 2 = -3</li>
          </ul>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>Same Sign, Add and Keep!</strong> (e.g., 3+2=5, -3-2=-5)</p>
          <p><strong>Different Signs, Subtract! Take the sign of the Higher number, then you'll be exact!</strong> (e.g., 5-2=3, -5+2=-3)</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Integers include positive numbers, negative numbers, and zero.</li>
          <li>We can represent and order integers on a number line.</li>
          <li>We learned rules for adding and subtracting integers, including using the concept of opposites for subtraction.</li>
        </ul>
      </div>
    </div>
  );
};

export default IntegersNotes;