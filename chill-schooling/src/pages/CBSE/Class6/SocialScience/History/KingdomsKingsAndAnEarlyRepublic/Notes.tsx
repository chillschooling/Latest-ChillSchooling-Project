import React from 'react';
import './Notes.css';

const KingdomsKingsAndAnEarlyRepublicNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 5: Kingdoms, Kings and an Early Republic</h1>

      <section id="introduction">
        <h2>How Some Men Became Rulers</h2>
        <p>
          About 3000 years ago, some men became rulers by performing very big sacrifices. The ashvamedha or horse sacrifice was one such ritual. A horse was let loose to wander freely, and it was guarded by the raja’s men. If the horse wandered into the kingdoms of other rajas and they stopped it, they had to fight. If they allowed the horse to pass, it meant that they accepted the raja who wanted to perform the sacrifice was stronger than them.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word 'raja' means king or ruler.</p>
        </div>
      </section>

      <section id="varnas">
        <h2>Varnas</h2>
        <p>
          During this period, people were grouped into four varnas:
        </p>
        <h3>1. Brahmins:</h3>
        <p>
          Expected to study and teach the Vedas, perform sacrifices, and receive gifts.
        </p>
        <h3>2. Kshatriyas:</h3>
        <p>
          Were warriors and rulers, expected to fight battles and protect people.
        </p>
        <h3>3. Vaishyas:</h3>
        <p>
          Were farmers, herders, and traders.
        </p>
        <h3>4. Shudras:</h3>
        <p>
          Were expected to serve the other three groups.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>A Brahmin would conduct a religious ceremony, while a Kshatriya would lead an army into battle.</p>
        </div>
      </section>

      <section id="janapadas-and-mahajanapadas">
        <h2>Janapadas and Mahajanapadas</h2>
        <p>
          The rajas who performed these big sacrifices were now recognised as rajas of janapadas, literally meaning the land where the jana (people) set its foot. Some janapadas became more important than others and were known as mahajanapadas.
        </p>
        <p>
          Most mahajanapadas had a capital city, many of which were fortified. This meant that huge walls of wood, brick or stone were built around them. Forts were probably built because people wanted to protect themselves from attacks by other kings and also to show how rich and powerful they were.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Janapadas are like small states, and Mahajanapadas are like bigger, more powerful states!</p>
        </div>
      </section>

      <section id="taxes-and-agriculture">
        <h2>Taxes and Agriculture</h2>
        <p>
          With the building of large kingdoms and the maintenance of armies, rulers needed more resources. So, they started collecting taxes.
        </p>
        <ul>
          <li><strong>Taxes on crops:</strong> The most important tax was on crops, usually fixed at 1/6th of what was produced.</li>
          <li><strong>Taxes on crafts:</strong> There were also taxes on craftspersons, herders, and traders.</li>
          <li><strong>Changes in agriculture:</strong> Two major changes were introduced in agriculture around this time:
            <ul>
              <li>The use of iron ploughshares became common, which helped in turning the heavy, clayey soil better than a wooden ploughshare.</li>
              <li>People began transplanting paddy, which meant that instead of scattering seed on the ground, saplings were grown and then planted in the fields. This led to increased production.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="magadha">
        <h2>Magadha: A Powerful Mahajanapada</h2>
        <p>
          Magadha became the most important mahajanapada in about two hundred years. Many rivers such as the Ganga and Son flowed through Magadha. This was important for transport, water supplies, making the land fertile.
        </p>
        <p>
          Magadha had two very powerful rulers, Bimbisara and Ajatashatru, who used all possible means to conquer other janapadas. Mahapadma Nanda was another important ruler. Rajagriha (present-day Rajgir) in Bihar was the capital of Magadha for several years. Later, the capital was shifted to Pataliputra (present-day Patna).
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Some men became rulers by performing sacrifices like the ashvamedha.</li>
          <li>Society was divided into four varnas: Brahmins, Kshatriyas, Vaishyas, and Shudras.</li>
          <li>Janapadas were early settlements, and some grew into powerful Mahajanapadas with fortified capital cities.</li>
          <li>Rulers collected taxes on crops, crafts, herders, and traders.</li>
          <li>Agricultural changes included iron ploughshares and paddy transplantation.</li>
          <li>Magadha emerged as a powerful mahajanapada due to its strategic location and strong rulers.</li>
        </ul>
      </div>
    </div>
  );
};

export default KingdomsKingsAndAnEarlyRepublicNotes;
