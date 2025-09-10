import React from 'react';
import './Notes.css';

const PracticalGeometryNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 14: Practical Geometry</h1>

      <section id="introduction">
        <h2>Drawing Shapes with Tools</h2>
        <p>
          Practical Geometry is all about drawing shapes accurately using special tools like a compass, ruler, divider, and protractor. Let's learn how to construct different geometrical figures! Precision is key in these constructions.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Ancient Greek mathematicians like Euclid developed many of the geometric constructions we still use today, using only a compass and a straightedge!</p>
        </div>
        <h3>Geometry Box Tools:</h3>
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Ruler (Straightedge)</strong></td>
              <td>To draw line segments and measure their lengths.</td>
            </tr>
            <tr>
              <td><strong>Compass</strong></td>
              <td>To draw circles and arcs, and to mark off equal lengths.</td>
            </tr>
            <tr>
              <td><strong>Divider</strong></td>
              <td>To compare lengths of line segments.</td>
            </tr>
            <tr>
              <td><strong>Set-Squares</strong></td>
              <td>To draw perpendicular and parallel lines. (Usually a pair: 30-60-90 and 45-45-90 triangles)</td>
            </tr>
            <tr>
              <td><strong>Protractor</strong></td>
              <td>To measure and draw angles.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="basic-constructions">
        <h2>Basic Constructions</h2>
        <h3>1. Construction of a Circle:</h3>
        <p>A circle is a set of all points in a plane that are at a fixed distance (radius) from a fixed point (center).</p>
        <p><strong>Steps:</strong></p>
        <ol>
          <li>Open the compass to the desired radius (e.g., 3 cm).</li>
          <li>Place the pointed leg of the compass firmly on the paper (this will be the center of your circle).</li>
          <li>Hold the compass from the top and rotate the pencil leg around to draw the circle.</li>
        </ol>
        <div className="visual-example">
          <svg width="200" height="200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="black" strokeWidth="2" />
            <circle cx="100" cy="100" r="3" fill="red" />
            <text x="105" y="105">Center</text>
          </svg>
          <p>This SVG shows a circle with its center marked. A compass is used to draw such a perfect circle by keeping one leg fixed at the center and rotating the other leg with a pencil.</p>
        </div>

        <h3>2. Construction of a Line Segment:</h3>
        <p>A line segment is a part of a line that has two distinct endpoints.</p>
        <p><strong>Steps:</strong></p>
        <ol>
          <li>Place the ruler on the paper.</li>
          <li>Mark a point 'A' on the paper.</li>
          <li>Align the '0' mark of the ruler with point 'A'.</li>
          <li>Mark another point 'B' at the desired length (e.g., 5 cm).</li>
          <li>Draw a line connecting point 'A' to point 'B'.</li>
        </ol>
        <div className="visual-example">
          <svg width="200" height="50">
            <line x1="20" y1="25" x2="180" y2="25" stroke="black" strokeWidth="2" />
            <text x="100" y="40">Line Segment</text>
          </svg>
          <p>This SVG shows a line segment, which is a part of a line with two distinct endpoints. Its length can be measured using a ruler.</p>
        </div>

        <h3>3. Construction of a Perpendicular Line:</h3>
        <p>A perpendicular line forms a 90° angle with another line. You can construct a perpendicular line to a given line using a compass and ruler.</p>
        <p><strong>Steps (Perpendicular to a line through a point on it):</strong></p>
        <ol>
          <li>Draw a line 'l' and mark a point 'P' on it.</li>
          <li>With P as center, draw an arc of any convenient radius intersecting the line 'l' at two points, say A and B.</li>
          <li>With A and B as centers and a radius greater than AP, draw two arcs intersecting each other at a point, say Q.</li>
          <li>Join P and Q. The line PQ is perpendicular to line 'l'.</li>
        </ol>
        <div className="visual-example">
          <svg width="200" height="150">
            <line x1="20" y1="100" x2="180" y2="100" stroke="black" strokeWidth="2" />
            <line x1="100" y1="100" x2="100" y2="20" stroke="blue" strokeWidth="2" />
            <circle cx="100" cy="100" r="3" fill="red" />
            <text x="105" y="115">P</text>
            <text x="105" y="15">Q</text>
            <text x="170" y="115">L</text>
          </svg>
          <p>This SVG shows a line 'L' and a perpendicular line PQ intersecting it at point P, forming a 90° angle. This construction can be done using a compass and ruler.</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a <strong>Compass</strong> as a "circle maker" and a <strong>Protractor</strong> as an "angle checker"!</p>
        </div>
      </section>

      <section id="angle-construction">
        <h2>Construction of Angles</h2>
        <p>
          We can construct specific angles using a compass and ruler, or measure and draw them using a protractor.
        </p>
        <h3>Constructing a 60° Angle:</h3>
        <ol>
          <li>Draw a ray OA.</li>
          <li>With O as center and a convenient radius, draw an arc cutting OA at B.</li>
          <li>With B as center and the same radius, draw an arc cutting the first arc at C.</li>
          <li>Join OC. Angle AOC is 60°.</li>
        </ol>
        <h3>Constructing a 90° Angle:</h3>
        <ol>
          <li>Draw a ray OA.</li>
          <li>With O as center, draw a semicircle intersecting OA at P.</li>
          <li>With P as center and the same radius, draw an arc cutting the semicircle at Q.</li>
          <li>With Q as center and the same radius, draw an arc cutting the semicircle at R.</li>
          <li>With Q and R as centers and a radius greater than half of QR, draw two arcs intersecting each other at S.</li>
          <li>Join OS. Angle AOS is 90°.</li>
        </ol>
      </section>

      <section id="bisectors">
        <h2>Angle Bisector and Perpendicular Bisector</h2>
        <h3>Angle Bisector:</h3>
        <p>
          An angle bisector is a ray that divides an angle into two equal angles.
        </p>
        <ol>
          <li>Draw an angle ABC.</li>
          <li>With B as center and a convenient radius, draw an arc intersecting BA at P and BC at Q.</li>
          <li>With P as center and a radius greater than half of PQ, draw an arc.</li>
          <li>With Q as center and the same radius, draw another arc intersecting the previous arc at R.</li>
          <li>Join BR. BR is the angle bisector of angle ABC.</li>
        </ol>
        <h3>Perpendicular Bisector of a Line Segment:</h3>
        <p>
          A perpendicular bisector of a line segment is a line that divides the segment into two equal parts and is perpendicular to it.
        </p>
        <ol>
          <li>Draw a line segment AB.</li>
          <li>With A as center and a radius more than half of AB, draw arcs above and below AB.</li>
          <li>With B as center and the same radius, draw arcs intersecting the previous arcs at P and Q.</li>
          <li>Join PQ. PQ is the perpendicular bisector of AB.</li>
        </ol>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>We learned about various geometry tools and their specific uses for accurate constructions.</li>
          <li>We practiced step-by-step constructions of circles, line segments, and perpendicular lines.</li>
          <li>Practical geometry helps us draw precise figures and understand their properties visually.</li>
        </ul>
      </div>
    </div>
  );
};

export default PracticalGeometryNotes;