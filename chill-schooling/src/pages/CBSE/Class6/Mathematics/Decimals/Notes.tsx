import React from 'react';
import './Notes.css';

const DecimalsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 8: Decimals</h1>

      <section id="introduction">
        <h2>Understanding Decimal Numbers</h2>
        <p>
          Decimals are another way to represent parts of a whole, just like fractions. They are very useful when we deal with measurements like length, weight, and money.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The decimal system (base-10) is thought to have originated in India, and then spread to the Arab world and later to Europe!</p>
        </div>
      </section>

      <section id="place-value-decimals">
        <h2>Place Value in Decimal Numbers</h2>
        <p>
          In decimal numbers, the digits to the left of the decimal point represent whole numbers, and the digits to the right represent parts of a whole.
        </p>
        <table>
          <thead>
            <tr>
              <th>Place Value</th>
              <th>Value</th>
              <th>Example (in 123.456)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hundreds</td>
              <td>100</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Tens</td>
              <td>10</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Ones</td>
              <td>1</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Decimal Point</td>
              <td>.</td>
              <td>.</td>
            </tr>
            <tr>
              <td>Tenths</td>
              <td>1/10 or 0.1</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Hundredths</td>
              <td>1/100 or 0.01</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Thousandths</td>
              <td>1/1000 or 0.001</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
        <div className="example-box">
          <h4>Example: In 123.456</h4>
          <ul>
            <li>1 is in the hundreds place (100).</li>
            <li>2 is in the tens place (20).</li>
            <li>3 is in the ones place (3).</li>
            <li>4 is in the tenths place (0.4).</li>
            <li>5 is in the hundredths place (0.05).</li>
            <li>6 is in the thousandths place (0.006).</li>
          </ul>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>The "th" at the end of tenths, hundredths, thousandths tells you it's a part of a whole, after the decimal point!</p>
        </div>
      </section>

      <section id="comparing-decimals">
        <h2>Comparing Decimal Numbers</h2>
        <p>
          To compare decimal numbers, follow these steps:
        </p>
        <ol>
          <li>Compare the whole number parts first. The number with the larger whole number part is greater.</li>
          <li>If the whole number parts are the same, compare the digits after the decimal point, starting from the tenths place.</li>
          <li>Add zeros to the end of the decimal numbers if needed, to make the number of decimal places equal. This helps in comparing.</li>
        </ol>
        <div className="example-box">
          <h4>Example: Compare 5.23 and 5.2.</h4>
          <p><strong>Step 1:</strong> Whole number parts are both 5.</p>
          <p><strong>Step 2:</strong> Add a zero to 5.2 to make it 5.20. Now compare 5.23 and 5.20.</p>
          <p><strong>Step 3:</strong> Compare digits from left to right after the decimal point:</p>
          <ul>
            <li>Tenths place: 2 and 2 (same)</li>
            <li>Hundredths place: 3 and 0. Since 3 &gt; 0, 5.23 &gt; 5.20.</li>
          </ul>
          <p>Therefore, 5.23 &gt; 5.2.</p>
        </div>
      </section>

      <section id="operations-on-decimals">
        <h2>Operations on Decimal Numbers</h2>
        <h3>Addition and Subtraction:</h3>
        <p>Align the decimal points vertically and then add or subtract as you would with whole numbers. You can add zeros to the end of decimals to make them have the same number of decimal places.</p>
        <div className="example-box">
          <h4>Example:</h4>
          <p><strong>Addition:</strong> 12.34 + 5.6</p>
          <p>  12.34</p>
          <p>+  5.60</p>
          <p>-------</p>
          <p>  17.94</p>
          <p><strong>Subtraction:</strong> 8.7 - 2.35</p>
          <p>  8.70</p>
          <p>-  2.35</p>
          <p>-------</p>
          <p>  6.35</p>
        </div>
        <h3>Multiplication:</h3>
        <p>Multiply the numbers as if they were whole numbers. Then, count the total number of decimal places in the numbers being multiplied. Place the decimal point in the product from the right, counting that many places.</p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>2.5 × 1.3</p>
          <p>Multiply 25 × 13 = 325.</p>
          <p>2.5 has 1 decimal place. 1.3 has 1 decimal place. Total = 2 decimal places.</p>
          <p>So, 2.5 × 1.3 = 3.25</p>
        </div>
        <h3>Division:</h3>
        <p>If the divisor (the number you are dividing by) is a decimal, convert it to a whole number by multiplying both the divisor and dividend by a power of 10 (10, 100, 1000, etc.). Then perform the division.</p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>6.25 ÷ 0.5</p>
          <p>Multiply both by 10 to make the divisor a whole number:</p>
          <p>62.5 ÷ 5 = 12.5</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Decimals represent parts of a whole and are based on powers of 10.</li>
          <li>We learned about place value in decimal numbers, including tenths, hundredths, and thousandths.</li>
          <li>We compared decimal numbers by aligning decimal points and comparing digits from left to right.</li>
          <li>We performed addition, subtraction, multiplication, and division on decimal numbers, remembering to align decimal points for addition/subtraction and count decimal places for multiplication/division.</li>
        </ul>
      </div>
    </div>
  );
};

export default DecimalsNotes;