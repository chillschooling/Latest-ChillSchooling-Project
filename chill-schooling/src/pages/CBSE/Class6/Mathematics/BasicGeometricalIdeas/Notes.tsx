import React from 'react';
import './Notes.css';

const BasicGeometricalIdeasNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 4: Basic Geometrical Ideas</h1>

      <section id="introduction">
        <h2>Points, Lines, and Angles!</h2>
        <p>
          Welcome to the world of shapes and figures! In this chapter, we will learn about the basic building blocks of geometry: points, lines, and angles. Geometry is all around us, from the shapes of buildings to the paths of planets!
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word "Geometry" comes from Greek words "Geo" (Earth) and "Metron" (Measurement). So, geometry literally means "Earth Measurement"!</p>
        </div>
      </section>

      <section id="points-lines">
        <h2>Points and Line Segments</h2>
        <ul>
          <li><strong>Point:</strong> A point is a tiny dot that shows a location. It has no size or dimension. We represent it with a capital letter, like Point A.</li>
          <li><strong>Line Segment:</strong> When you connect two points, you get a line segment. It has a fixed length and two endpoints.</li>
        </ul>
        <div className="visual-example">
          <svg width="200" height="100">
            <circle cx="50" cy="50" r="3" fill="black" />
            <text x="45" y="40">A</text>
            <circle cx="150" cy="50" r="3" fill="black" />
            <text x="145" y="40">B</text>
            <line x1="50" y1="50" x2="150" y2="50" stroke="black" strokeWidth="2" />
          </svg>
          <p>This SVG shows two distinct points, A and B, connected by a line segment. The segment has a clear start and end point.</p>
        </div>
      </section>

      <section id="lines-rays">
        <h2>Lines and Rays</h2>
        <ul>
          <li><strong>Line:</strong> If you extend a line segment endlessly in both directions, you get a line. It has no endpoints and no definite length.</li>
          <li><strong>Ray:</strong> A ray is a part of a line that has one starting point (endpoint) and goes on forever in one direction.</li>
        </ul>
        <div className="visual-example">
          <svg width="200" height="100">
            <line x1="20" y1="50" x2="180" y2="50" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
              </marker>
            </defs>
          </svg>
          <p>This SVG illustrates a line, extending infinitely in both directions, indicated by the arrows at both ends. It has no defined start or end point.</p>
        </div>
        <div className="visual-example">
          <svg width="200" height="100">
            <circle cx="20" cy="50" r="3" fill="black" />
            <text x="15" y="40">A</text>
            <line x1="20" y1="50" x2="180" y2="50" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
              </marker>
            </defs>
          </svg>
          <p>This SVG shows a ray starting at point A and extending infinitely in one direction, indicated by the arrow. It has a definite starting point but no end point.</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a <strong>Point</strong> as a dot. A <strong>Line Segment</strong> is a piece of string. A <strong>Line</strong> is a never-ending road. A <strong>Ray</strong> is like a sunbeam, starting from the sun and going outwards!</p>
        </div>
      </section>

      <section id="curves-polygons">
        <h2>Curves and Polygons</h2>
        <ul>
          <li><strong>Curve:</strong> Any drawing made without lifting the pencil is a curve. It can be open or closed.</li>
        </ul>
        <div className="example-box">
          <h4>Examples of Curves:</h4>
          <p><strong>Open Curve:</strong> A curve that does not end at the starting point. (e.g., a wavy line, a spiral)</p>
          <p><strong>Closed Curve:</strong> A curve that starts and ends at the same point, forming a closed loop. (e.g., a circle, a square, a triangle)</p>
        </div>
        <h3>Polygon:</h3>
        <p>A simple closed curve made up entirely of line segments.</p>
        <h3>Types of Polygons:</h3>
        <table>
          <thead>
            <tr>
              <th>Number of Sides</th>
              <th>Name of Polygon</th>
              <th>Example Shape</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>Triangle</td>
              <td><svg width="50" height="50"><polygon points="25,5 45,45 5,45" fill="none" stroke="black" strokeWidth="1" /></svg></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Quadrilateral</td>
              <td><svg width="50" height="50"><rect x="10" y="10" width="30" height="30" fill="none" stroke="black" strokeWidth="1" /></svg></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Pentagon</td>
              <td><svg width="50" height="50"><polygon points="25,5 45,20 40,45 10,45 5,20" fill="none" stroke="black" strokeWidth="1" /></svg></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Hexagon</td>
              <td><svg width="50" height="50"><polygon points="25,5 45,15 45,35 25,45 5,35 5,15" fill="none" stroke="black" strokeWidth="1" /></svg></td>
            </tr>
          </tbody>
        </table>
        <div className="visual-example">
          <svg width="300" height="150">
            <polygon points="50,50 150,50 100,120" fill="lightblue" stroke="blue" strokeWidth="2" />
            <rect x="180" y="50" width="100" height="70" fill="lightgreen" stroke="green" strokeWidth="2" />
          </svg>
          <p>A triangle and a rectangle are examples of polygons.</p>
        </div>
      </section>

      <section id="intersecting-parallel-lines">
        <h2>Intersecting and Parallel Lines</h2>
        <ul>
          <li><strong>Intersecting Lines:</strong> Two lines are intersecting if they cross each other at a common point.</li>
          <li><strong>Parallel Lines:</strong> Two lines are parallel if they never meet, no matter how far they are extended. The distance between them remains constant.</li>
        </ul>
        <div className="example-box">
          <h4>Examples:</h4>
          <p><strong>Intersecting Lines:</strong> Think of two roads crossing each other, or the hands of a clock at 3 o'clock.</p>
          <p><strong>Parallel Lines:</strong> Think of railway tracks, or the opposite edges of a ruler.</p>
        </div>
      </section>

      <section id="angles-triangles">
        <h2>Angles and Triangles</h2>
        <ul>
          <li><strong>Angle:</strong> An angle is formed when two rays meet at a common endpoint, called the vertex.</li>
          <li><strong>Vertex:</strong> The common endpoint where the two rays meet.</li>
          <li><strong>Arms:</strong> The two rays forming the angle.</li>
        </ul>
        <h3>Types of Angles:</h3>
        <table>
          <thead>
            <tr>
              <th>Type of Angle</th>
              <th>Description</th>
              <th>Example (Degrees)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Acute Angle</strong></td>
              <td>An angle less than 90°.</td>
              <td>30°, 65°, 89°</td>
            </tr>
            <tr>
              <td><strong>Right Angle</strong></td>
              <td>An angle that is exactly 90°.</td>
              <td>90°</td>
            </tr>
            <tr>
              <td><strong>Obtuse Angle</strong></td>
              <td>An angle greater than 90° but less than 180°.</td>
              <td>100°, 145°, 179°</td>
            </tr>
            <tr>
              <td><strong>Straight Angle</strong></td>
              <td>An angle that is exactly 180°. Forms a straight line.</td>
              <td>180°</td>
            </tr>
            <tr>
              <td><strong>Reflex Angle</strong></td>
              <td>An angle greater than 180° but less than 360°.</td>
              <td>200°, 300°</td>
            </tr>
          </tbody>
        </table>
        <h3>Types of Triangles:</h3>
        <p>Triangles can be classified based on their sides and angles.</p>
        <table>
          <thead>
            <tr>
              <th>Classification by Sides</th>
              <th>Description</th>
              <th>Classification by Angles</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Scalene Triangle</strong></td>
              <td>All three sides are of different lengths.</td>
              <td><strong>Acute-angled Triangle</strong></td>
              <td>All three angles are acute (less than 90°).</td>
            </tr>
            <tr>
              <td><strong>Isosceles Triangle</strong></td>
              <td>Two sides are of equal length.</td>
              <td><strong>Right-angled Triangle</strong></td>
              <td>One angle is a right angle (exactly 90°).</td>
            </tr>
            <tr>
              <td><strong>Equilateral Triangle</strong></td>
              <td>All three sides are of equal length. All angles are 60°.</td>
              <td><strong>Obtuse-angled Triangle</strong></td>
              <td>One angle is obtuse (greater than 90°).</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>We learned about fundamental geometrical concepts: points, line segments, lines, and rays.</li>
          <li>We explored different types of curves and polygons, including their classification.</li>
          <li>We understood angles, their components, and various types of angles.</li>
          <li>We classified triangles based on both their side lengths and angle measures.</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicGeometricalIdeasNotes;