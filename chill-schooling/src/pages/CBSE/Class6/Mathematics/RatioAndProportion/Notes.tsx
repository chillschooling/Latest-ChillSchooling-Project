import React from 'react';
import './Notes.css';

const RatioAndProportionNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 12: Ratio and Proportion</h1>

      <section id="introduction">
        <h2>Comparing Quantities</h2>
        <p>
          Have you ever compared two things, like how many apples you have versus how many oranges? <strong>Ratio</strong> and <strong>Proportion</strong> are fundamental mathematical concepts used to compare quantities and understand their relationships!
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Ratios are used in cooking (recipes), map scales, mixing paints, and even in financial analysis!</p>
        </div>
      </section>

      <section id="ratio">
        <h2>Ratio</h2>
        <p>
          A ratio is a comparison of two quantities of the same kind by division. It shows how many times one quantity is of the other. Ratios are usually expressed in the form a:b or a/b.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>If you have 3 apples and 5 oranges, the ratio of apples to oranges is 3:5 or 3/5.</p>
          <p>If a class has 20 boys and 10 girls, the ratio of boys to girls is 20:10, which simplifies to 2:1.</p>
        </div>
        <h3>Properties of Ratio:</h3>
        <ul>
          <li>A ratio has no units if the quantities being compared are of the same kind.</li>
          <li>The order of terms in a ratio is important (3:5 is not the same as 5:3).</li>
          <li>A ratio can be simplified to its lowest terms by dividing both terms by their Highest Common Factor (HCF).</li>
          <li>Multiplying or dividing each term of a ratio by the same non-zero number does not change the ratio.</li>
        </ul>
      </section>

      <section id="proportion">
        <h2>Proportion</h2>
        <p>
          A proportion is an equality of two ratios. If two ratios are equal, they are said to be in proportion. We write it as a:b :: c:d or a/b = c/d.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>2:3 = 4:6 is a proportion because 2/3 = 4/6. (Both simplify to 2/3)</p>
          <p>If 10 pens cost ₹100, then 5 pens cost ₹50. The ratio of pens is 10:5 (2:1) and the ratio of costs is 100:50 (2:1). Since the ratios are equal, they are in proportion.</p>
        </div>
        <h3>Terms of a Proportion:</h3>
        <p>In a proportion a:b :: c:d,</p>
        <ul>
          <li>'a' and 'd' are called the <strong>extreme terms</strong> (or extremes).</li>
          <li>'b' and 'c' are called the <strong>middle terms</strong> (or means).</li>
        </ul>
        <p>A key property of proportion is:</p>
        <p><strong>Product of Extremes = Product of Means</strong></p>
        <p>(a × d = b × c)</p>
        <div className="example-box">
          <h4>Example: Check if 2, 3, 4, 6 are in proportion.</h4>
          <p>Extremes: 2 and 6. Product = 2 × 6 = 12.</p>
          <p>Means: 3 and 4. Product = 3 × 4 = 12.</p>
          <p>Since Product of Extremes = Product of Means, 2, 3, 4, 6 are in proportion.</p>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>For <strong>Proportion</strong>, remember "<strong>Pro</strong>duct of the <strong>Ex</strong>tremes equals <strong>Pro</strong>duct of the <strong>Mea</strong>ns" (P.E. = P.M.).</p>
        </div>
      </section>

      <section id="unitary-method">
        <h2>Unitary Method</h2>
        <p>
          The unitary method is a technique used to find the value of a unit quantity (single item) and then use that unit value to find the value of a required quantity (multiple items).
        </p>
        <ol>
          <li>Find the value of a single unit.</li>
          <li>Multiply the value of the single unit by the number of units required.</li>
        </ol>
        <div className="example-box">
          <h4>Example: If 5 pens cost ₹50, what is the cost of 10 pens?</h4>
          <p><strong>Step 1:</strong> Find the cost of 1 pen.</p>
          <p>Cost of 1 pen = Total cost / Number of pens = ₹50 / 5 = ₹10</p>
          <p><strong>Step 2:</strong> Find the cost of 10 pens.</p>
          <p>Cost of 10 pens = Cost of 1 pen × 10 = ₹10 × 10 = ₹100</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Ratio is a comparison of two quantities by division, showing their relationship.</li>
          <li>Proportion is an equality of two ratios, where the product of extremes equals the product of means.</li>
          <li>The unitary method helps find the value of a required quantity by first finding the value of a unit quantity.</li>
        </ul>
      </div>
    </div>
  );
};

export default RatioAndProportionNotes;