import React from 'react';
import './Notes.css';

const MensurationNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 10: Mensuration</h1>

      <section id="introduction">
        <h2>Measuring Shapes Around Us</h2>
        <p>
          Mensuration is all about measuring! We'll learn how to find the perimeter and area of different shapes. This is super useful for things like fencing a garden or tiling a floor.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Ancient civilizations like the Egyptians and Babylonians used mensuration to build pyramids and design irrigation systems!</p>
        </div>
      </section>

      <section id="perimeter">
        <h2>Perimeter</h2>
        <p>
          The perimeter is the total distance around the boundary of a closed figure. Imagine walking around the edge of a park; the distance you walk is its perimeter! Perimeter is measured in units of length (e.g., cm, m, km).
        </p>
        <h3>Formulas and Examples:</h3>
        <table>
          <thead>
            <tr>
              <th>Shape</th>
              <th>Formula for Perimeter</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Square</strong></td>
              <td>4 × side</td>
              <td>Side = 5 cm<br />Perimeter = 4 × 5 = 20 cm</td>
            </tr>
            <tr>
              <td><strong>Rectangle</strong></td>
              <td>2 × (length + breadth)</td>
              <td>Length = 10 cm, Breadth = 5 cm<br />Perimeter = 2 × (10 + 5) = 30 cm</td>
            </tr>
            <tr>
              <td><strong>Equilateral Triangle</strong></td>
              <td>3 × side</td>
              <td>Side = 7 cm<br />Perimeter = 3 × 7 = 21 cm</td>
            </tr>
            <tr>
              <td><strong>Irregular Shapes</strong></td>
              <td>Sum of the lengths of all its sides.</td>
              <td>For a shape with sides 2, 3, 4, 5 cm, Perimeter = 2+3+4+5 = 14 cm.</td>
            </tr>
          </tbody>
        </table>
        <div className="visual-example">
          <svg width="200" height="100">
            {/* Square */}
            <rect x="50" y="10" width="80" height="80" fill="none" stroke="black" strokeWidth="2" />
            <text x="85" y="55">Side</text>
          </svg>
          <p>This SVG shows a square. Its perimeter is found by adding the lengths of all four equal sides, or simply multiplying the side length by 4.</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>Perimeter</strong> is like a <strong>P</strong>ath <strong>A</strong>round the <strong>R</strong>im!</p>
        </div>
      </section>

      <section id="area">
        <h2>Area</h2>
        <p>
          The area is the amount of surface covered by a closed figure. Think about how much carpet you need to cover a room; that's the area! Area is measured in square units (e.g., cm², m², km²).
        </p>
        <h3>Formulas and Examples:</h3>
        <table>
          <thead>
            <tr>
              <th>Shape</th>
              <th>Formula for Area</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Square</strong></td>
              <td>side × side (or side²)</td>
              <td>Side = 7 cm<br />Area = 7 × 7 = 49 cm²</td>
            </tr>
            <tr>
              <td><strong>Rectangle</strong></td>
              <td>length × breadth</td>
              <td>Length = 12 cm, Breadth = 6 cm<br />Area = 12 × 6 = 72 cm²</td>
            </tr>
            <tr>
              <td><strong>Triangle</strong></td>
              <td>(1/2) × base × height</td>
              <td>Base = 10 cm, Height = 5 cm<br />Area = (1/2) × 10 × 5 = 25 cm²</td>
            </tr>
          </tbody>
        </table>
        <div className="visual-example">
          <svg width="200" height="100">
            {/* Rectangle */}
            <rect x="20" y="10" width="150" height="80" fill="none" stroke="black" strokeWidth="2" />
            <text x="80" y="50">Length</text>
            <text x="180" y="50">Breadth</text>
          </svg>
          <p>This SVG shows a rectangle. Its area is calculated by multiplying its length by its breadth.</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>Area</strong> is the <strong>A</strong>mount of <strong>R</strong>oom <strong>E</strong>nclosed!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Perimeter is the distance around a shape, measured in units of length.</li>
          <li>Area is the surface covered by a shape, measured in square units.</li>
          <li>We learned formulas and practiced calculating perimeter and area for squares and rectangles.</li>
        </ul>
      </div>
    </div>
  );
};

export default MensurationNotes;