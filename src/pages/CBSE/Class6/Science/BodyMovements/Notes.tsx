import React from 'react';
import './Notes.css';

const BodyMovementsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 8: Body Movements</h1>

      <section id="introduction">
        <h2>How Do We Move?</h2>
        <p>
          Our body is constantly in motion, whether we are walking, running, jumping, or even just blinking our eyes. These movements are possible due to the coordinated efforts of our bones, muscles, and joints.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The human skeleton is made up of 206 bones in an adult!</p>
        </div>
      </section>

      <section id="human-body-and-its-movements">
        <h2>Human Body and Its Movements</h2>

        <h3>1. The Skeletal System:</h3>
        <p>
          The skeleton forms the framework of our body. It provides support, shape, and protects the internal organs. Bones are hard and rigid and cannot bend on their own.
        </p>
        <ul>
          <li>
            <strong>Bones:</strong> Provide the rigid structure.
          </li>
          <li>
            <strong>Cartilage:</strong> A softer and more flexible part of the skeleton, found between bones at joints (e.g., nose tip, ear lobe). It helps in smooth movement.
          </li>
        </ul>

        <h3>2. Joints:</h3>
        <p>
          Joints are the places where two or more bones meet. They allow different types of movements.
        </p>
        <table>
          <thead>
            <tr>
              <th>Type of Joint</th>
              <th>Description</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Ball and Socket Joint</strong></td>
              <td>Allows movement in all directions.</td>
              <td>Shoulder, Hip</td>
            </tr>
            <tr>
              <td><strong>Pivot Joint</strong></td>
              <td>Allows rotational movement.</td>
              <td>Between neck and head</td>
            </tr>
            <tr>
              <td><strong>Hinge Joint</strong></td>
              <td>Allows movement in only one direction (like a door hinge).</td>
              <td>Elbow, Knee, Fingers</td>
            </tr>
            <tr>
              <td><strong>Fixed Joint (Immovable)</strong></td>
              <td>Bones are held tightly together and allow no movement.</td>
              <td>Bones of the skull</td>
            </tr>
          </tbody>
        </table>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a <strong>Hinge</strong> joint like a door, it only swings one way!</p>
        </div>

        <h3>3. The Muscular System:</h3>
        <p>
          Muscles are attached to bones and help in movement. They work by contracting (shortening) and relaxing (lengthening). Muscles usually work in pairs; when one contracts, the other relaxes.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>When you bend your arm, one muscle contracts to pull the bone, and the other relaxes.</p>
        </div>
      </section>

      <section id="gait-of-animals">
        <h2>Gait of Animals</h2>
        <p>Different animals move in different ways, adapted to their environment and needs.</p>
        <ul>
          <li>
            <strong>Earthworm:</strong> Moves by repeated extension and contraction of its body, using tiny bristles on its underside for grip. It has no bones.
          </li>
          <li>
            <strong>Snail:</strong> Moves with a wavy motion using a strong muscular foot. Its shell is for protection, not movement.
          </li>
          <li>
            <strong>Cockroach:</strong> Has a hard outer skeleton, three pairs of legs for walking, and two pairs of wings for flying. It has distinct muscles for legs and wings.
          </li>
          <li>
            <strong>Birds:</strong> Have hollow bones, strong breast muscles, and wings (modified forelimbs) for flight. Their hind limbs are for walking and perching.
          </li>
          <li>
            <strong>Fish:</strong> Move by forming curves in their bodies and tails. Fins help them balance and change direction.
          </li>
          <li>
            <strong>Snakes:</strong> Move by creating loops in their bodies, pushing against the ground in a "serpentine motion." They have a long backbone and many muscles.
          </li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Movement and locomotion are facilitated by bones, muscles, and joints.</li>
          <li>The skeletal system provides support and protection.</li>
          <li>Joints allow different types of movements (ball and socket, pivot, hinge, fixed).</li>
          <li>Muscles work by contraction and relaxation.</li>
          <li>Animals like earthworms, snails, cockroaches, birds, fish, and snakes have unique ways of moving.</li>
        </ul>
      </div>
    </div>
  );
};

export default BodyMovementsNotes;
