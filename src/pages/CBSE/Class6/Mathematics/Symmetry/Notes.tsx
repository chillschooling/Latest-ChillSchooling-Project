import React from 'react';
import './Notes.css';

const SymmetryNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 13: Symmetry</h1>

      <section id="introduction">
        <h2>Exploring Balance and Patterns</h2>
        <p>
          Look around you! Many things in nature and in designs have a special property called <strong>symmetry</strong>. It means that one part of an object is a mirror image of the other part, or that it looks the same after certain transformations.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Symmetry is not just in math! It's found in art, architecture (like the Taj Mahal), music, and even in the human body!</p>
        </div>
      </section>

      <section id="line-symmetry">
        <h2>Line Symmetry</h2>
        <p>
          When a figure can be folded along a line such that the two halves match exactly, it has line symmetry. The fold line is called the <strong>line of symmetry</strong> or <strong>axis of symmetry</strong>.
        </p>
        <div className="visual-example">
          <svg width="200" height="150">
            {/* Square with a vertical line of symmetry */}
            <rect x="50" y="25" width="100" height="100" fill="lightblue" stroke="blue" strokeWidth="2" />
            <line x1="100" y1="25" x2="100" y2="125" stroke="red" strokeWidth="2" strokeDasharray="5,5" />
            <text x="80" y="140">Line of Symmetry</text>
          </svg>
          <p>This SVG shows a square with a dashed red line representing a line of symmetry. If you fold the square along this line, the two halves would perfectly overlap, demonstrating line symmetry.</p>
        </div>
        <h3>Examples of Line Symmetry:</h3>
        <table>
          <thead>
            <tr>
              <th>Shape</th>
              <th>Number of Lines of Symmetry</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Isosceles Triangle</strong></td>
              <td>1</td>
              <td><svg width="50" height="50"><polygon points="25,5 5,45 45,45" fill="none" stroke="black" strokeWidth="1" /><line x1="25" y1="5" x2="25" y2="45" stroke="red" strokeWidth="1" strokeDasharray="2,2" /></svg></td>
            </tr>
            <tr>
              <td><strong>Equilateral Triangle</strong></td>
              <td>3</td>
              <td><svg width="50" height="50"><polygon points="25,5 5,45 45,45" fill="none" stroke="black" strokeWidth="1" /></svg></td>
            </tr>
            <tr>
              <td><strong>Rectangle</strong></td>
              <td>2</td>
              <td><svg width="50" height="50"><rect x="10" y="15" width="30" height="20" fill="none" stroke="black" strokeWidth="1" /></svg></td>
            </tr>
            <tr>
              <td><strong>Square</strong></td>
              <td>4</td>
              <td><svg width="50" height="50"><rect x="10" y="10" width="30" height="30" fill="none" stroke="black" strokeWidth="1" /></svg></td>
            </tr>
            <tr>
              <td><strong>Circle</strong></td>
              <td>Infinite</td>
              <td><svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="none" stroke="black" strokeWidth="1" /></svg></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="rotational-symmetry">
        <h2>Rotational Symmetry</h2>
        <p>
          A figure has rotational symmetry if it looks the same after being rotated less than a full turn (360°) around a fixed point (the center of rotation). The number of times it looks the same during a full turn is called the <strong>order of rotational symmetry</strong>.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>A square has rotational symmetry of order 4 because it looks the same after rotations of 90°, 180°, 270°, and 360°.</p>
          <p>A regular pentagon has rotational symmetry of order 5.</p>
          <p>A circle has infinite rotational symmetry.</p>
          <p>The letter 'H' has rotational symmetry of order 2 (looks the same after 180° rotation).</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a fan or a pinwheel spinning. If it looks the same at different points during its spin, it has rotational symmetry!</p>
        </div>
      </section>

      <section id="reflection-symmetry">
        <h2>Reflection Symmetry (Mirror Symmetry)</h2>
        <p>
          Reflection symmetry is another name for line symmetry. When an object has reflection symmetry, one half of the object is the mirror image of the other half across a line (the mirror line or axis of symmetry). This is exactly the same concept as line symmetry.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Symmetry describes balance and patterns in shapes and objects.</li>
          <li><strong>Line symmetry</strong> occurs when a figure can be folded along a line (axis of symmetry) to match exactly.</li>
          <li><strong>Rotational symmetry</strong> occurs when a figure looks the same after being rotated by a certain angle less than 360°. The order of rotational symmetry is the number of times it looks the same in a full turn.</li>
          <li><strong>Reflection symmetry</strong> is another term for line symmetry, referring to a mirror image across a line.</li>
        </ul>
      </div>
    </div>
  );
};

export default SymmetryNotes;