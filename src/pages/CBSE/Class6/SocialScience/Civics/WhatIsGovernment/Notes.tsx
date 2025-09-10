import React from 'react';
import './Notes.css';

const WhatIsGovernmentNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 3: What is Government</h1>

      <section id="introduction">
        <h2>The Need for Government</h2>
        <p>
          A government is a group of people that governs a community or unit. It maintains law and order, provides public services, and protects the country. Without a government, there would be chaos and insecurity.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Governments also take action on social issues, build roads and schools, and run postal and railway services.</p>
        </div>
      </section>

      <section id="levels-of-government">
        <h2>Levels of Government</h2>
        <p>Governments work at different levels:</p>
        <h3>1. Local Level:</h3>
        <p>
          This refers to the government in your village, town, or locality.
        </p>
        <h3>2. State Level:</h3>
        <p>
          This refers to the government of an entire state, like the government of Uttar Pradesh or Maharashtra.
        </p>
        <h3>3. National Level:</h3>
        <p>
          This refers to the government of the entire country, like the Central Government of India.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>A local government might be responsible for garbage collection, a state government for maintaining law and order, and the national government for defense.</p>
        </div>
      </section>

      <section id="types-of-government">
        <h2>Types of Government</h2>
        <p>Governments can be of different types:</p>
        <h3>1. Democracy:</h3>
        <p>
          In a democracy, people have the power to elect their leaders. The government is run by the representatives elected by the people. India is a democracy.
        </p>
        <h3>2. Monarchy:</h3>
        <p>
          In a monarchy, a king or queen has absolute power. They inherit their position.
        </p>
        <h3>3. Dictatorship:</h3>
        <p>
          In a dictatorship, one person or a small group of people has absolute power, and the people have no say in who rules them.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Democracy = People Power! Monarchy = King/Queen Power! Dictatorship = One Person Power!</p>
        </div>
      </section>

      <section id="features-of-democratic-government">
        <h2>Key Features of a Democratic Government</h2>
        <ul>
          <li><strong>Universal Adult Franchise:</strong> All adults (18 years and above) have the right to vote, regardless of their wealth, education, caste, or gender.</li>
          <li><strong>Rule of Law:</strong> Everyone is equal before the law, and no one is above the law.</li>
          <li><strong>Accountability:</strong> The government is accountable to the people.</li>
          <li><strong>Participation:</strong> People participate in the governance through elections and other means.</li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>A government maintains law and order, provides services, and protects the country.</li>
          <li>Governments operate at local, state, and national levels.</li>
          <li>Common types of government include democracy, monarchy, and dictatorship.</li>
          <li>Key features of a democratic government include universal adult franchise, rule of law, accountability, and public participation.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatIsGovernmentNotes;
