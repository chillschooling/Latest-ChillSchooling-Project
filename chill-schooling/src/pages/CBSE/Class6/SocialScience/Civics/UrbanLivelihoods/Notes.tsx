import React from 'react';
import './Notes.css';

const UrbanLivelihoodsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 9: Urban Livelihoods</h1>

      <section id="introduction">
        <h2>Life in Urban Areas</h2>
        <p>
          People in urban areas (cities and towns) engage in a wide variety of occupations, unlike rural areas where livelihoods are primarily linked to agriculture. Urban areas offer diverse opportunities in manufacturing, trade, services, and administration.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>More than half of the world's population now lives in urban areas, and this number is growing rapidly.</p>
        </div>
      </section>

      <section id="working-on-the-streets">
        <h2>Working on the Streets</h2>
        <p>
          Many people in cities work on the streets. They are often self-employed and sell goods or provide services.
        </p>
        <ul>
          <li><strong>Hawkers and Vendors:</strong> Sell vegetables, fruits, flowers, newspapers, etc.</li>
          <li><strong>Street Performers:</strong> Entertain people with music, magic, or other acts.</li>
          <li><strong>Service Providers:</strong> Cobblers, barbers, rickshaw pullers, etc.</li>
        </ul>
        <p>
          These workers often face challenges like lack of permanent shops, police harassment, and competition.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>A vegetable vendor sets up a stall on a busy street corner every morning, selling fresh produce to passersby.</p>
        </div>
      </section>

      <section id="working-in-the-market">
        <h2>Working in the Market</h2>
        <p>
          Many people work in shops and showrooms in the market. These can be small shops run by families or large showrooms with many employees.
        </p>
        <p>
          Shop owners, salespersons, and other staff work in these establishments. They sell a variety of goods, from clothes and electronics to groceries and medicines.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Street = Self-employed; Market = Shops & Sales!</p>
        </div>
      </section>

      <section id="working-in-factories">
        <h2>Working in Factories/Workshops</h2>
        <p>
          Cities have many factories and workshops where goods are manufactured. People work as skilled or unskilled labourers in these places.
        </p>
        <p>
          Factory workers often work long hours, sometimes in difficult conditions, and may not have job security.
        </p>
      </section>

      <section id="working-in-offices-and-hospitals">
        <h2>Working in Offices and Hospitals</h2>
        <p>
          Many people in cities work in offices, hospitals, banks, and other service sectors. These jobs often require higher education and provide better working conditions and job security.
        </p>
        <ul>
          <li><strong>Office Workers:</strong> Clerks, managers, IT professionals.</li>
          <li><strong>Healthcare Professionals:</strong> Doctors, nurses, pharmacists.</li>
          <li><strong>Other Services:</strong> Teachers, police officers, government employees.</li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Urban areas offer diverse livelihoods in various sectors.</li>
          <li>Many people work on the streets as hawkers, vendors, or service providers.</li>
          <li>Markets provide employment in shops and showrooms.</li>
          <li>Factories and workshops employ skilled and unskilled labourers for manufacturing.</li>
          <li>Offices, hospitals, and other service sectors offer jobs with better conditions.</li>
        </ul>
      </div>
    </div>
  );
};

export default UrbanLivelihoodsNotes;
