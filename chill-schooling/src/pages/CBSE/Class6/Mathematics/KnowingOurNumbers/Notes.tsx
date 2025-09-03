import React from 'react';
import './Notes.css';

const KnowingOurNumbersNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 1: Knowing Our Numbers</h1>

      <section id="introduction">
        <h2>Introduction to Numbers</h2>
        <p>
          Welcome, young mathematicians! Get ready to embark on an exciting journey into the world of numbers. Numbers are all around us, from counting our toys to telling the time. In this chapter, we'll explore the fascinating universe of numbers and learn how to work with them.
        </p>
        
      </section>

      <section id="comparing-numbers">
        <h2>Comparing Numbers</h2>
        <p>
          Just like we compare our heights, we can also compare numbers to see which is bigger or smaller. Let's learn how!
        </p>
        <h3>Step-by-Step Guide to Comparing Numbers:</h3>
        <ol>
          <li>Count the number of digits in each number. The number with more digits is always greater.</li>
          <li>If the numbers have the same number of digits, start comparing from the leftmost digit.</li>
          <li>The number with the greater digit on the left is the larger number.</li>
          <li>If the leftmost digits are the same, move to the next digit on the right and compare.</li>
          <li>Repeat this process until you find a difference.</li>
        </ol>
        <div className="example-box">
          <h4>Solved Example:</h4>
          <p>Compare 4,875 and 15,200.</p>
          <ul>
            <li>4,875 has 4 digits.</li>
            <li>15,200 has 5 digits.</li>
            <li>Since 15,200 has more digits, 15,200 &gt; 4,875.</li>
          </ul>
        </div>
        <div className="example-box">
          <h4>Solved Example:</h4>
          <p>Compare 9,821 and 9,798.</p>
          <ul>
            <li>Both numbers have 4 digits.</li>
            <li>The leftmost digits are the same (9).</li>
            <li>The next digits are 8 and 7. Since 8 &gt; 7, we have 9,821 &gt; 9,798.</li>
          </ul>
        </div>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The concept of zero was invented in India by the great mathematician Aryabhata!</p>
        </div>
      </section>

      <section id="large-numbers">
        <h2>Large Numbers</h2>
        <p>
          We often encounter large numbers in real life, like the population of a country or the distance between planets. Let's learn how to read and write them.
        </p>
        <h3>Place Value Chart (Indian System)</h3>
        <table>
          <thead>
            <tr>
              <th>Crores</th>
              <th>Lakhs</th>
              <th>Thousands</th>
              <th>Ones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(10,00,00,000)</td>
              <td>(10,00,000)</td>
              <td>(1,000)</td>
              <td>(1)</td>
            </tr>
          </tbody>
        </table>
        <h3>Indian System of Numeration</h3>
        <p>
          In the Indian system, we use commas to group numbers into periods of crores, lakhs, thousands, and ones. The first comma comes after the hundreds place (3 digits from the right), and then after every 2 digits.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The number 5,08,01,592 is read as "Five crore, eight lakh, one thousand, five hundred ninety-two."</p>
        </div>
        <h3>International System of Numeration</h3>
        <p>
          The International system is used worldwide. In this system, we use commas after every 3 digits from the right. The periods are ones, thousands, millions, billions, and so on.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The number 50,801,592 is read as "Fifty million, eight hundred one thousand, five hundred ninety-two."</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>For the Indian system, remember the pattern: 3, 2, 2, 2... (commas after 3, then 2, then 2 digits).</p>
          <p>For the International system, it's always 3, 3, 3... (commas after every 3 digits).</p>
        </div>
      </section>

      <section id="place-value">
        <h2>Place Value and Face Value</h2>
        <p>
          Each digit in a number has a place value and a face value.
        </p>
        <ul>
          <li><b>Face Value:</b> The face value of a digit is the digit itself.</li>
          <li><b>Place Value:</b> The place value of a digit is its face value multiplied by its position in the number (ones, tens, hundreds, etc.).</li>
        </ul>
        <div className="example-box">
          <h4>Example: In the number 6,789</h4>
          <ul>
            <li>The face value of 7 is 7.</li>
            <li>The place value of 7 is 7 x 100 = 700.</li>
          </ul>
        </div>
      </section>

      <section id="estimation">
        <h2>Estimation: Rounding Off Numbers</h2>
        <p>
          Estimation helps us to get a rough idea of a number. We can round off numbers to the nearest tens, hundreds, or thousands.
        </p>
        <h3>Rounding to the Nearest Ten:</h3>
        <ol>
          <li>Look at the ones digit.</li>
          <li>If it is 5 or more, round up the tens digit.</li>
          <li>If it is less than 5, keep the tens digit as it is.</li>
          <li>Replace the ones digit with 0.</li>
        </ol>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Rounding 68 to the nearest ten gives 70.</p>
          <p>Rounding 63 to the nearest ten gives 60.</p>
        </div>
        <h3>Rounding to the Nearest Hundred:</h3>
        <ol>
          <li>Look at the tens digit.</li>
          <li>If it is 5 or more, round up the hundreds digit.</li>
          <li>If it is less than 5, keep the hundreds digit as it is.</li>
          <li>Replace the tens and ones digits with 0s.</li>
        </ol>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Rounding 456 to the nearest hundred gives 500.</p>
          <p>Rounding 432 to the nearest hundred gives 400.</p>
        </div>
        <h3>Rounding to the Nearest Thousand:</h3>
        <ol>
          <li>Look at the hundreds digit.</li>
          <li>If it is 5 or more, round up the thousands digit.</li>
          <li>If it is less than 5, keep the thousands digit as it is.</li>
          <li>Replace the hundreds, tens, and ones digits with 0s.</li>
        </ol>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Rounding 7,890 to the nearest thousand gives 8,000.</p>
          <p>Rounding 7,234 to the nearest thousand gives 7,000.</p>
        </div>
      </section>

      <section id="roman-numerals">
        <h2>Roman Numerals</h2>
        <p>
          The Romans used a different system of numerals. Let's learn about them!
        </p>
        <table>
          <thead>
            <tr>
              <th>Roman</th>
              <th>Hindu-Arabic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>1</td>
            </tr>
            <tr>
              <td>V</td>
              <td>5</td>
            </tr>
            <tr>
              <td>X</td>
              <td>10</td>
            </tr>
            <tr>
              <td>L</td>
              <td>50</td>
            </tr>
            <tr>
              <td>C</td>
              <td>100</td>
            </tr>
            <tr>
              <td>D</td>
              <td>500</td>
            </tr>
            <tr>
              <td>M</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Roman numerals were used in ancient Rome and are still used today for things like clock faces, book chapters, and movie credits!</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>I</strong> <strong>V</strong>alue <strong>X</strong>ylophones <strong>L</strong>ike <strong>C</strong>ows <strong>D</strong>o <strong>M</strong>ilk.</p>
          <p>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000</p>
        </div>
        <h3>Rules for Writing Roman Numerals:</h3>
        <ol>
          <li>If a symbol is repeated, its value is added as many times as it occurs (e.g., XX = 10 + 10 = 20).</li>
          <li>A symbol is not repeated more than three times. V, L, and D are never repeated.</li>
          <li>If a symbol of smaller value is written to the right of a symbol of greater value, its value is added to the value of the greater symbol (e.g., VI = 5 + 1 = 6).</li>
          <li>If a symbol of smaller value is written to the left of a symbol of greater value, its value is subtracted from the value of the greater symbol (e.g., IV = 5 - 1 = 4). V, L, and D are never subtracted. I can be subtracted from V and X only. X can be subtracted from L and C only. C can be subtracted from D and M only.</li>
          <li>A bar over a symbol multiplies its value by 1000 (e.g., V̄ = 5000).</li>
        </ol>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Write 49 in Roman Numerals:</p>
          <p>40 = XL (50 - 10)</p>
          <p>9 = IX (10 - 1)</p>
          <p>So, 49 = XLIX</p>
          <p>Convert CXL to Hindu-Arabic Numeral:</p>
          <p>C = 100, XL = 40</p>
          <p>CXL = 100 + 40 = 140</p>
        </div>
        <div className="summary-box">
          <h4>Summary</h4>
          <ul>
            <li>We learned to compare numbers based on their digits.</li>
            <li>We explored large numbers and the Indian and International systems of numeration.</li>
            <li>We understood the difference between place value and face value.</li>
            <li>We learned how to estimate by rounding off numbers.</li>
            <li>We got introduced to the Roman numeral system.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default KnowingOurNumbersNotes;