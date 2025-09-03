import React from 'react';
import './Notes.css';

const WaterNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 14: Water</h1>

      <section id="introduction">
        <h2>The Importance of Water</h2>
        <p>
          Water is essential for all living organisms. We use water for drinking, cooking, washing, and many other daily activities. Although a large part of the Earth is covered with water, only a small percentage is fresh and suitable for our use.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>About two-thirds of the Earth's surface is covered by water!</p>
        </div>
      </section>

      <section id="sources-of-water">
        <h2>Sources of Water</h2>
        <p>
          We get water from various sources:
        </p>
        <ul>
          <li>Rivers</li>
          <li>Lakes</li>
          <li>Ponds</li>
          <li>Wells</li>
          <li>Groundwater</li>
          <li>Rain (the primary source of fresh water)</li>
        </ul>
      </section>

      <section id="states-of-water">
        <h2>States of Water</h2>
        <p>
          Water exists in three states:
        </p>
        <ul>
          <li>
            <strong>Solid:</strong> Ice, snow, hail, glaciers.
          </li>
          <li>
            <strong>Liquid:</strong> Water in oceans, rivers, lakes, ponds, and groundwater.
          </li>
          <li>
            <strong>Gas:</strong> Water vapor (invisible in the air).
          </li>
        </ul>
      </section>

      <section id="water-cycle">
        <h2>The Water Cycle</h2>
        <p>
          The water cycle is the continuous movement of water on, above, and below the surface of the Earth. It involves several processes:
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Remember the water cycle as a journey: Evaporation (up), Condensation (clouds), Precipitation (down), Collection (back to sources)!</p>
        </div>
        <ul>
          <li>
            <strong>Evaporation:</strong> The process by which water changes into water vapor due to the sun's heat. Water evaporates from oceans, rivers, lakes, and land surfaces.
          </li>
          <li>
            <strong>Transpiration:</strong> Plants release water vapor into the atmosphere through their leaves.
          </li>
          <li>
            <strong>Condensation:</strong> As water vapor rises, it cools down and changes back into tiny water droplets, forming clouds.
          </li>
          <li>
            <strong>Precipitation:</strong> When the water droplets in clouds become too heavy, they fall back to the Earth as rain, snow, or hail.
          </li>
          <li>
            <strong>Collection/Runoff:</strong> The water that falls as precipitation flows into rivers, lakes, and oceans, or seeps into the ground to become groundwater, completing the cycle.
          </li>
        </ul>
      </section>

      <section id="floods-and-droughts">
        <h2>Floods and Droughts</h2>
        <ul>
          <li>
            <strong>Floods:</strong> Heavy rainfall can lead to floods, where water overflows from rivers and lakes, submerging land. Floods can cause damage to crops, property, and human and animal life.
          </li>
          <li>
            <strong>Droughts:</strong> A prolonged period of insufficient or no rainfall results in droughts. This leads to dry soil, low water levels in ponds and wells, and scarcity of groundwater, making it difficult to obtain food and fodder.
          </li>
        </ul>
      </section>

      <section id="water-conservation">
        <h2>Water Conservation</h2>
        <p>
          Despite water being a renewable resource, the availability of usable freshwater is diminishing. Therefore, it is crucial to conserve water and use it wisely.
        </p>
        <div className="example-box">
          <h4>Ways to Conserve Water:</h4>
          <ul>
            <li>Turn off taps while brushing teeth or washing hands.</li>
            <li>Repair leaking taps immediately.</li>
            <li>Collect rainwater for gardening or other purposes (rainwater harvesting).</li>
            <li>Use a bucket for bathing instead of a shower.</li>
          </ul>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Water is vital for all living organisms and exists in solid, liquid, and gaseous states.</li>
          <li>The water cycle involves evaporation, transpiration, condensation, and precipitation.</li>
          <li>Excessive rain causes floods, while insufficient rain leads to droughts.</li>
          <li>Water conservation is essential due to the limited availability of fresh water.</li>
        </ul>
      </div>
    </div>
  );
};

export default WaterNotes;
