import React from 'react';
import './Notes.css';

const WhatifNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Poem: Whatif</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          The poem "What If" by Shel Silverstein explores the theme of anxiety and fear of the unknown. It delves into the common childhood experience of having various worries and doubts that pop into one's mind, especially at night.
        </p>
        <p>
          The poem presents a series of hypothetical negative scenarios that begin with "What if...". These "what ifs" range from minor anxieties like falling off a chair or getting sick, to more significant fears like failing a test or being disliked.
        </p>
        <p>
          The poem effectively captures the overwhelming nature of these intrusive thoughts, particularly when one is alone in bed, making it difficult to sleep. It highlights how these anxieties can consume a person's mind, even if the scenarios are unlikely to happen.
        </p>
      </section>

      <section id="characters">
        <h2>Characters (Implied)</h2>
        <p>
          The characters in the poem are not specific individuals but rather the <strong>narrator</strong> (who represents anyone experiencing these fears) and the <strong>"What Ifs"</strong> themselves. The "What Ifs" are personified as nagging thoughts or anxieties that plague the narrator's mind, presenting a series of hypothetical negative scenarios.
        </p>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The central theme is <strong>Anxiety and Fear of the Unknown</strong>, exploring the worries and doubts that can consume one's mind.
        </p>
        <p>
          It highlights the <strong>Power of Imagination (Negative)</strong>, showing how the mind can create numerous hypothetical negative scenarios.
        </p>
        <p>
          The poem also touches upon the theme of <strong>Childhood Fears</strong>, as these anxieties are common experiences during childhood.
        </p>
        <p>
          Finally, it implicitly suggests the importance of <strong>Coping with Anxiety</strong> and not letting "what ifs" overwhelm one's peace of mind.
        </p>
      </section>
    </div>
  );
};

export default WhatifNotes;