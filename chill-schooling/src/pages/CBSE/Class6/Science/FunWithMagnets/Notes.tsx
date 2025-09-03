import React from 'react';
import './Notes.css';

const FunWithMagnetsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 13: Fun with Magnets</h1>

      <section id="introduction">
        <h2>The Magic of Magnets</h2>
        <p>
          Have you ever played with magnets? They have a fascinating ability to attract certain objects. This chapter explores the exciting world of magnets, their properties, and how we use them in our daily lives.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word 'magnet' is believed to have come from Magnesia, a region in ancient Greece where natural magnets were first discovered!</p>
        </div>
      </section>

      <section id="magnetic-and-non-magnetic-materials">
        <h2>Magnetic and Non-Magnetic Materials</h2>
        <ul>
          <li>
            <strong>Magnetic Materials:</strong> Materials that are attracted by a magnet. (e.g., Iron, Nickel, Cobalt)
          </li>
          <li>
            <strong>Non-Magnetic Materials:</strong> Materials that are not attracted by a magnet. (e.g., Wood, Plastic, Paper, Copper, Aluminium)
          </li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>A magnet will pick up an iron nail but not a plastic spoon.</p>
        </div>
      </section>

      <section id="poles-of-a-magnet">
        <h2>Poles of a Magnet</h2>
        <p>
          Every magnet, regardless of its shape, has two poles: a North Pole (N) and a South Pole (S). The magnetic force is strongest at these poles.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Imagine a magnet is like a tiny Earth, with a North and South Pole!</p>
        </div>
      </section>

      <section id="finding-directions">
        <h2>Finding Directions</h2>
        <p>
          A freely suspended magnet always aligns itself in the North-South direction. This property is used in compasses to find directions.
        </p>
        <div className="example-box">
          <h4>Compass:</h4>
          <p>A compass is a device that has a small magnetised needle that rotates freely. It is used by sailors, pilots, and travelers to find directions.</p>
        </div>
      </section>

      <section id="attraction-and-repulsion">
        <h2>Attraction and Repulsion Between Magnets</h2>
        <ul>
          <li>
            <strong>Attraction:</strong> Opposite poles of two magnets attract each other (North-South).
          </li>
          <li>
            <strong>Repulsion:</strong> Similar poles of two magnets repel each other (North-North or South-South).
          </li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>If you bring the North pole of one magnet near the South pole of another, they will pull towards each other. If you bring two North poles together, they will push each other away.</p>
        </div>
      </section>

      <section id="making-your-own-magnet">
        <h2>Making Your Own Magnet</h2>
        <p>
          You can make a temporary magnet by stroking an iron piece (like a nail or a needle) repeatedly with one pole of a bar magnet in the same direction. After many strokes, the iron piece will become a magnet.
        </p>
      </section>

      <section id="care-of-magnets">
        <h2>Care of Magnets</h2>
        <p>
          Magnets can lose their magnetic properties if they are heated, hammered, dropped from a height, or stored improperly. To keep magnets strong, store them in pairs with opposite poles facing each other, separated by a piece of wood, and with soft iron pieces across their ends.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Magnets attract magnetic materials (iron, nickel, cobalt).</li>
          <li>Every magnet has a North and a South Pole, where magnetic force is strongest.</li>
          <li>A freely suspended magnet aligns in the North-South direction.</li>
          <li>Opposite poles attract, and similar poles repel.</li>
          <li>Magnets can be made and can lose their properties if not cared for.</li>
        </ul>
      </div>
    </div>
  );
};

export default FunWithMagnetsNotes;
