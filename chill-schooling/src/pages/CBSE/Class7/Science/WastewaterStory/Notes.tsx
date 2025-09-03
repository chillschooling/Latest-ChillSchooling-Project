import React from 'react';
import './Notes.css';

const WastewaterStoryNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 13: Wastewater Story</h1>

      <section id="introduction">
        <h2>Introduction to Wastewater and Sewage</h2>
        <ul>
          <li><strong>Wastewater:</strong> All used water that goes down drains from homes, industries, hospitals, etc.</li>
          <li><strong>Sewage:</strong> The liquid waste component of wastewater, including household, industrial, and agricultural waste.</li>
          <li><strong>Effluent:</strong> Liquid waste discharged into water bodies.</li>
        </ul>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Wastewater is rich in lather, mixed with oil, and other pollutants, making it unfit for reuse without treatment.</p>
        </div>
      </section>

      <section id="contaminants">
        <h2>Contaminants in Wastewater</h2>
        <p>
          Sewage water contains various impurities, also called contaminants, which pollute the water.
        </p>
        <ul>
          <li><strong>Organic Impurities:</strong> Animal waste, urine, oil, vegetable waste, faeces, pesticides, food scraps.</li>
          <li><strong>Inorganic Impurities:</strong> Nitrates, phosphates, metals.</li>
          <li><strong>Nutrients:</strong> Phosphorus and nitrogen.</li>
          <li><strong>Bacteria:</strong> Harmful bacteria (pathogenic) causing diseases like typhoid, cholera.</li>
          <li><strong>Other Microbes:</strong> Can cause diseases like dysentery.</li>
        </ul>
      </section>

      <section id="water-pollution">
        <h2>Water Pollution and its Effects</h2>
        <p>
          Water pollution occurs when water bodies get contaminated, changing their physical, biological, and chemical properties, making them unsafe for use.
        </p>
        <h4>Major Water Pollutants:</h4>
        <ul>
          <li>Sewage (untreated).</li>
          <li>Industrial Chemical Wastes (lead, mercury).</li>
          <li>Agricultural Effluents (fertilizers, pesticides).</li>
          <li>Oil Spills.</li>
          <li>Thermal Wastes (warm water from industries).</li>
          <li>Suspended Solids (from soil erosion, sewage).</li>
        </ul>
        <div className="example-box">
          <h4>Diseases Caused by Contaminated Water:</h4>
          <p>Cholera, typhoid, dysentery, hepatitis, polio, meningitis.</p>
        </div>
      </section>

      <section id="wastewater-treatment">
        <h2>Wastewater Treatment Process (WWTP)</h2>
        <p>
          The cleaning of water, or sewage treatment, involves physical, chemical, and biological processes to remove contaminants.
        </p>
        <h4>1. Physical Treatment:</h4>
        <ul>
          <li><strong>Screening (Bar Screens):</strong> Removes large objects.</li>
          <li><strong>Grit and Sand Removal:</strong> Sand, dirt, and pebbles settle down.</li>
          <li><strong>Primary Settling (Sedimentation Tank/Clarifier):</strong> Heavier solids (sludge) settle, oil/grease float. Clarified water is obtained.</li>
        </ul>
        <h4>2. Biological Treatment:</h4>
        <ul>
          <li><strong>Aeration:</strong> Air is pumped to grow aerobic bacteria.</li>
          <li><strong>Activated Sludge:</strong> Aerobic bacteria consume organic matter; microbes settle as activated sludge.</li>
          <li><strong>Sludge Treatment:</strong> Anaerobic bacteria break down sludge, producing biogas (fuel).</li>
          <li><strong>Treated Water Disposal:</strong> Released into air, ground, or water body.</li>
        </ul>
        <div className="memory-trick">
          <h4>Remember the Stages!</h4>
          <p>Physical → Biological → Chemical (sometimes) for clean water!</p>
        </div>
      </section>

      <section id="housekeeping-practices">
        <h2>Better Housekeeping Practices</h2>
        <ul>
          <li>Do not throw cooking oil and fats down the drain.</li>
          <li>Avoid throwing chemicals (insecticides, medicines) into drains.</li>
          <li>Do not dispose of solid waste (tea leaves, food remains) in drains.</li>
          <li>Throw solid waste in dustbins.</li>
        </ul>
      </section>

      <section id="sanitation-and-disease">
        <h2>Sanitation and Disease</h2>
        <p>
          Poor sanitation and contaminated drinking water are major causes of infectious diseases. Untreated human excreta can pollute water and soil.
        </p>
        <div className="example-box">
          <h4>Swachh Bharat Mission:</h4>
          <p>Aims to improve sanitation through proper sewage disposal and providing toilets.</p>
        </div>
      </section>

      <section id="alternative-disposal">
        <h2>Alternative Sewage Disposal Systems</h2>
        <p>
          For areas without central sewerage systems:
        </p>
        <ul>
          <li><strong>Septic Tanks:</strong> Need cleaning every few months.</li>
          <li><strong>Chemical Toilets:</strong> Use chemicals to treat waste.</li>
          <li><strong>Composting Pits:</strong> For composting human waste.</li>
          <li><strong>Vermi-processing Toilets:</strong> Use earthworms to decompose faecal matter.</li>
        </ul>
      </section>

      <section id="role-of-citizens">
        <h2>Role of Citizens</h2>
        <ul>
          <li>Reduce waste production.</li>
          <li>Ensure no open drains or sewers.</li>
          <li>Contribute to maintaining sanitation in public places.</li>
          <li>Adopt good sanitation practices.</li>
        </ul>
      </div>
    </div>
  );
};

export default WastewaterStoryNotes;
