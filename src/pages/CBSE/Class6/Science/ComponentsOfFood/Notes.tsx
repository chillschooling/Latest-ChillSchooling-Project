import React from 'react';
import './Notes.css';

const ComponentsOfFoodNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 2: Components of Food</h1>

      <section id="introduction">
        <h2>What are Nutrients?</h2>
        <p>
          Our food consists of various components that our body needs. These components are called nutrients. They are essential for our body's growth, maintenance, and to provide energy.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>A balanced diet is like a superhero team for your body, with each nutrient playing a vital role!</p>
        </div>
      </section>

      <section id="major-nutrients">
        <h2>Major Nutrients in Our Food</h2>
        <p>The main nutrients in our food are carbohydrates, proteins, fats, vitamins, and minerals. In addition to these, food also contains dietary fibres (roughage) and water.</p>

        <h3>1. Carbohydrates: Energy-Giving Foods</h3>
        <p>
          Carbohydrates are the primary source of energy for our body. They are found in foods like rice, wheat, potatoes, sugar, and jaggery.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Bread, pasta, cereals, fruits like banana, and vegetables like potato are rich in carbohydrates.</p>
        </div>

        <h3>2. Fats: More Energy-Giving Foods</h3>
        <p>
          Fats also provide energy to our body, often more than carbohydrates. Sources include oils, ghee, butter, nuts, and meat.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Butter, cheese, cooking oils, and nuts are good sources of fats.</p>
        </div>

        <h3>3. Proteins: Body-Building Foods</h3>
        <p>
          Proteins are essential for the growth and repair of our body. They are often called "body-building foods." Sources include pulses, milk, eggs, meat, and fish.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Lentils, beans, chicken, fish, and milk are rich in proteins.</p>
        </div>

        <h3>4. Vitamins: Protective Foods</h3>
        <p>
          Vitamins protect our body against diseases and are necessary for maintaining healthy eyes, bones, teeth, and gums. Different vitamins (A, B, C, D, E, K) have specific functions.
        </p>
        <table>
          <thead>
            <tr>
              <th>Vitamin</th>
              <th>Function</th>
              <th>Sources</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vitamin A</strong></td>
              <td>Good for eyes and skin</td>
              <td>Carrot, Papaya, Milk</td>
            </tr>
            <tr>
              <td><strong>Vitamin B Complex</strong></td>
              <td>Energy release from food</td>
              <td>Whole grains, Liver, Eggs</td>
            </tr>
            <tr>
              <td><strong>Vitamin C</strong></td>
              <td>Fights diseases, healthy gums</td>
              <td>Citrus fruits (Orange, Lemon), Amla</td>
            </tr>
            <tr>
              <td><strong>Vitamin D</strong></td>
              <td>Strong bones and teeth</td>
              <td>Sunlight, Milk, Fish</td>
            </tr>
          </tbody>
        </table>

        <h3>5. Minerals: For Growth and Health</h3>
        <p>
          Minerals are needed by our body in small amounts for proper growth and to maintain good health. Examples include iron, calcium, phosphorus, and iodine.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Calcium for bones (milk), Iron for blood (spinach), Iodine for thyroid (iodized salt).</p>
        </div>
      </section>

      <section id="other-components">
        <h2>Other Important Components</h2>
        <h3>Dietary Fibre (Roughage):</h3>
        <p>
          Though it does not provide nutrients, dietary fibre is vital for the body as it helps in the movement of food through the digestive system and prevents constipation. Sources include whole grains, pulses, potatoes, fresh fruits, and vegetables.
        </p>
        <h3>Water:</h3>
        <p>
          Water helps our body to absorb nutrients from food, and also helps in throwing out some wastes from the body as urine and sweat.
        </p>
      </section>

      <section id="balanced-diet">
        <h2>Balanced Diet</h2>
        <p>
          A balanced diet provides all the necessary nutrients, roughage, and water in the right quantities for good health. Eating too much fat can lead to obesity.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a balanced diet as a rainbow of foods, ensuring you get all the colors (nutrients) your body needs!</p>
        </div>
      </section>

      <section id="deficiency-diseases">
        <h2>Deficiency Diseases</h2>
        <p>
          Lack of one or more nutrients in the diet over a long period can lead to deficiency diseases.
        </p>
        <table>
          <thead>
            <tr>
              <th>Nutrient Deficiency</th>
              <th>Disease</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vitamin A</strong></td>
              <td>Loss of vision (Night Blindness)</td>
            </tr>
            <tr>
              <td><strong>Vitamin B1</strong></td>
              <td>Beri-beri</td>
            </tr>
            <tr>
              <td><strong>Vitamin C</strong></td>
              <td>Scurvy</td>
            </tr>
            <tr>
              <td><strong>Vitamin D</strong></td>
              <td>Rickets</td>
            </tr>
            <tr>
              <td><strong>Iodine</strong></td>
              <td>Goitre</td>
            </tr>
            <tr>
              <td><strong>Iron</strong></td>
              <td>Anaemia</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Nutrients are essential components of food for growth, energy, and maintenance.</li>
          <li>Major nutrients include carbohydrates, fats, proteins, vitamins, and minerals.</li>
          <li>Dietary fibre and water are also crucial for the body.</li>
          <li>A balanced diet provides all necessary nutrients in the right amounts.</li>
          <li>Deficiency diseases occur due to prolonged lack of specific nutrients.</li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentsOfFoodNotes;
