import React from 'react';
import './Notes.css';

const AlgebraNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 11: Algebra</h1>

      <section id="introduction">
        <h2>Introducing Variables and Expressions</h2>
        <p>
          Algebra is like a puzzle where we use letters (called variables) to represent unknown numbers. It helps us solve problems where we don't know all the numbers right away! It's a powerful tool for solving real-world problems.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word "Algebra" comes from the Arabic word "al-jabr", which means "reunion of broken parts" or "bone-setting". It was introduced by the Persian mathematician Al-Khwarizmi in the 9th century!</p>
        </div>
      </section>

      <section id="variables-constants">
        <h2>Variables and Constants</h2>
        <p>In algebra, we work with two main types of quantities:</p>
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Description</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Variable</strong></td>
              <td>A quantity that can take different values. It is usually represented by letters like x, y, z, a, b, etc. Its value is not fixed.</td>
              <td>In "x + 5", 'x' is the variable.</td>
            </tr>
            <tr>
              <td><strong>Constant</strong></td>
              <td>A quantity that has a fixed numerical value. Its value does not change.</td>
              <td>In "x + 5", '5' is the constant. Other examples: 2, -10, 1/2.</td>
            </tr>
          </tbody>
        </table>
        <div className="example-box">
          <h4>Example:</h4>
          <p>In the expression 2x + 5:</p>
          <ul>
            <li>'x' is the variable (it can be any number).</li>
            <li>'2' is a constant (it's always 2).</li>
            <li>'5' is a constant (it's always 5).</li>
          </ul>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>Variable</strong>: Varies (changes). Think of a chameleon changing its color!</p>
          <p><strong>Constant</strong>: Constant (stays the same). Think of a stop sign, it's always red and octagonal!</p>
        </div>
      </section>

      <section id="algebraic-expressions">
        <h2>Algebraic Expressions</h2>
        <p>
          An algebraic expression is a combination of variables, constants, and mathematical operations (+, -, ×, ÷). Unlike equations, expressions do not have an equals sign.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <ul>
            <li>x + 3 (sum of a variable and a constant)</li>
            <li>2y - 7 (two times a variable minus a constant)</li>
            <li>5z (five times a variable)</li>
            <li>a/4 (a variable divided by a constant)</li>
          </ul>
        </div>
      </section>

      <section id="equations">
        <h2>Equations</h2>
        <p>
          An equation is a statement that two algebraic expressions are equal. It always has an '=' sign, indicating a balance between two sides.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <ul>
            <li>x + 3 = 8 (The expression 'x + 3' is equal to the constant '8')</li>
            <li>2y - 7 = 13 (The expression '2y - 7' is equal to the constant '13')</li>
            <li>5z = 25 (The expression '5z' is equal to the constant '25')</li>
          </ul>
        </div>
      </section>

      <section id="solving-equations">
        <h2>Solving Simple Equations</h2>
        <p>
          Solving an equation means finding the value of the variable that makes the equation true. We use properties of equality to isolate the variable.
        </p>
        <h3>Properties of Equality:</h3>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Addition Property</strong></td>
              <td>If you add the same number to both sides of an equation, the equation remains balanced.</td>
              <td>If x - 3 = 5, then x - 3 + 3 = 5 + 3, so x = 8.</td>
            </tr>
            <tr>
              <td><strong>Subtraction Property</strong></td>
              <td>If you subtract the same number from both sides of an equation, the equation remains balanced.</td>
              <td>If x + 7 = 10, then x + 7 - 7 = 10 - 7, so x = 3.</td>
            </tr>
            <tr>
              <td><strong>Multiplication Property</strong></td>
              <td>If you multiply both sides of an equation by the same non-zero number, the equation remains balanced.</td>
              <td>If x / 2 = 4, then (x / 2) × 2 = 4 × 2, so x = 8.</td>
            </tr>
            <tr>
              <td><strong>Division Property</strong></td>
              <td>If you divide both sides of an equation by the same non-zero number, the equation remains balanced.</td>
              <td>If 3x = 15, then 3x / 3 = 15 / 3, so x = 5.</td>
            </tr>
          </tbody>
        </table>
        <div className="example-box">
          <h4>Example: Solve x + 5 = 12</h4>
          <ol>
            <li>We want to get 'x' by itself. The '5' is being added to 'x'.</li>
            <li>To undo addition, we use subtraction. Subtract 5 from both sides of the equation to keep it balanced:</li>
            <li>x + 5 - 5 = 12 - 5</li>
            <li>So, x = 7</li>
          </ol>
          <p><strong>Check:</strong> 7 + 5 = 12. The solution is correct!</p>
        </div>
        <div className="example-box">
          <h4>Example: Solve 4y = 20</h4>
          <ol>
            <li>Here, '4' is multiplying 'y'.</li>
            <li>To undo multiplication, we use division. Divide both sides by 4:</li>
            <li>4y / 4 = 20 / 4</li>
            <li>So, y = 5</li>
          </ol>
          <p><strong>Check:</strong> 4 × 5 = 20. The solution is correct!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Algebra uses variables (letters) to represent unknown numbers and constants (fixed values).</li>
          <li>Algebraic expressions combine variables, constants, and operations without an equals sign.</li>
          <li>Equations are statements where two expressions are equal, always containing an equals sign.</li>
          <li>Solving equations involves finding the variable's value using properties of equality (addition, subtraction, multiplication, division).</li>
        </ul>
      </div>
    </div>
  );
};

export default AlgebraNotes;