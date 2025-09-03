import React from 'react';
import './Notes.css';

const NewEmpiresAndKingdomsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 9: New Empires and Kingdoms</h1>

      <section id="introduction">
        <h2>The Gupta Empire</h2>
        <p>
          The Gupta Empire was a powerful ancient Indian empire that existed from the early 4th to the late 6th century CE. It is considered a Golden Age of India due to significant achievements in science, mathematics, astronomy, religion, and philosophy.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Samudragupta, one of the most famous Gupta rulers, was known as the 'Napoleon of India' for his military conquests.</p>
        </div>
      </section>

      <section id="gupta-rulers">
        <h2>Important Gupta Rulers</h2>
        <h3>1. Chandragupta I:</h3>
        <p>
          He was the first great ruler of the Gupta dynasty. He adopted the title of maharaj-adhiraja (king of kings).
        </p>
        <h3>2. Samudragupta:</h3>
        <p>
          He was the son of Chandragupta I. We know about him from a long inscription, an ashoka pillar inscription, composed by his court poet Harishena. This inscription describes Samudragupta as a great warrior.
        </p>
        <h3>3. Chandragupta II:</h3>
        <p>
          He was the son of Samudragupta. He extended the empire further. He is known for his military campaigns and for his patronage of art and literature. The famous Chinese pilgrim Fa Xian visited his court.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The Iron Pillar at Mehrauli, Delhi, is a testament to the metallurgical skills of the Gupta period, as it has not rusted in over 1600 years.</p>
        </div>
      </section>

      <section id="administration">
        <h2>Administration of the Gupta Empire</h2>
        <p>
          The Gupta administration was highly efficient. Kings were assisted by a council of ministers. Land revenue was the main source of income.
        </p>
        <p>
          Villages were the smallest units of administration. They were managed by village headmen.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Gupta = Golden Age: Think of prosperity, art, and learning!</p>
        </div>
      </section>

      <section id="harshavardhana">
        <h2>Harshavardhana</h2>
        <p>
          Harshavardhana was a powerful ruler who ruled nearly 1400 years ago. His court poet, Banabhatta, wrote his biography, the Harshacharita, in Sanskrit. This gives us the genealogy of Harsha, and ends with his becoming king.
        </p>
        <p>
          Xuan Zang, a Chinese pilgrim, spent a lot of time at Harsha’s court and left a detailed account of what he saw.
        </p>
      </section>

      <section id="pallavas-chalukyas-and-pulakeshin-ii">
        <h2>The Pallavas, Chalukyas and Pulakeshin II</h2>
        <p>
          The Pallavas and Chalukyas were the most important ruling dynasties in south India during this period. The kingdom of the Pallavas spread from the region around their capital, Kanchipuram, to the Kaveri delta. The kingdom of the Chalukyas was centred around the Raichur Doab, between the rivers Krishna and Tungabhadra.
        </p>
        <p>
          Pulakeshin II was the best known Chalukya ruler. We know about him from a prashasti, composed by his court poet Ravikirti. This describes his military victories.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>The Gupta Empire (4th-6th century CE) was a Golden Age of India, known for its achievements.</li>
          <li>Key Gupta rulers include Chandragupta I, Samudragupta, and Chandragupta II.</li>
          <li>The Gupta administration was efficient, with land revenue as the main income.</li>
          <li>Harshavardhana was a powerful ruler in north India, known through his biography Harshacharita and the accounts of Xuan Zang.</li>
          <li>The Pallavas and Chalukyas were important dynasties in south India, with Pulakeshin II being a notable Chalukya ruler.</li>
        </ul>
      </div>
    </div>
  );
};

export default NewEmpiresAndKingdomsNotes;
