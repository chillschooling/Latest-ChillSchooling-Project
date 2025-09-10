import React from 'react';
import './Notes.css';

const DataHandlingNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 9: Data Handling</h1>

      <section id="introduction">
        <h2>Collecting and Organizing Information</h2>
        <p>
          Have you ever collected information, like the number of students in your class who like different sports? That's what data handling is all about! It's about collecting, organizing, and understanding information to make sense of it.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Data handling is used everywhere, from predicting weather to analyzing sports statistics and even in designing video games!</p>
        </div>
      </section>

      <section id="recording-data">
        <h2>Recording Data</h2>
        <p>
          When we collect data, we need to record it in a way that's easy to understand and analyze. <strong>Tally marks</strong> are a simple and effective way to do this, especially when counting frequencies.
        </p>
        <h3>Using Tally Marks:</h3>
        <p>For every count, we draw a vertical line. For the fifth count, we draw a diagonal line across the previous four, making a bundle of five.</p>
        <div className="example-box">
          <h4>Example: Favorite Fruits in a Class</h4>
          <p>Let's say students chose fruits as follows: Apple, Banana, Orange, Apple, Apple, Banana, Orange, Apple, Banana, Apple, Banana, Banana, Orange, Apple.</p>
          <table>
            <thead>
              <tr>
                <th>Fruit</th>
                <th>Tally Marks</th>
                <th>Number of Students (Frequency)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple</td>
                <td>|||| |</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Banana</td>
                <td>|||| ||</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Orange</td>
                <td>|||</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p>This table is called a <strong>Frequency Distribution Table</strong>.</p>
        </div>
      </section>

      <section id="pictographs">
        <h2>Pictographs</h2>
        <p>
          A pictograph uses pictures or symbols to represent data. Each symbol represents a certain number of items. Pictographs are easy to understand and visually appealing.
        </p>
        <h3>How to Draw a Pictograph:</h3>
        <ol>
          <li>Choose a suitable symbol to represent the data.</li>
          <li>Decide on a scale (what each symbol will represent).</li>
          <li>Draw the symbols according to the frequency.</li>
          <li>Give a title to the pictograph and mention the scale.</li>
        </ol>
        <div className="visual-example">
          <p>[Image: A pictograph showing favorite colors, where each smiley face represents 2 students. For example, Red: :) :) (4 students), Blue: :) :) :) (6 students).]</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>Pic</strong>tographs use <strong>Pic</strong>tures!</p>
        </div>
      </section>

      <section id="bar-graphs">
        <h2>Bar Graphs</h2>
        <p>
          A bar graph uses bars of uniform width drawn either horizontally or vertically with equal spacing between them. The length (or height) of each bar shows the quantity or value it represents.
        </p>
        <h3>How to Draw a Bar Graph:</h3>
        <ol>
          <li>Draw two perpendicular lines (axes).</li>
          <li>Label the horizontal axis (x-axis) and vertical axis (y-axis).</li>
          <li>Choose a suitable scale for the vertical axis (e.g., 1 unit length = 5 students).</li>
          <li>Draw bars of uniform width with equal spacing between them. The height of each bar should correspond to the frequency.</li>
          <li>Give a title to the bar graph.</li>
        </ol>
        <div className="visual-example">
          <p>[Image: A simple bar graph showing the number of books read by students in a month. X-axis: Months, Y-axis: Number of Books. Bars for Jan, Feb, Mar, Apr.]</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p><strong>Bar</strong> graphs use <strong>Bar</strong>s!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Data handling involves collecting, organizing, and interpreting information.</li>
          <li>We learned to record data efficiently using tally marks and frequency distribution tables.</li>
          <li>We understood how to represent data visually using pictographs (pictures) and bar graphs (bars).</li>
          <li>Pictographs use symbols with a defined scale, while bar graphs use bar heights to show quantities.</li>
        </ul>
      </div>
    </div>
  );
};

export default DataHandlingNotes;