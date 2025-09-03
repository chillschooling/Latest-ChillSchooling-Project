import React from 'react';
import './Notes.css';

const TheKiteNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Poem: The Kite</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          The poem "The Kite" by Harry Behn vividly describes the excitement and beauty of flying a kite. It portrays a new kite soaring high in a clear blue sky, moving gracefully as it dives, dips, and snaps its tail, much like a ship sailing on waves.
        </p>
        <p>
          The kite rides the wind, climbing with strong gusts and appearing to rest when the wind lessens. The poem also touches upon the moment when the string slackens, and the kite flier has to reel it in and run to catch a new breeze, allowing the kite to ascend again.
        </p>
        <p>
          The poem contrasts the vibrant and majestic sight of a new kite with the sad image of a torn kite stuck in a tree, highlighting the fleeting nature of its perfect flight.
        </p>
      </section>

      <section id="characters">
        <h2>Characters (Implied)</h2>
        <p>
          The poem does not feature specific named characters. The "character" is primarily the kite itself, described with personification, and an implied observer or flier (which can be assumed to be the poet or a child) who experiences the joy of flying it.
        </p>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The central theme is <strong>The Joy of Flying a Kite</strong>, emphasizing the happiness and enthusiasm associated with this simple activity.
        </p>
        <p>
          The kite's flight symbolizes <strong>Freedom and Adventure</strong>, representing the longing for exploration.
        </p>
        <p>
          The poem highlights the <strong>Beauty of Nature</strong>, specifically the sky and wind, which enable the kite's graceful movements.
        </p>
        <p>
          It also evokes a sense of wonder and reflects the <strong>Childhood Imagination</strong>.
        </p>
      </section>
    </div>
  );
};

export default TheKiteNotes;