import React from 'react';
import './Notes.css';

const FoodWhereDoesItComeFromNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 1: Food: Where Does It Come From?</h1>

      <section id="introduction">
        <h2>What is Food?</h2>
        <p>
          Food is any nourishing substance that is eaten, drunk, or otherwise taken into the body to sustain life, provide energy, promote growth, and repair tissues. It is vital for all living organisms to carry out their daily activities, grow, and stay healthy. Without proper food, our bodies cannot function correctly, making us weak and susceptible to diseases.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The food we eat goes through a long journey from its source, often involving farming, processing, and transportation, before it reaches our plates!</p>
        </div>
      </section>

      <section id="ingredients">
        <h2>Ingredients of Food</h2>
        <p>
          When we prepare a dish, we often use several different materials. These materials are called ingredients. Each ingredient contributes to the taste, texture, and nutritional value of the final food item. Understanding ingredients helps us to know where our food comes from and what it contains.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p><strong>Dish:</strong> Boiled Rice</p>
          <p><strong>Ingredients:</strong> Raw rice, Water</p>
          <p><strong>Dish:</strong> Vegetable Curry</p>
          <p><strong>Ingredients:</strong> Various vegetables, Salt, Spices, Oil, Water</p>
          <p><strong>Dish:</strong> Kheer (Sweet Rice Pudding)</p>
          <p><strong>Ingredients:</strong> Rice, Milk, Sugar, Dry Fruits (like almonds, cashews), Cardamom</p>
        </div>
      </section>

      <section id="sources-of-food">
        <h2>Sources of Food</h2>
        <p>Our food primarily comes from two major sources: plants and animals. Understanding these sources helps us appreciate the diversity of food available to us.</p>

        <h3>Plant Sources:</h3>
        <p>Plants are the ultimate producers of food. We consume various parts of plants as food, each offering different nutrients and flavors.</p>
        <table>
          <thead>
            <tr>
              <th>Plant Part</th>
              <th>Description & Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Roots</strong></td>
              <td>These are underground parts of plants that store food. Examples include Carrot, Radish, Sweet Potato, Turnip, and Beetroot.</td>
            </tr>
            <tr>
              <td><strong>Stems</strong></td>
              <td>Some plants have edible stems that store food. Examples include Potato, Ginger, Sugarcane, and Onion (which is a modified stem).</td>
            </tr>
            <tr>
              <td><strong>Leaves</strong></td>
              <td>Many plants have edible leaves that are rich in vitamins and minerals. Examples include Spinach, Cabbage, Lettuce, Fenugreek (Methi), and Coriander.</td>
            </tr>
            <tr>
              <td><strong>Fruits</strong></td>
              <td>Botanically, fruits are the mature ovaries of flowering plants and contain seeds. Examples include Apple, Banana, Mango, Tomato, Brinjal, and Cucumber.</td>
            </tr>
            <tr>
              <td><strong>Seeds</strong></td>
              <td>Seeds are often rich in protein and energy. Examples include Grains (Wheat, Rice, Maize, Barley) and Pulses (like Moong dal, Chana dal, Kidney beans). Oil seeds like Mustard and Sunflower also provide edible oils.</td>
            </tr>
            <tr>
              <td><strong>Flowers</strong></td>
              <td>Some plants have edible flowers. Examples include Cauliflower, Broccoli, and Banana flower.</td>
            </tr>
          </tbody>
        </table>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of plants as a "food factory" where different parts (roots, stems, leaves, fruits, seeds, flowers) produce different foods for us to enjoy!</p>
        </div>

        <h3>Animal Sources:</h3>
        <p>Animals provide us with a variety of food products, which are rich in protein and other essential nutrients.</p>
        <ul>
          <li>
            <strong>Milk:</strong> Obtained from dairy animals like cows, buffaloes, goats, and camels. Milk is a complete food and is used to make various dairy products such as butter, cheese, curd, ghee, and paneer.
          </li>
          <li>
            <strong>Eggs:</strong> Primarily obtained from poultry birds like hens and ducks. Eggs are a rich source of protein.
          </li>
          <li>
            <strong>Meat:</strong> Obtained from animals like chicken, goat, sheep, and fish. Meat is a significant source of protein and other nutrients.
          </li>
          <li>
            <strong>Honey:</strong> Produced by honeybees from the nectar of flowers. Honey is a sweet, viscous food substance.
          </li>
          <li>
            <strong>Other Animal Products:</strong> Some cultures also consume other animal products like prawns, crabs, and various seafood.
          </li>
        </ul>
      </section>

      <section id="food-habits-of-animals">
        <h2>Food Habits of Animals</h2>
        <p>Animals exhibit diverse eating habits based on the type of food they consume. Understanding these habits helps us classify animals into different categories:</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Herbivores</strong></td>
              <td>These are animals that eat only plants or plant products. Their digestive systems are adapted to break down plant material.</td>
              <td>Cow, Goat, Deer, Elephant, Rabbit, Horse</td>
            </tr>
            <tr>
              <td><strong>Carnivores</strong></td>
              <td>These are animals that eat only other animals. They are predators and have sharp teeth and claws to hunt and tear flesh.</td>
              <td>Lion, Tiger, Snake, Eagle, Wolf, Leopard</td>
            </tr>
            <tr>
              <td><strong>Omnivores</strong></td>
              <td>These are animals that eat both plants and animals. They have a more varied diet and can adapt to different food sources.</td>
              <td>Human Beings, Bear, Crow, Dog, Pig, Raccoon</td>
            </tr>
          </tbody>
        </table>
        <div className="example-box">
          <h4>Example:</h4>
          <p>A cow is a <strong>herbivore</strong> because its diet consists solely of grass and other plant materials.</p>
          <p>A lion is a <strong>carnivore</strong> because it hunts and consumes the flesh of other animals.</p>
          <p>Humans are <strong>omnivores</strong> as they consume both plant-based foods (like fruits, vegetables, grains) and animal products (like meat, milk, eggs).</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Food provides energy, helps in growth, repairs damaged tissues, and protects us from diseases.</li>
          <li>Ingredients are the components used to prepare a food item.</li>
          <li>Our primary food sources are plants (providing roots, stems, leaves, fruits, seeds, flowers) and animals (providing milk, eggs, meat, honey).</li>
          <li>Animals are classified into herbivores (plant-eaters), carnivores (meat-eaters), and omnivores (plant and meat-eaters) based on their food habits.</li>
          <li>Understanding food sources and habits is crucial for a balanced diet and healthy living.</li>
        </ul>
      </div>
    </div>
  );
};

export default FoodWhereDoesItComeFromNotes;
