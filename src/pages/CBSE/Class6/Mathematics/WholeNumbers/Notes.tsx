import React from 'react';
import './Notes.css';

const WholeNumbersNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 2: Whole Numbers</h1>

      <section id="introduction">
        <h2>Introduction to Whole Numbers</h2>
        <p>
          Hello again, future math wizards! Today, we're going to learn about a special set of numbers called <strong>Whole Numbers</strong>. They are just like counting numbers, but with a very special number included: Zero!
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The set of whole numbers is infinite, meaning it goes on forever without end!</p>
        </div>
      </section>

      <section id="natural-and-whole-numbers">
        <h2>Natural Numbers and Whole Numbers</h2>
        <p>Let's clearly understand the difference between these two important sets of numbers:</p>
        <table>
          <thead>
            <tr>
              <th>Type of Number</th>
              <th>Definition</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Natural Numbers</strong></td>
              <td>These are the counting numbers, starting from 1.</td>
              <td>1, 2, 3, 4, 5, ...</td>
            </tr>
            <tr>
              <td><strong>Whole Numbers</strong></td>
              <td>These include all natural numbers plus zero.</td>
              <td>0, 1, 2, 3, 4, 5, ...</td>
            </tr>
          </tbody>
        </table>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>All natural numbers are whole numbers, but not all whole numbers are natural numbers (because of 0!).</p>
        </div>
      </section>

      <section id="properties-of-whole-numbers">
        <h2>Properties of Whole Numbers</h2>
        <p>Whole numbers have some cool properties that make calculations easier. Let's explore them!</p>
        <h3>1. Closure Property</h3>
        <p>When you add or multiply two whole numbers, the result is always a whole number. However, this is not always true for subtraction and division.</p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p><strong>Addition:</strong> 5 + 3 = 8 (whole number)</p>
          <p><strong>Multiplication:</strong> 5 × 3 = 15 (whole number)</p>
          <p><strong>Subtraction:</strong> 3 - 5 = -2 (not a whole number)</p>
          <p><strong>Division:</strong> 5 ÷ 2 = 2.5 (not a whole number)</p>
        </div>
        <h3>2. Commutative Property</h3>
        <p>You can add or multiply whole numbers in any order, and the result will be the same. This property does not apply to subtraction or division.</p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p><strong>Addition:</strong> 4 + 6 = 10  and  6 + 4 = 10</p>
          <p><strong>Multiplication:</strong> 4 × 6 = 24  and  6 × 4 = 24</p>
          <p><strong>Subtraction:</strong> 4 - 6 ≠ 6 - 4</p>
          <p><strong>Division:</strong> 6 ÷ 3 ≠ 3 ÷ 6</p>
        </div>
        <h3>3. Associative Property</h3>
        <p>When you add or multiply three or more whole numbers, you can group them in any way, and the result will be the same. This property does not apply to subtraction or division.</p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p><strong>Addition:</strong> (2 + 3) + 4 = 5 + 4 = 9  and  2 + (3 + 4) = 2 + 7 = 9</p>
          <p><strong>Multiplication:</strong> (2 × 3) × 4 = 6 × 4 = 24  and  2 × (3 × 4) = 2 × 12 = 24</p>
        </div>
        <h3>4. Distributive Property</h3>
        <p>This property connects multiplication and addition (or subtraction). It says that multiplying a number by a group of numbers added together is the same as doing each multiplication separately.</p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>3 × (4 + 5) = 3 × 9 = 27</p>
          <p>(3 × 4) + (3 × 5) = 12 + 15 = 27</p>
          <p>So, 3 × (4 + 5) = (3 × 4) + (3 × 5)</p>
        </div>
        <h3>5. Identity Property</h3>
        <ul>
          <li><strong>Additive Identity (0):</strong> When you add 0 to any whole number, you get the same number back. For example, 7 + 0 = 7.</li>
          <li><strong>Multiplicative Identity (1):</strong> When you multiply any whole number by 1, you get the same number back. For example, 7 × 1 = 7.</li>
        </ul>
      </section>

      <section id="patterns-in-whole-numbers">
        <h2>Patterns in Whole Numbers</h2>
        <p>
          We can arrange numbers in elementary shapes made up of dots. This helps us visualize number patterns.
        </p>
        <h3>1. Line Patterns:</h3>
        <p>Any number can be arranged in a line. This is the simplest pattern.</p>
        <div className="visual-example">
          <p>Example: The number 5 can be shown as: • • • • •</p>
          <p>Any number like 1, 2, 3, 4, 5, ... can form a line pattern.</p>
        </div>
        <h3>2. Rectangular Patterns:</h3>
        <p>Some numbers can be arranged to form rectangles. To form a rectangle, a number must be a product of two factors (excluding 1 and itself, for non-square rectangles).</p>
        <div className="visual-example">
          <p>Example: The number 6 can form a 2x3 rectangle:</p>
          <p>• • •</p>
          <p>• • •</p>
          <p>Other examples: 4 (2x2 square is also a rectangle), 8 (2x4), 10 (2x5), 12 (3x4 or 2x6).</p>
        </div>
        <h3>3. Square Patterns:</h3>
        <p>Numbers that can be arranged in a square are called square numbers. These are numbers obtained by multiplying an integer by itself.</p>
        <div className="visual-example">
          <p>Example: The number 9 can form a 3x3 square:</p>
          <p>• • •</p>
          <p>• • •</p>
          <p>• • •</p>
          <p>Other examples: 1 (1x1), 4 (2x2), 16 (4x4), 25 (5x5).</p>
        </div>
        <h3>4. Triangular Patterns:</h3>
        <p>Numbers that can be arranged in a triangle are called triangular numbers. These are formed by the sum of consecutive natural numbers (1, 1+2, 1+2+3, etc.).</p>
        <div className="visual-example">
          <p>Example: The number 6 can form a triangle:</p>
          <p>•</p>
          <p>• •</p>
          <p>• • •</p>
          <p>Other examples: 1, 3, 10, 15, 21.</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of whole numbers as "whole" pizzas, including the "zero" pizza (an empty box)!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Whole numbers are the set of natural numbers along with zero.</li>
          <li>We learned about the properties of whole numbers: Closure, Commutative, Associative, Distributive, and Identity.</li>
          <li>We explored patterns in whole numbers by arranging them in shapes.</li>
        </ul>
      </div>
    </div>
  );
};

export default WholeNumbersNotes;