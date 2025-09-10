import React from 'react';
import './Notes.css';

const UrbanAdministrationNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 7: Urban Administration</h1>

      <section id="introduction">
        <h2>Managing Cities</h2>
        <p>
          Cities are much larger than villages and are more complex to manage. They have a large population, diverse needs, and require extensive public services. Urban administration is responsible for providing these services and maintaining the city.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The Municipal Corporation is the local governing body in large cities, while smaller cities have Municipal Councils.</p>
        </div>
      </section>

      <section id="municipal-corporation">
        <h2>The Municipal Corporation</h2>
        <p>
          The Municipal Corporation is the local governing body responsible for the administration of large cities. It is also known as Nagar Nigam.
        </p>
        <h3>Functions of the Municipal Corporation:</h3>
        <ul>
          <li>Providing and maintaining water supply.</li>
          <li>Maintaining roads, streetlights, and public parks.</li>
          <li>Collecting garbage and ensuring sanitation.</li>
          <li>Providing healthcare facilities (hospitals, dispensaries).</li>
          <li>Running schools and libraries.</li>
          <li>Registering births and deaths.</li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The Municipal Corporation of Delhi is responsible for managing civic services in the capital city.</p>
        </div>
      </section>

      <section id="ward-councillor-and-administrative-staff">
        <h2>Ward Councillor and Administrative Staff</h2>
        <p>
          A city is divided into several wards, and each ward elects a Ward Councillor. The Ward Councillors form committees to discuss and decide on issues related to their wards.
        </p>
        <p>
          The Municipal Corporation also has a large administrative staff, including engineers, health officers, and sanitation inspectors. The Municipal Commissioner is the head of the administrative staff and is appointed by the government.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Ward Councillor = Elected; Municipal Commissioner = Appointed!</p>
        </div>
      </section>

      <section id="sources-of-income">
        <h2>Sources of Income for the Municipal Corporation</h2>
        <ul>
          <li><strong>Taxes:</strong> Property tax, water tax, entertainment tax, etc.</li>
          <li><strong>Grants from the State Government:</strong> Funds provided by the state government.</li>
          <li><strong>Fees and Fines:</strong> Fees for various services and fines for violations.</li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Urban administration manages cities by providing essential public services.</li>
          <li>The Municipal Corporation (Nagar Nigam) is the governing body in large cities.</li>
          <li>Its functions include water supply, sanitation, road maintenance, healthcare, and education.</li>
          <li>Cities are divided into wards, each with an elected Ward Councillor.</li>
          <li>The Municipal Commissioner heads the administrative staff.</li>
          <li>Income sources include taxes, government grants, fees, and fines.</li>
        </ul>
      </div>
    </div>
  );
};

export default UrbanAdministrationNotes;
