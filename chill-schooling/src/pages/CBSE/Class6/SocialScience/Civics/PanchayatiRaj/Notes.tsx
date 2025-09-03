import React from 'react';
import './Notes.css';

const PanchayatiRajNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 5: Panchayati Raj</h1>

      <section id="introduction">
        <h2>Local Self-Government</h2>
        <p>
          The Panchayati Raj system is a system of local self-government in India. It is a three-tier system with elected bodies at the village, block, and district levels. It aims to bring democracy to the grassroots level and ensure people's participation in their own governance.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word 'Panchayat' literally means 'assembly of five' (panch - five, ayat - assembly).</p>
        </div>
      </section>

      <section id="gram-sabha">
        <h2>Gram Sabha</h2>
        <p>
          The Gram Sabha is a meeting of all adult members (18 years and above) who live in the area covered by a Gram Panchayat. It is the most important body in the Panchayati Raj system.
        </p>
        <p>
          The Gram Sabha reviews the performance of the Gram Panchayat, approves its annual budget, and ensures that the Gram Panchayat works for the welfare of the people.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>In a Gram Sabha meeting, villagers can discuss issues like water scarcity, road repairs, or school facilities, and hold the Gram Panchayat accountable.</p>
        </div>
      </section>

      <section id="gram-panchayat">
        <h2>Gram Panchayat</h2>
        <p>
          The Gram Panchayat is an elected body that works for the welfare of the village. It consists of a Sarpanch (President) and several Ward Members (Panchs). The Sarpanch and Panchs are elected by the Gram Sabha members.
        </p>
        <p>
          The Gram Panchayat's functions include:
        </p>
        <ul>
          <li>Construction and maintenance of water sources, roads, drainage, school buildings, and other common property resources.</li>
          <li>Levying and collecting local taxes.</li>
          <li>Executing government schemes related to employment generation.</li>
        </ul>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Gram Sabha = All Adults; Gram Panchayat = Elected Representatives!</p>
        </div>
      </section>

      <section id="sources-of-funds">
        <h2>Sources of Funds for the Gram Panchayat</h2>
        <ul>
          <li>Collection of taxes on houses, market places, etc.</li>
          <li>Government scheme funds received through various departments of the government through the Janpad and Zila Panchayats.</li>
          <li>Donations for community works etc.</li>
        </ul>
      </section>

      <section id="block-and-district-level">
        <h2>Block and District Level</h2>
        <p>
          Above the Gram Panchayat, there are two more levels in the Panchayati Raj system:
        </p>
        <h3>1. Block Level (Janpad Panchayat or Panchayat Samiti):</h3>
        <p>
          This body works at the block level, overseeing several Gram Panchayats.
        </p>
        <h3>2. District Level (Zila Parishad):</h3>
        <p>
          This is the highest level in the Panchayati Raj system, working at the district level. It coordinates the work of all the Janpad Panchayats in the district.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Panchayati Raj is a three-tier system of local self-government (village, block, district).</li>
          <li>The Gram Sabha is a meeting of all adult villagers, responsible for overseeing the Gram Panchayat.</li>
          <li>The Gram Panchayat is an elected body (Sarpanch and Panchs) responsible for village development and services.</li>
          <li>Funds for Gram Panchayat come from local taxes, government schemes, and donations.</li>
          <li>Above the Gram Panchayat are the Janpad Panchayat (block level) and Zila Parishad (district level).</li>
        </ul>
      </div>
    </div>
  );
};

export default PanchayatiRajNotes;
