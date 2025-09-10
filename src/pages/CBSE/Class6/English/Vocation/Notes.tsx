import React from 'react';
import './Notes.css';

const VocationNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Poem: Vocation</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          The poem "Vocation" by Rabindranath Tagore explores a child's innocent perspective on the world of work and freedom. The school-going child, at different times of the day, observes various working individuals and wishes to trade places with them.
        </p>
        <p>
          In the morning, he sees a hawker selling bangles and envies the hawker's freedom to roam. In the afternoon, he observes a gardener digging and wishes he could be like him, working freely without being scolded. At night, he sees a watchman with a lantern and desires the watchman's perceived freedom to stay up all night.
        </p>
        <p>
          The child is unaware of the hardships and responsibilities associated with these professions, highlighting his innocent and naive understanding of adult life.
        </p>
      </section>

      <section id="characters">
        <h2>Characters</h2>
        <ul>
          <li>
            <strong>The Child (Speaker/Narrator):</strong> The central character, expressing his desires and observations.
          </li>
          <li>
            <strong>The Hawker:</strong> A person selling bangles, observed by the child in the morning.
          </li>
          <li>
            <strong>The Gardener:</strong> A person digging in a garden, observed by the child in the afternoon.
          </li>
          <li>
            <strong>The Watchman:</strong> A person patrolling the streets at night, seen by the child from his window.
          </li>
        </ul>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The most prominent theme is the <strong>Child's Longing for Freedom</strong>, contrasting with the rules and routines of his own life.
        </p>
        <p>
          The poem highlights <strong>Innocence and Naivety</strong>, as the child is attracted to perceived freedom without understanding the realities of these vocations.
        </p>
        <p>
          It subtly contrasts <strong>Perception vs. Reality</strong>, showing the child's idealized view of jobs versus their demanding nature.
        </p>
        <p>
          Finally, the child's wishes can be seen as a form of <strong>Escapism</strong> from his structured and disciplined life.
        </p>
      </section>
    </div>
  );
};

export default VocationNotes;