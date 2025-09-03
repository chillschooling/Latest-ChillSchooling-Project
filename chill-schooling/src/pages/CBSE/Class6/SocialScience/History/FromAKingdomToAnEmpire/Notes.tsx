import React from 'react';
import './Notes.css';

const FromAKingdomToAnEmpireNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 7: From a Kingdom to an Empire</h1>

      <section id="introduction">
        <h2>The Mauryan Empire</h2>
        <p>
          The Mauryan Empire was one of the largest empires in ancient India. It was founded by Chandragupta Maurya about 2300 years ago. His grandson, Ashoka, was one of the most famous rulers of the Mauryan dynasty.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Chanakya or Kautilya, Chandragupta's minister, wrote a book called the Arthashastra, which contains his ideas about administration.</p>
        </div>
      </section>

      <section id="ashoka-the-emperor">
        <h2>Ashoka, The Emperor Who Gave Up War</h2>
        <p>
          Ashoka is the only king in the history of the world who gave up conquest after winning a war. He fought the Kalinga war. After the victory, he was so horrified by the violence and bloodshed that he decided not to fight any more wars. He is the only king who tried to conquer people through dhamma.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Ashoka's rock edicts, inscribed on pillars and rocks throughout his empire, spread his message of peace and dhamma.</p>
        </div>
      </section>

      <section id="ashokas-dhamma">
        <h2>Ashoka's Dhamma</h2>
        <p>
          Ashoka’s dhamma did not involve worship of a god, or performance of a sacrifice. He felt that just as a father tries to teach his children, he had a duty to instruct his subjects. He was also inspired by the teachings of the Buddha.
        </p>
        <p>
          He appointed officials, known as the dhamma mahamatta, who went from place to place teaching people about dhamma. He also got his messages inscribed on rocks and pillars, instructing his officials to read his message to those who could not read it themselves.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Dhamma = Duty, Peace, and Respect for all living beings!</p>
        </div>
      </section>

      <section id="administration-of-the-empire">
        <h2>Administration of the Empire</h2>
        <p>
          The Mauryan Empire was very large, so different parts were ruled differently.
        </p>
        <ul>
          <li><strong>Capital City (Pataliputra):</strong> Directly controlled by the emperor. Officials collected taxes from farmers, herders, craftspersons and traders.</li>
          <li><strong>Provinces:</strong> Ruled by royal princes, who were sent as governors. Local customs and rules were probably followed.</li>
          <li><strong>Areas between provinces:</strong> Mauryans tried to control roads and rivers, which were important for transport, and to collect whatever resources were available as tax and tribute.</li>
          <li><strong>Forest regions:</strong> People living in these regions were more or less independent, but may have been expected to provide elephants, timber, honey and wax to the Mauryan officials.</li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>The Mauryan Empire was founded by Chandragupta Maurya, with Ashoka being its most famous ruler.</li>
          <li>Ashoka gave up war after the Kalinga war and promoted dhamma (a code of conduct based on peace and respect).</li>
          <li>Dhamma mahamatta were appointed to spread the message of dhamma.</li>
          <li>The empire was administered with direct control over the capital, provincial rule, control over transport routes, and loose control over forest regions.</li>
        </ul>
      </div>
    </div>
  );
};

export default FromAKingdomToAnEmpireNotes;
