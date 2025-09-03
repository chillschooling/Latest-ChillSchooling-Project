import React from 'react';
import './Notes.css';

const MapsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 4: Maps</h1>

      <section id="introduction">
        <h2>What is a Map?</h2>
        <p>
          A map is a representation or a drawing of the Earth’s surface or a part of it drawn on a flat surface according to a scale. But it is impossible to flatten a round shape completely. We find that maps are useful to us for various purposes. One map shows a small area and a few facts. Another map may show a large area like a continent or countries.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>An atlas is a book of maps. Atlases are of various sizes, measurements drawn on different scales.</p>
        </div>
      </section>

      <section id="types-of-maps">
        <h2>Types of Maps</h2>
        <p>Maps can be broadly classified into three main types:</p>
        <h3>1. Physical Maps:</h3>
        <p>
          Maps showing natural features of the Earth such as mountains, plateaus, plains, oceans etc. are called Physical Maps or Relief Maps.
        </p>
        <h3>2. Political Maps:</h3>
        <p>
          Maps showing cities, towns and villages, and different countries and states of the world with their boundaries are called Political Maps.
        </p>
        <h3>3. Thematic Maps:</h3>
        <p>
          Some maps focus on specific information; for example, road maps, rainfall maps, maps showing distribution of forests, industries, etc. are known as Thematic Maps. Suitable titles are given to these maps based on the information provided.
        </p>
      </section>

      <section id="components-of-maps">
        <h2>Components of Maps</h2>
        <p>There are three Components of Maps – Distance, Direction and Symbol.</p>
        <h3>1. Distance:</h3>
        <p>
          Maps are drawings, which reduce the entire world or a part of it to fit on a sheet of paper. This reduction is done with the help of a scale. Scale is the ratio between the actual distance on the ground and the distance shown on the map.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>If you travel 10 km from your home to school, and on a map, this distance is shown as 2 cm, then the scale of the map is 1 cm = 5 km.</p>
        </div>
        <h3>2. Direction:</h3>
        <p>
          Most maps have an arrow marked with the letter ‘N’ at the upper right hand corner. This arrow shows the North direction. It is called the North line. When you know the North, you can find out other directions, for example, East, West and South.
        </p>
        <p>
          There are four major directions, North, South, East and West. These are called cardinal points. Other four intermediate directions are north-east (NE), south-east (SE), south-west (SW) and north-west (NW).
        </p>
        <h3>3. Symbols:</h3>
        <p>
          It is not possible to draw on a map the actual shape and size of different features like buildings, roads, bridges, trees, railway lines or a well. So, they are shown by using certain letters, shades, colours, pictures and lines. These symbols give a lot of information in a limited space.
        </p>
        <p>
          With the use of these symbols, maps can be drawn easily and are simple to read. Even if you don’t know the language of an area and therefore cannot ask someone for directions, you can collect information from maps with the help of these symbols. Maps have a universal language that can be understood by all. There is an international agreement regarding the use of these symbols. These are called Conventional Symbols.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Remember the three components: Distance (Scale), Direction (Compass), and Symbols (Legend)!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>A map is a flat representation of the Earth's surface or a part of it, drawn to scale.</li>
          <li>Maps are of three types: Physical (natural features), Political (boundaries, cities), and Thematic (specific information like rainfall).</li>
          <li>The three main components of a map are Distance (represented by scale), Direction (shown by a North line and cardinal points), and Symbols (conventional signs for features).</li>
          <li>Conventional symbols provide a universal language for reading maps.</li>
        </ul>
      </div>
    </div>
  );
};

export default MapsNotes;
