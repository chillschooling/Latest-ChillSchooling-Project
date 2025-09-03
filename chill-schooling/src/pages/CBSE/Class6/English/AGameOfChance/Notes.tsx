import React from 'react';
import './Notes.css';

const AGameOfChanceNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter: A Game Of Chance</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          "A Game of Chance" is a story about a young boy named Rasheed who visits an Eid fair with his uncle. At the fair, Rasheed is lured by a "Lucky Shop" where the shopkeeper encourages people to try their luck. Rasheed witnesses an old man and a boy seemingly win valuable prizes, which they then sell back to the shopkeeper.
        </p>
        <p>
          Enticed by the prospect of winning big, Rasheed tries his luck repeatedly, losing all his money on cheap items. He becomes upset and disheartened. When his uncle returns, he reveals that the old man and the boy were accomplices of the shopkeeper, part of a trick to cheat innocent people. The uncle then buys Rasheed some gifts and advises him to forget the incident, teaching him a valuable lesson about deception and critical thinking.
        </p>
      </section>

      <section id="characters">
        <h2>Characters</h2>
        <ul>
          <li>
            <strong>Rasheed:</strong> An innocent, naive, and easily tempted young boy who falls victim to the shopkeeper's trick.
          </li>
          <li>
            <strong>Uncle:</strong> A wise, experienced, and protective figure who warns Rasheed and later explains the deception without scolding him.
          </li>
          <li>
            <strong>Bhaiya:</strong> The domestic helper who accompanies Rasheed to the fair.
          </li>
          <li>
            <strong>The Shopkeeper:</strong> A cunning and deceptive individual who runs the "Lucky Shop" and cheats gullible people.
          </li>
          <li>
            <strong>The Old Man and The Boy:</strong> Accomplices of the shopkeeper who pretend to win big prizes to entice others.
          </li>
        </ul>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The story highlights <strong>The Dangers of Greed and Temptation</strong>, showing how the desire for easy gains can lead to losses.
        </p>
        <p>
          A central theme is <strong>Deception and Appearances vs. Reality</strong>, emphasizing that things are not always as they seem.
        </p>
        <p>
          It also stresses the <strong>Importance of Critical Thinking and Wisdom</strong>, urging readers to be wary of schemes that seem too good to be true.
        </p>
        <p>
          Finally, the narrative contrasts <strong>Innocence and Experience</strong>, as the uncle guides Rasheed through a difficult lesson.
        </p>
      </section>
    </div>
  );
};

export default AGameOfChanceNotes;