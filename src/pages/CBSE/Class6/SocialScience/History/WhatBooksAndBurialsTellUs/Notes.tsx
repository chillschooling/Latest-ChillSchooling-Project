import React from 'react';
import './Notes.css';

const WhatBooksAndBurialsTellUsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 4: What Books and Burials Tell Us</h1>

      <section id="introduction">
        <h2>Understanding Ancient Texts</h2>
        <p>
          Archaeologists and historians use various sources to understand the past. Among these, ancient books (manuscripts) and burial sites provide valuable insights into the lives, beliefs, and practices of people who lived thousands of years ago.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The Rigveda is the oldest Veda, composed about 3500 years ago. It contains hymns in praise of various gods and goddesses.</p>
        </div>
      </section>

      <section id="the-vedas">
        <h2>The Vedas</h2>
        <p>
          There are four Vedas: the Rigveda, Samaveda, Yajurveda, and Atharvaveda. The Rigveda is the oldest of these, composed about 3500 years ago. It includes more than a thousand hymns, called sukta or "well-said". These hymns are in praise of various gods and goddesses, especially Indra, Agni, and Soma.
        </p>
        <p>
          The hymns were composed by sages (rishis). Students memorised them with the help of their teachers, word by word, sentence by sentence, bit by bit. Most of the hymns were composed, taught and learnt by men. A few were composed by women.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>A hymn from the Rigveda might describe the power of Agni (the god of fire) and ask for his blessings for prosperity and protection.</p>
        </div>
      </section>

      <section id="burials">
        <h2>Burials: A Window to the Past</h2>
        <p>
          Archaeologists have found evidence of burials from various periods. These burial sites often contain objects that were buried along with the dead, providing clues about their social status, beliefs, and daily lives.
        </p>
        <h3>Megaliths:</h3>
        <p>
          These are large stone boulders, used to mark burial sites. These were carefully arranged by people, and were used to mark burial sites. The practice of erecting megaliths began about 3000 years ago, and was prevalent in the Deccan, south India, north-east India and Kashmir.
        </p>
        <p>
          Sometimes, archaeologists find a circle of stone boulders or a single large stone standing on the ground. These are the only indications that there are burials beneath.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of megaliths as ancient tombstones, telling stories of the people buried beneath!</p>
        </div>
      </section>

      <section id="social-differences">
        <h2>Social Differences and Burials</h2>
        <p>
          Archaeologists have found differences in the burial sites, which suggest that there were social differences amongst the people who were buried. Some graves contain more objects than others, indicating a higher social status for the deceased.
        </p>
        <p>
          For example, at Brahmagiri, archaeologists found a skeleton buried with 33 gold beads, 2 stone beads, 4 copper bangles, and a conch shell. Other skeletons had only a few pots. This suggests that some people were richer than others.
        </p>
      </section>

      <section id="special-burials">
        <h2>Special Burials</h2>
        <p>
          Sometimes, families were buried together. This is indicated by the presence of multiple skeletons in a single burial pit. It is possible that people belonging to the same family were buried at the same place though not at the same time. The bodies of those who died later were brought into the pit through the port-holes.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Ancient texts like the Vedas (especially Rigveda) provide insights into ancient Indian society, beliefs, and practices.</li>
          <li>Burial sites, often marked by megaliths, reveal information about social differences and burial customs.</li>
          <li>Differences in grave goods suggest social stratification among ancient people.</li>
          <li>Some burial sites indicate family burials over time.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatBooksAndBurialsTellUsNotes;
