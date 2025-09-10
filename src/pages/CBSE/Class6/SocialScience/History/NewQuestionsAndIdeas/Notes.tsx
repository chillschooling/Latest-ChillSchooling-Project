import React from 'react';
import './Notes.css';

const NewQuestionsAndIdeasNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 6: New Questions and Ideas</h1>

      <section id="introduction">
        <h2>The Rise of New Religions</h2>
        <p>
          Around 2500 years ago, many thinkers began to ask questions about life, death, and the universe. This period saw the rise of new religions and philosophies, most notably Buddhism and Jainism.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word 'Upanishad' literally means 'approaching and sitting near' and the texts contain conversations between teachers and students.</p>
        </div>
      </section>

      <section id="buddhism">
        <h2>Buddhism: The Teachings of Buddha</h2>
        <p>
          Siddhartha, also known as Gautama, the Buddha, was the founder of Buddhism. He was born about 2500 years ago. He left the comforts of his home in search of knowledge. He meditated for many days under a peepal tree at Bodh Gaya in Bihar, where he attained enlightenment. After that, he was known as the Buddha.
        </p>
        <p>
          The Buddha taught that life is full of suffering and unhappiness. This is caused because we have cravings and desires. He taught that this constant craving could be removed by following moderation in everything. He also taught people to be kind and to respect the lives of others, including animals.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The Buddha's teachings are summarized in the Four Noble Truths and the Eightfold Path, which guide followers towards enlightenment.</p>
        </div>
      </section>

      <section id="jainism">
        <h2>Jainism: The Teachings of Mahavira</h2>
        <p>
          Vardhamana Mahavira was the last and 24th Tirthankara of the Jains. He also lived around 2500 years ago. He left his home and led an ascetic life. He taught a simple doctrine: men and women who wished to know the truth must leave their homes. They must follow very strictly the rules of ahimsa, which means not hurting or killing living beings.
        </p>
        <p>
          The teachings of Mahavira were written down in the form in which they are presently available about 1500 years ago in a place called Valabhi, in Gujarat.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Remember Ahimsa (non-violence) as the core principle of Jainism!</p>
        </div>
      </section>

      <section id="the-sangha">
        <h2>The Sangha</h2>
        <p>
          Both the Buddha and Mahavira felt that only those who left their homes could gain true knowledge. They arranged for them to live together in the sangha, an association of those who left their homes.
        </p>
        <p>
          The rules for the Buddhist sangha were written down in a book called the Vinaya Pitaka. All men could join the sangha. Women also joined the sangha.
        </p>
      </section>

      <section id="monasteries">
        <h2>Monasteries</h2>
        <p>
          To begin with, both Buddhist and Jaina monks went from place to place throughout the year, teaching people. The only time they stayed in one place was during the rainy season, when it was difficult to travel. Then, their supporters built temporary shelters for them in gardens, or they lived in natural caves in hilly areas.
        </p>
        <p>
          As time went on, many supporters of the monks and nuns, and they themselves, felt the need for more permanent shelters. So, monasteries were built. These were known as viharas.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Around 2500 years ago, new religions like Buddhism (founded by Buddha) and Jainism (propagated by Mahavira) emerged.</li>
          <li>Buddha taught about overcoming suffering caused by desires.</li>
          <li>Mahavira emphasized strict adherence to ahimsa (non-violence).</li>
          <li>Both established the sangha, an association for those who left their homes in search of knowledge.</li>
          <li>Monasteries (viharas) were built as permanent shelters for monks and nuns.</li>
        </ul>
      </div>
    </div>
  );
};

export default NewQuestionsAndIdeasNotes;
