import React from 'react';
import './Notes.css';

const RuralLivelihoodsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 8: Rural Livelihoods</h1>

      <section id="introduction">
        <h2>Life in Rural Areas</h2>
        <p>
          People in rural areas engage in various activities to earn their livelihood. These activities are often closely linked to the natural environment and resources available in their region.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>More than half of all working people in India are farmers or agricultural labourers.</p>
        </div>
      </section>

      <section id="farming-activities">
        <h2>Farming Activities</h2>
        <p>
          Farming is the primary source of livelihood in rural areas.
        </p>
        <h3>1. Agricultural Labourers:</h3>
        <p>
          Many people in rural areas work as agricultural labourers on other people's farms. They are often landless or own very small plots of land.
        </p>
        <h3>2. Small Farmers:</h3>
        <p>
          Small farmers own small plots of land and cultivate them with the help of their family members. They often struggle to make ends meet.
        </p>
        <h3>3. Large Farmers:</h3>
        <p>
          Large farmers own large plots of land and employ agricultural labourers. They often have surplus produce, which they sell in the market.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>In a village, a small farmer might grow rice for their family's consumption, while a large farmer might grow cash crops like cotton for sale.</p>
        </div>
      </section>

      <section id="non-farming-activities">
        <h2>Non-Farming Activities</h2>
        <p>
          Apart from farming, people in rural areas also engage in various non-farming activities.
        </p>
        <ul>
          <li><strong>Animal Rearing:</strong> Many families keep cattle, goats, and poultry for milk, meat, and eggs.</li>
          <li><strong>Fishing:</strong> In coastal areas, fishing is a major source of livelihood.</li>
          <li><strong>Forest Produce:</strong> People living near forests collect forest produce like honey, timber, and medicinal herbs.</li>
          <li><strong>Crafts:</strong> Some people are involved in traditional crafts like pottery, weaving, and carpentry.</li>
          <li><strong>Services:</strong> Teachers, shopkeepers, barbers, and other service providers also contribute to the rural economy.</li>
        </ul>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Rural Livelihoods = Farm + Non-Farm! Think of all the ways people make a living in villages.</p>
        </div>
      </section>

      <section id="borrowing-and-debt">
        <h2>Borrowing and Debt</h2>
        <p>
          Many small farmers and agricultural labourers have to borrow money for their daily needs, farming expenses, or during times of crisis. They often borrow from moneylenders, who charge high interest rates, leading to a cycle of debt.
        </p>
        <p>
          The government has introduced various schemes and policies to help rural people, such as providing loans at low interest rates and promoting self-help groups.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Rural livelihoods are primarily based on farming (agricultural labourers, small farmers, large farmers) and non-farming activities (animal rearing, fishing, forest produce, crafts, services).</li>
          <li>Many rural people face challenges like borrowing and debt.</li>
          <li>Government schemes aim to support rural livelihoods and reduce debt.</li>
        </ul>
      </div>
    </div>
  );
};

export default RuralLivelihoodsNotes;
