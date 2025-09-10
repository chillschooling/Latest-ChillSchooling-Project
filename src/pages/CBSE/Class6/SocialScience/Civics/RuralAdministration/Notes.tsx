import React from 'react';
import './Notes.css';

const RuralAdministrationNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 6: Rural Administration</h1>

      <section id="introduction">
        <h2>Maintaining Law and Order in Rural Areas</h2>
        <p>
          In rural areas, the administration is responsible for maintaining law and order, resolving disputes, and ensuring the welfare of the villagers. This involves various officials and departments.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>A police station is the first point of contact for people in case of a crime or dispute in their area.</p>
        </div>
      </section>

      <section id="police-role">
        <h2>The Role of the Police</h2>
        <p>
          The police play a crucial role in maintaining law and order. Each police station has a specific area under its control. All persons in that area can report cases or inform the police about any theft, accident, injury, or fight.
        </p>
        <p>
          The Station House Officer (SHO) is in charge of the police station. He or she records the First Information Report (FIR) and investigates the case.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>If there is a land dispute between two villagers, they can report it to the local police station, and the police will investigate the matter.</p>
        </div>
      </section>

      <section id="revenue-administration">
        <h2>Revenue Administration</h2>
        <p>
          The revenue department is responsible for maintaining land records and collecting land revenue.
        </p>
        <h3>Patwari (or Lekhpal/Kanoongo/Village Officer):</h3>
        <p>
          The Patwari is the key person in the rural revenue administration. His or her duties include:
        </p>
        <ul>
          <li>Measuring land and keeping land records.</li>
          <li>Organising the collection of land revenue from the farmers.</li>
          <li>Providing information to the government about the crops grown in the area.</li>
        </ul>
        <p>
          The Patwari is also responsible for updating the land records when changes occur, such as a sale of land or a division of property.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Police = Law & Order; Patwari = Land Records!</p>
        </div>
      </section>

      <section id="district-administration">
        <h2>District Administration</h2>
        <p>
          The District Collector (or District Magistrate) is the head of the district administration. He or she supervises the work of the Patwaris and other revenue officials.
        </p>
        <p>
          The district is divided into sub-divisions (tehsils or talukas), each headed by a Tehsildar or Tahsildar. The Tehsildar's office is where land disputes are heard, and land records are maintained.
        </p>
      </section>

      <section id="hindu-succession-amendment-act-2005">
        <h2>The Hindu Succession (Amendment) Act, 2005</h2>
        <p>
          This Act brought about a significant change in the law related to property inheritance. According to the new law, sons, daughters, and their mothers can get an equal share in the family property. This law applies to all states and union territories of India.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Rural administration maintains law and order and manages land records.</li>
          <li>The police (headed by SHO) investigate crimes and maintain peace.</li>
          <li>The Patwari is responsible for measuring land, keeping records, and collecting land revenue.</li>
          <li>The District Collector heads the district administration, supervising revenue officials.</li>
          <li>The Hindu Succession (Amendment) Act, 2005, ensures equal share in family property for sons, daughters, and mothers.</li>
        </ul>
      </div>
    </div>
  );
};

export default RuralAdministrationNotes;
