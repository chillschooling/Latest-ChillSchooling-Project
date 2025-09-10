import React from 'react';
import './Notes.css';

const WhatWhereHowAndWhenNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 1: What, Where, How and When?</h1>

      <section id="introduction">
        <h2>Understanding Our Past</h2>
        <p>
          History is about finding out what happened in the past. We can learn about the past by looking at different sources like books, buildings, coins, and inscriptions.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The study of the past is called History. People who study history are called historians.</p>
        </div>
      </section>

      <section id="sources-of-history">
        <h2>Sources of History</h2>
        <p>Historians use various sources to reconstruct the past:</p>
        <h3>1. Manuscripts:</h3>
        <p>
          These are handwritten books. They were usually written on palm leaf, or on the specially prepared bark of a tree known as the birch, which grows in the Himalayas. These books dealt with all kinds of subjects: religious beliefs and practices, the lives of kings, medicine and science.
        </p>
        <h3>2. Inscriptions:</h3>
        <p>
          These are writings on hard surfaces, such as stone or metal. Kings got their orders inscribed so that people could see, read and obey them. There are other kinds of inscriptions as well, which record victories in battle.
        </p>
        <h3>3. Archaeology:</h3>
        <p>
          Archaeologists study the remains of buildings made of stone and brick, paintings and sculpture. They also explore and excavate (dig under the surface of the earth) to find tools, weapons, pots, pans, ornaments and coins.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The Harappan civilization was discovered through archaeological excavations, revealing ancient cities, pottery, and tools.</p>
        </div>
      </section>

      <section id="dates-in-history">
        <h2>Dates in History</h2>
        <p>
          Dates are very important in history. They help us to know when events happened. We use BC (Before Christ) and AD (Anno Domini) to refer to dates.
        </p>
        <ul>
          <li><strong>BC (Before Christ):</strong> Refers to all dates before the birth of Jesus Christ. For example, 2500 BC means 2500 years before the birth of Christ.</li>
          <li><strong>AD (Anno Domini):</strong> Refers to all dates after the birth of Jesus Christ. For example, AD 2023 means 2023 years after the birth of Christ.</li>
        </ul>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a timeline: BC goes backwards from 0, and AD goes forwards from 0.</p>
        </div>
      </section>

      <section id="where-did-people-live">
        <h2>Where Did People Live?</h2>
        <p>
          People have lived along the banks of rivers for several hundred thousand years. Some of the earliest people who lived here were skilled gatherers, that is, people who gathered their food. They knew about the vast wealth of plants in the surrounding forests, and collected roots, fruits and other forest produce for their food. They also hunted animals.
        </p>
        <p>
          The Sulaiman and Kirthar hills to the north-west are some of the areas where women and men first began to grow crops such as wheat and barley about 8000 years ago. They also began rearing animals like sheep, goat, and cattle, and lived in villages.
        </p>
        <p>
          The Garo hills to the north-east and the Vindhyas in central India are some of the other areas where agriculture developed. The places where rice was first grown are to the north of the Vindhyas.
        </p>
      </section>

      <section id="names-of-the-land">
        <h2>Names of the Land</h2>
        <p>
          Two of the words we often use for our country are India and Bharat. The word India comes from the Indus, called Sindhu in Sanskrit. The Iranians and the Greeks who came through the northwest about 2500 years ago and were familiar with the Indus, called it the Hindos or the Indos, and the land to the east of the river was called India.
        </p>
        <p>
          The name Bharata was used for a group of people who lived in the northwest, and who are mentioned in the Rigveda, the earliest composition in Sanskrit. Later it was used for the country.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>History helps us understand the past through sources like manuscripts, inscriptions, and archaeological findings.</li>
          <li>Dates are marked using BC (Before Christ) and AD (Anno Domini).</li>
          <li>Early humans lived near rivers, gathered food, hunted, and later began farming and animal rearing.</li>
          <li>The names India and Bharat have historical origins related to the Indus River and ancient groups of people.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatWhereHowAndWhenNotes;
