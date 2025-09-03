import React from 'react';
import './Notes.css';

const FairPlayNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter: Fair Play</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          "Fair Play" by Munshi Premchand explores the importance of justice and fairness over personal relationships. The story centers on two close friends, Jumman Shaikh and Algu Chowdhry.
        </p>
        <p>
          Jumman's elderly aunt transfers her property to him, expecting care. However, Jumman and his wife soon mistreat her. The aunt demands a monthly allowance, and when refused, takes her case to the village panchayat. Algu Chowdhry, despite his friendship with Jumman, rules in favor of the aunt, breaking their friendship.
        </p>
        <p>
          Later, Algu faces a dilemma when a bullock he sold dies before payment. The case goes to the panchayat, and Samjhu Sahu, the buyer, nominates Jumman as head Panch, hoping for revenge. However, Jumman, realizing the responsibility of his position, delivers an impartial judgment in Algu's favor. This act of fair judgment restores their friendship, as both realize justice is paramount.
        </p>
      </section>

      <section id="characters">
        <h2>Characters</h2>
        <ul>
          <li>
            <strong>Jumman Shaikh:</strong> Initially a loyal friend, he becomes selfish but later prioritizes justice as a Panch.
          </li>
          <li>
            <strong>Algu Chowdhry:</strong> An honest and impartial friend who values truth above personal ties.
          </li>
          <li>
            <strong>Jumman's Aunt (Chachi):</strong> An elderly woman who seeks justice against her mistreating nephew.
          </li>
          <li>
            <strong>Samjhu Sahu:</strong> The buyer of Algu's bullock who tries to manipulate the panchayat.
          </li>
        </ul>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The central theme is <strong>Justice and Fairness</strong>, emphasizing that truth should always prevail, even over personal relationships.
        </p>
        <p>
          It highlights the <strong>Responsibility of Authority</strong>, showing that holding a position of power requires unbiased and just decisions.
        </p>
        <p>
          The story explores the complexities of <strong>Friendship</strong> and how it can be tested but restored through upholding moral values.
        </p>
        <p>
          Finally, it emphasizes the role of one's <strong>Conscience</strong> in making difficult decisions, suggesting that a judge's conscience guides them towards truth.
        </p>
      </section>
    </div>
  );
};

export default FairPlayNotes;