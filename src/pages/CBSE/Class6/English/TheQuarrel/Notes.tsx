import React from 'react';
import './Notes.css';

const TheQuarrelNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Poem: The Quarrel</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          The poem "The Quarrel" by Eleanor Farjeon explores the common experience of a disagreement between siblings. It describes a quarrel between the poet (narrator) and her brother that begins over a very small, almost forgotten, reason, but quickly escalates.
        </p>
        <p>
          One thing leads to another, and both siblings become stubborn, believing they are in the right and hating each other. Their anger spoils the entire afternoon, making it feel "black."
        </p>
        <p>
          However, the quarrel ends abruptly when the brother takes the initiative to apologize and pat the poet on the back, admitting his fault. This act of humility makes the poet realize her own mistake, and they reconcile, showing that their bond is stronger than the argument.
        </p>
      </section>

      <section id="characters">
        <h2>Characters</h2>
        <ul>
          <li>
            <strong>The Poet (Narrator):</strong> One of the siblings involved in the quarrel.
          </li>
          <li>
            <strong>The Brother:</strong> The other sibling, who initiates the reconciliation.
          </li>
        </ul>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The poem highlights <strong>Sibling Relationships</strong>, showing the common nature of quarrels and the underlying bond of love.
        </p>
        <p>
          It emphasizes the <strong>Triviality of Arguments</strong>, illustrating how small issues can escalate into significant conflicts.
        </p>
        <p>
          A key theme is <strong>Forgiveness and Reconciliation</strong>, stressing the importance of taking the first step to end a conflict.
        </p>
        <p>
          Finally, it conveys that <strong>Love Overcoming Anger</strong>, as affection between siblings is powerful enough to overcome temporary disputes.
        </p>
      </section>
    </div>
  );
};

export default TheQuarrelNotes;