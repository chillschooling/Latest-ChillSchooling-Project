import React from 'react';
import './Notes.css';

const BuildingsPaintingsAndBooksNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 10: Buildings, Paintings and Books</h1>

      <section id="introduction">
        <h2>Architectural Marvels</h2>
        <p>
          Ancient India witnessed remarkable achievements in architecture, sculpture, and literature. Temples, stupas, and cave paintings provide insights into the artistic and religious life of the people.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The Iron Pillar at Mehrauli, Delhi, is a remarkable example of the metallurgical skill of ancient Indian craftspersons. It has not rusted in over 1600 years!</p>
        </div>
      </section>

      <section id="buildings">
        <h2>Buildings: Stupas and Temples</h2>
        <h3>Stupas:</h3>
        <p>
          Stupas are mounds where the relics of the Buddha or his followers were placed. These were usually built of stone or brick. The Great Stupa at Sanchi is one of the most famous stupas.
        </p>
        <h3>Temples:</h3>
        <p>
          Temples were built to house images of gods and goddesses. Some of the earliest temples were simple structures, but over time, they became more elaborate. The garbhagriha (sanctum sanctorum) was the most important part of the temple, where the image of the main deity was placed.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The Mahabalipuram temples in Tamil Nadu are famous for their monolithic (carved from a single rock) structures.</p>
        </div>
      </section>

      <section id="paintings">
        <h2>Paintings: Ajanta Caves</h2>
        <p>
          The Ajanta Caves in Maharashtra are famous for their rock-cut caves and exquisite paintings. These paintings, mostly depicting stories from the Jataka tales (stories about the previous births of the Buddha), were done using natural colours.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Ajanta = Art: Think of beautiful paintings in caves!</p>
        </div>
      </section>

      <section id="books">
        <h2>Books: Epics and Puranas</h2>
        <p>
          Ancient India produced a rich body of literature, including epics, Puranas, and scientific treatises.
        </p>
        <h3>Epics:</h3>
        <p>
          The Ramayana and the Mahabharata are two great Sanskrit epics. The Mahabharata is about a war fought between the Kauravas and Pandavas. The Ramayana is about Rama, a prince of Kosala, who was exiled and had to fight to rescue his wife Sita.
        </p>
        <h3>Puranas:</h3>
        <p>
          Puranas literally mean 'old'. They contain stories about gods and goddesses such as Vishnu, Shiva, Durga, or Parvati. They were written in simple Sanskrit so that everyone could understand them.
        </p>
        <h3>Scientific Books:</h3>
        <p>
          Aryabhata, a great mathematician and astronomer, wrote the Aryabhatiyam. He stated that day and night were caused by the Earth’s rotation on its axis. He also developed a scientific explanation for eclipses.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Ancient India excelled in architecture (stupas, temples), paintings (Ajanta Caves), and literature (epics, Puranas, scientific works).</li>
          <li>Stupas are mounds containing relics, and temples house deities.</li>
          <li>Ajanta Caves are known for their rock-cut architecture and Jataka tale paintings.</li>
          <li>Important literary works include the epics Ramayana and Mahabharata, and Puranas.</li>
          <li>Aryabhata made significant contributions to mathematics and astronomy.</li>
        </ul>
      </div>
    </div>
  );
};

export default BuildingsPaintingsAndBooksNotes;
