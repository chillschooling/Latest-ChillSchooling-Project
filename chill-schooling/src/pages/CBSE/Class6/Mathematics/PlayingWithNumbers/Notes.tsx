import React from 'react';
import './Notes.css';

const PlayingWithNumbersNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 3: Playing with Numbers</h1>

      <section id="introduction">
        <h2>Fun with Factors and Multiples</h2>
        <p>
          Let's play with numbers and discover their secrets! In this chapter, we'll learn about factors and multiples, which are like the building blocks of numbers.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Every number is a factor of itself, and 1 is a factor of every number!</p>
        </div>
      </section>

      <section id="factors-and-multiples">
        <h2>Factors and Multiples</h2>
        <ul>
          <li><strong>Factor:</strong> A factor of a number divides the number exactly, without leaving a remainder. Factors are finite.</li>
          <li><strong>Multiple:</strong> A multiple of a number is obtained by multiplying the number by another whole number. Multiples are infinite.</li>
        </ul>
        <div className="example-box">
          <h4>Example: For the number 12</h4>
          <p><strong>Factors of 12:</strong> To find factors, think of pairs of numbers that multiply to give 12.</p>
          <ul>
            <li>1 × 12 = 12</li>
            <li>2 × 6 = 12</li>
            <li>3 × 4 = 12</li>
          </ul>
          <p>So, the factors of 12 are 1, 2, 3, 4, 6, and 12.</p>
          <p><strong>Multiples of 12:</strong> Multiply 12 by 1, 2, 3, and so on.</p>
          <ul>
            <li>12 × 1 = 12</li>
            <li>12 × 2 = 24</li>
            <li>12 × 3 = 36</li>
            <li>12 × 4 = 48</li>
            <li>... and so on.</li>
          </ul>
          <p>So, the multiples of 12 are 12, 24, 36, 48, ...</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>F</strong>actors are <strong>F</strong>ew (finite), <strong>M</strong>ultiples are <strong>M</strong>any (infinite)!</p>
        </div>
      </section>

      <section id="prime-and-composite-numbers">
        <h2>Prime and Composite Numbers</h2>
        <ul>
          <li><strong>Prime Numbers:</strong> A number that has exactly two factors: 1 and the number itself. Examples: 2, 3, 5, 7, 11, 13, 17, 19, ...</li>
          <li><strong>Composite Numbers:</strong> A number that has more than two factors. Examples: 4, 6, 8, 9, 10, 12, 14, 15, ...</li>
        </ul>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The number 1 is unique! It is neither prime nor composite.</p>
          <p>2 is the smallest prime number and the only even prime number.</p>
        </div>
      </section>

      <section id="divisibility-rules">
        <h2>Tests for Divisibility of Numbers</h2>
        <p>These rules help us quickly check if a number can be divided by another number without performing long division.</p>
        <table>
          <thead>
            <tr>
              <th>Divisible by</th>
              <th>Rule</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>2</strong></td>
              <td>If the last digit is 0, 2, 4, 6, or 8 (an even number).</td>
              <td>248 (ends in 8, so divisible by 2)</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>If the sum of its digits is divisible by 3.</td>
              <td>123 (1+2+3=6, 6 is divisible by 3)</td>
            </tr>
            <tr>
              <td><strong>4</strong></td>
              <td>If the number formed by its last two digits is divisible by 4.</td>
              <td>1324 (24 is divisible by 4)</td>
            </tr>
            <tr>
              <td><strong>5</strong></td>
              <td>If the last digit is 0 or 5.</td>
              <td>570 (ends in 0, so divisible by 5)</td>
            </tr>
            <tr>
              <td><strong>6</strong></td>
              <td>If it is divisible by both 2 and 3.</td>
              <td>126 (even, 1+2+6=9, 9 is divisible by 3)</td>
            </tr>
            <tr>
              <td><strong>8</strong></td>
              <td>If the number formed by its last three digits is divisible by 8.</td>
              <td>2816 (816 is divisible by 8)</td>
            </tr>
            <tr>
              <td><strong>9</strong></td>
              <td>If the sum of its digits is divisible by 9.</td>
              <td>729 (7+2+9=18, 18 is divisible by 9)</td>
            </tr>
            <tr>
              <td><strong>10</strong></td>
              <td>If the last digit is 0.</td>
              <td>980 (ends in 0, so divisible by 10)</td>
            </tr>
            <tr>
              <td><strong>11</strong></td>
              <td>If the difference between the sum of the digits at odd places and the sum of the digits at even places is either 0 or divisible by 11.</td>
              <td>1331 (Odd places: 1+3=4; Even places: 3+1=4. Difference 4-4=0)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="hcf-and-lcm">
        <h2>Highest Common Factor (HCF) and Lowest Common Multiple (LCM)</h2>
        <p>These concepts are very important for solving many math problems.</p>
        <h3>Highest Common Factor (HCF)</h3>
        <p>The HCF of two or more numbers is the largest number that divides all of them exactly.</p>
        <h4>Methods to find HCF:</h4>
        <ul>
          <li><strong>Prime Factorisation Method:</strong> Find the prime factors of each number and multiply the common prime factors with the lowest power.</li>
          <li><strong>Long Division Method:</strong> Divide the larger number by the smaller number. Then divide the divisor by the remainder. Continue until the remainder is 0. The last divisor is the HCF.</li>
        </ul>
        <div className="example-box">
          <h4>Example: Find HCF of 12 and 18</h4>
          <p><strong>Prime Factorisation:</strong></p>
          <ul>
            <li>12 = 2 × 2 × 3</li>
            <li>18 = 2 × 3 × 3</li>
          </ul>
          <p>Common factors are 2 and 3. HCF = 2 × 3 = 6.</p>
        </div>

        <h3>Lowest Common Multiple (LCM)</h3>
        <p>The LCM of two or more numbers is the smallest non-zero common multiple of those numbers.</p>
        <h4>Methods to find LCM:</h4>
        <ul>
          <li><strong>Prime Factorisation Method:</strong> Find the prime factors of each number. For each prime factor, take the highest power that appears in any of the factorizations and multiply them together.</li>
          <li><strong>Common Division Method:</strong> Divide the numbers by common prime factors until no common prime factor remains. Multiply all the divisors and the remaining numbers.</li>
        </ul>
        <div className="example-box">
          <h4>Example: Find LCM of 12 and 18</h4>
          <p><strong>Prime Factorisation:</strong></p>
          <ul>
            <li>12 = 2² × 3¹</li>
            <li>18 = 2¹ × 3²</li>
          </ul>
          <p>Highest powers: 2² and 3². LCM = 2² × 3² = 4 × 9 = 36.</p>
        </div>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>For any two numbers, Product of the two numbers = HCF × LCM!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>We learned about factors and multiples, and how to find them.</li>
          <li>We distinguished between prime and composite numbers, and understood that 1 is unique.</li>
          <li>We discovered and practiced various divisibility rules for quick checks.</li>
          <li>We understood the concepts of HCF and LCM and learned methods to calculate them.</li>
        </ul>
      </div>
    </div>
  );
};

export default PlayingWithNumbersNotes;