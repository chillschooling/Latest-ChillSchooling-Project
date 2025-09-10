import React from 'react';
import './Notes.css';

const UnderstandingElementaryShapesNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 5: Understanding Elementary Shapes</h1>

      <section id="introduction">
        <h2>Measuring Line Segments and Angles</h2>
        <p>
          Let's dive deeper into the world of shapes! In this chapter, we'll learn how to measure line segments and angles, and we'll explore different types of angles and triangles. Accurate measurement is key in geometry!
        </p>
        <h3>Measuring Line Segments:</h3>
        <p>We use a ruler or a divider to measure the length of a line segment. A divider helps in comparing lengths more accurately.</p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>To measure a line segment AB, place the ruler along the segment with 0 mark at point A. Read the mark on the ruler that coincides with point B. That reading is the length of AB.</p>
        </div>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The first known ruler was found in the Indus Valley Civilization, dating back to 1500 BC!</p>
        </div>
      </section>

      <section id="measuring-angles">
        <h2>Measuring Angles</h2>
        <p>We use a protractor to measure angles in degrees (°). An angle is formed by two rays sharing a common endpoint (vertex).</p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>To measure an angle ABC, place the center of the protractor on the vertex B and align the 0° mark with one arm (say, BC). Read the degree mark where the other arm (BA) crosses the protractor scale. That reading is the measure of angle ABC.</p>
        </div>
        <h3>Types of Angles:</h3>
        <table>
          <thead>
            <tr>
              <th>Type of Angle</th>
              <th>Description</th>
              <th>Range (Degrees)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Acute Angle</strong></td>
              <td>An angle that is less than a right angle.</td>
              <td>Between 0° and 90°</td>
            </tr>
            <tr>
              <td><strong>Right Angle</strong></td>
              <td>An angle that forms a perfect corner.</td>
              <td>Exactly 90°</td>
            </tr>
            <tr>
              <td><strong>Obtuse Angle</strong></td>
              <td>An angle that is greater than a right angle but less than a straight angle.</td>
              <td>Between 90° and 180°</td>
            </tr>
            <tr>
              <td><strong>Straight Angle</strong></td>
              <td>An angle that is exactly 180°. Forms a straight line.</td>
              <td>180°</td>
            </tr>
            <tr>
              <td><strong>Reflex Angle</strong></td>
              <td>An angle that is greater than a straight angle.</td>
              <td>Between 180° and 360°</td>
            </tr>
            <tr>
              <td><strong>Complete Angle</strong></td>
              <td>An angle that forms a full circle.</td>
              <td>Exactly 360°</td>
            </tr>
          </tbody>
        </table>
        <div className="visual-example">
          <svg width="400" height="150">
            {/* Acute Angle */}
            <line x1="50" y1="100" x2="100" y2="100" stroke="black" strokeWidth="2" />
            <line x1="50" y1="100" x2="80" y2="50" stroke="black" strokeWidth="2" />
            <text x="60" y="120">Acute</text>
            {/* Right Angle */}
            <line x1="150" y1="100" x2="200" y2="100" stroke="black" strokeWidth="2" />
            <line x1="150" y1="100" x2="150" y2="50" stroke="black" strokeWidth="2" />
            <text x="160" y="120">Right</text>
            {/* Obtuse Angle */}
            <line x1="250" y1="100" x2="300" y2="100" stroke="black" strokeWidth="2" />
            <line x1="250" y1="100" x2="220" y2="50" stroke="black" strokeWidth="2" />
            <text x="260" y="120">Obtuse</text>
          </svg>
          <p>This SVG visually represents an acute angle (less than 90°), a right angle (exactly 90°), and an obtuse angle (between 90° and 180°).</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>A</strong>cute is <strong>A</strong>lligator's mouth (small opening).</p>
          <p><strong>R</strong>ight is <strong>R</strong>ectangle's corner (perfect L-shape).</p>
          <p><strong>O</strong>btuse is <strong>O</strong>pen wide (larger opening).</p>
        </div>
      </section>

      <section id="triangles">
        <h2>Triangles</h2>
        <p>A triangle is a polygon with three sides and three angles. The sum of the angles in any triangle is always 180°.</p>
        <h3>Classification by Angles:</h3>
        <ul>
          <li><strong>Acute-angled Triangle:</strong> All three angles are acute (less than 90°).</li>
          <li><strong>Right-angled Triangle:</strong> One angle is exactly 90°. The side opposite the right angle is called the hypotenuse.</li>
          <li><strong>Obtuse-angled Triangle:</strong> One angle is obtuse (greater than 90°).</li>
        </ul>
        <h3>Classification by Sides:</h3>
        <ul>
          <li><strong>Scalene Triangle:</strong> All three sides are of different lengths, and all three angles are different.</li>
          <li><strong>Isosceles Triangle:</strong> Two sides are of equal length, and the angles opposite to these equal sides are also equal.</li>
          <li><strong>Equilateral Triangle:</strong> All three sides are of equal length, and all three angles are equal (each 60°).</li>
        </ul>
        <div className="visual-example">
          <svg width="300" height="150">
            <polygon points="50,120 150,120 100,50" fill="lightcoral" stroke="red" strokeWidth="2" />
            <text x="80" y="140">Equilateral</text>
            <polygon points="180,120 280,120 280,50" fill="lightblue" stroke="blue" strokeWidth="2" />
            <text x="210" y="140">Right-angled</text>
          </svg>
          <p>This SVG shows an equilateral triangle (all sides and angles equal) and a right-angled triangle (one angle is 90°).</p>
        </div>
      </section>

      <section id="quadrilaterals-polygons">
        <h2>Quadrilaterals and Other Polygons</h2>
        <p>A polygon is a closed figure made up of three or more line segments. Quadrilaterals are a special type of polygon.</p>
        <h3>Quadrilaterals:</h3>
        <table>
          <thead>
            <tr>
              <th>Type of Quadrilateral</th>
              <th>Description</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Square</strong></td>
              <td>A quadrilateral with all four sides equal and all four angles right angles.</td>
              <td>All sides equal, all angles 90°, opposite sides parallel. (e.g., a chessboard square)</td>
            </tr>
            <tr>
              <td><strong>Rectangle</strong></td>
              <td>A quadrilateral with opposite sides equal and all four angles right angles.</td>
              <td>Opposite sides equal and parallel, all angles 90°. (e.g., a door, a book)</td>
            </tr>
            <tr>
              <td><strong>Parallelogram</strong></td>
              <td>A quadrilateral with opposite sides parallel and equal.</td>
              <td>Opposite sides parallel and equal, opposite angles equal. (e.g., a tilted rectangle)</td>
            </tr>
            <tr>
              <td><strong>Rhombus</strong></td>
              <td>A quadrilateral with all four sides equal.</td>
              <td>All sides equal, opposite angles equal, diagonals bisect at 90°. (e.g., a diamond shape)</td>
            </tr>
            <tr>
              <td><strong>Trapezium (Trapezoid)</strong></td>
              <td>A quadrilateral with at least one pair of parallel sides.</td>
              <td>One pair of parallel sides. (e.g., a slice of pizza with the crust cut off straight)</td>
            </tr>
          </tbody>
        </table>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>A square is a special type of rectangle, a special type of rhombus, and a special type of parallelogram!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>We learned how to measure line segments and angles using appropriate tools.</li>
          <li>We explored various types of angles: acute, right, obtuse, straight, reflex, and complete.</li>
          <li>We classified triangles based on their side lengths (scalene, isosceles, equilateral) and angle measures (acute-angled, right-angled, obtuse-angled).</li>
          <li>We understood quadrilaterals and other polygons, including their properties and classifications.</li>
        </ul>
      </div>
    </div>
  );
};

export default UnderstandingElementaryShapesNotes;