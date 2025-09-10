import React from 'react';
import './Notes.css';

const MotionAndMeasurementOfDistancesNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 10: Motion and Measurement of Distances</h1>

      <section id="introduction">
        <h2>Understanding Movement and How We Measure It</h2>
        <p>
          Everything around us is either moving or at rest. From a tiny ant walking to a train speeding by, motion is a fundamental part of our world. To understand motion, we need to be able to measure distances accurately.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Early humans used their body parts, like handspans and cubits, to measure distances, but these were not very accurate!</p>
        </div>
      </section>

      <section id="history-of-transport">
        <h2>History of Transport</h2>
        <p>
          In ancient times, people walked long distances or used animals for transport. The invention of the wheel revolutionized transport, followed by the development of steam engines, automobiles, and airplanes, making travel faster and easier.
        </p>
      </section>

      <section id="measurement-of-distance">
        <h2>Measurement of Distance</h2>
        <p>
          Distance is the measure of how far an object has traveled or the length between two points. Accurate measurement is crucial in science and daily life.
        </p>

        <h3>Standard Units of Measurement:</h3>
        <p>
          To ensure uniformity and accuracy, standard units of measurement are used. The International System of Units (SI units) is widely accepted.
        </p>
        <ul>
          <li>
            <strong>Metre (m):</strong> The standard unit of length.
          </li>
          <li>
            <strong>Centimetre (cm):</strong> 1 metre = 100 centimetres.
          </li>
          <li>
            <strong>Kilometre (km):</strong> 1 kilometre = 1000 metres.
          </li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The length of a classroom might be measured in metres, while the distance between two cities is measured in kilometres.</p>
        </div>

        <h3>Measuring Length Accurately:</h3>
        <p>
          When using a scale or measuring tape, ensure proper technique:
        </p>
        <ul>
          <li>Place the scale in contact with the object along its length.</li>
          <li>Avoid parallax error (viewing from an angle). Look perpendicularly at the mark.</li>
          <li>If the end of the scale is worn out, start measuring from another full mark (e.g., 1 cm mark) and subtract the initial reading from the final reading.</li>
        </ul>
      </section>

      <section id="types-of-motion">
        <h2>Types of Motion</h2>
        <p>Objects can exhibit different types of motion:</p>

        <h3>1. Rectilinear Motion:</h3>
        <p>
          Motion along a straight line.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>A car moving on a straight road, a stone falling from a height, a soldier marching in a parade.</p>
        </div>

        <h3>2. Circular Motion:</h3>
        <p>
          Motion along a circular path.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>The hands of a clock, a fan blade rotating, a merry-go-round.</p>
        </div>

        <h3>3. Periodic Motion:</h3>
        <p>
          Motion that repeats itself after a fixed interval of time.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>A swinging pendulum, the motion of a child on a swing, the beating of a heart.</p>
        </div>

        <h3>4. Rotational Motion:</h3>
        <p>
          Motion of an object about its own axis.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>A spinning top, the Earth rotating on its axis.</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of <strong>Rectilinear</strong> as a straight line, <strong>Circular</strong> as a circle, and <strong>Periodic</strong> as something that happens again and again!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Motion is the change in position of an object over time.</li>
          <li>Standard units (SI units) like the metre are used for accurate measurement of distances.</li>
          <li>Different types of motion include rectilinear (straight line), circular, periodic (repeating), and rotational (spinning on axis).</li>
        </ul>
      </div>
    </div>
  );
};

export default MotionAndMeasurementOfDistancesNotes;
