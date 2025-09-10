import React from 'react';
import './Notes.css';

const MotionAndTimeNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 9: Motion and Time</h1>

      <section id="motion-and-rest">
        <h2>Motion and Rest</h2>
        <ul>
          <li><strong>Motion:</strong> An object is in motion if its position changes with respect to time.</li>
          <li><strong>Rest:</strong> An object is at rest if its position remains constant with respect to time.</li>
        </ul>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The perception of motion depends on the frame of reference. A person inside a moving bus is at rest relative to the bus, but in motion relative to the road.</p>
        </div>
      </section>

      <section id="types-of-motion">
        <h2>Types of Motion</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Type of Motion</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rectilinear Motion</strong></td>
                <td>Motion in a straight line.</td>
                <td>A car moving on a straight road.</td>
              </tr>
              <tr>
                <td><strong>Circular Motion</strong></td>
                <td>Motion along a circular path.</td>
                <td>Motion of the Earth around the Sun.</td>
              </tr>
              <tr>
                <td><strong>Periodic Motion</strong></td>
                <td>Motion that repeats itself after regular intervals of time.</td>
                <td>Motion of a swing.</td>
              </tr>
              <tr>
                <td><strong>Oscillatory Motion</strong></td>
                <td>A specific type of periodic motion where a body moves back and forth.</td>
                <td>To-and-fro motion of a simple pendulum.</td>
              </tr>
              <tr>
                <td><strong>Uniform Motion</strong></td>
                <td>Constant speed, covering equal distances in equal time intervals.</td>
                <td>A car moving at a steady 60 km/h on a highway.</td>
              </tr>
              <tr>
                <td><strong>Non-Uniform Motion</strong></td>
                <td>Speed changes, covering unequal distances in equal time intervals.</td>
                <td>A car moving in city traffic.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="speed">
        <h2>Speed</h2>
        <p>
          <strong>Speed</strong> is the rate at which an object changes its position. It is the distance covered by an object per unit time.
        </p>
        <div className="memory-trick">
          <h4>Formula for Speed:</h4>
          <p>Speed = Total Distance Covered / Total Time Taken</p>
        </div>
        <h4>Units of Speed:</h4>
        <ul>
          <li>Standard (SI) unit: metres per second (m/s)</li>
          <li>Common unit: kilometres per hour (km/h)</li>
        </ul>
        <div className="example-box">
          <h4>Measuring Speed and Distance:</h4>
          <ul>
            <li><strong>Speedometer:</strong> Measures speed in km/h.</li>
            <li><strong>Odometer:</strong> Measures distance travelled in meters or kilometres.</li>
          </ul>
        </div>
      </section>

      <section id="measurement-of-time">
        <h2>Measurement of Time</h2>
        <p>
          Early methods of time measurement used natural events that repeated regularly (e.g., sundials, sand clocks, water clocks).
        </p>
        <h4>Simple Pendulum:</h4>
        <ul>
          <li>Consists of a metallic ball (bob) suspended by a thread.</li>
          <li>Exhibits oscillatory motion.</li>
          <li><strong>Oscillation:</strong> One complete to-and-fro movement.</li>
          <li><strong>Time Period:</strong> The time taken by the pendulum bob to complete one full oscillation.</li>
        </ul>
        <div className="did-you-know">
          <h4>Units of Time:</h4>
          <p>The basic unit of time is the second (s). Other common units include minutes and hours.</p>
        </div>
      </section>

      <section id="distance-time-graphs">
        <h2>Distance-Time Graphs</h2>
        <p>
          Distance-time graphs are used to represent and study the motion of an object visually.
        </p>
        <ul>
          <li>Time is represented on the X-axis (horizontal).</li>
          <li>Distance is represented on the Y-axis (vertical).</li>
        </ul>
        <div className="example-box">
          <h4>Interpretation of Graphs:</h4>
          <ul>
            <li><strong>Straight line:</strong> Uniform motion.</li>
            <li><strong>Straight line parallel to X-axis:</strong> Object at rest.</li>
            <li><strong>Curved line:</strong> Non-uniform motion.</li>
            <li>The slope of the graph indicates speed (steeper slope = higher speed).</li>
          </ul>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Motion is change in position; rest is no change.</li>
          <li>Types of motion include rectilinear, circular, periodic, and oscillatory.</li>
          <li>Speed is distance per unit time (m/s or km/h).</li>
          <li>Time is measured using periodic events, like a simple pendulum.</li>
          <li>Distance-time graphs visually represent motion and speed.</li>
        </ul>
      </div>
    </div>
  );
};

export default MotionAndTimeNotes;
