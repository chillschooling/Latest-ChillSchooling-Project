import React from 'react';
import './Notes.css';

const LightShadowsAndReflectionsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 11: Light, Shadows and Reflections</h1>

      <section id="introduction">
        <h2>The World of Light</h2>
        <p>
          Light is a form of energy that enables us to see objects. We see objects when light from a source falls on them and is then reflected into our eyes.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The Sun is our primary natural source of light!</p>
        </div>
      </section>

      <section id="luminous-and-non-luminous-objects">
        <h2>Luminous and Non-Luminous Objects</h2>
        <ul>
          <li>
            <strong>Luminous Objects:</strong> Objects that emit their own light. (e.g., Sun, stars, electric bulb, torch)
          </li>
          <li>
            <strong>Non-Luminous Objects:</strong> Objects that do not produce light but become visible when light from a luminous source falls on them and is reflected. (e.g., Moon, planets, chair, book)
          </li>
        </ul>
      </section>

      <section id="transparent-translucent-opaque">
        <h2>Transparent, Translucent, and Opaque Objects</h2>
        <p>Materials are classified based on how they interact with light:</p>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Transparent</strong></td>
              <td>Allow light to pass through them completely, enabling clear vision.</td>
              <td>Glass, Air, Clear Water</td>
            </tr>
            <tr>
              <td><strong>Translucent</strong></td>
              <td>Allow only a part of the light to pass through, making objects appear unclear.</td>
              <td>Butter paper, Frosted glass, Oily paper</td>
            </tr>
            <tr>
              <td><strong>Opaque</strong></td>
              <td>Completely block light from passing through them. You cannot see through them.</td>
              <td>Wood, Book, Metal, Cardboard</td>
            </tr>
          </tbody>
        </table>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a window: if it's clear, it's <strong>Transparent</strong>. If it's foggy, it's <strong>Translucent</strong>. If it's a wall, it's <strong>Opaque</strong>!</p>
        </div>
      </section>

      <section id="shadows">
        <h2>Shadows</h2>
        <p>
          A shadow is formed when an opaque object obstructs the path of light. Shadows are always black, regardless of the color of the object, and only show the outline or shape of the object.
        </p>
        <h3>Conditions for Shadow Formation:</h3>
        <ul>
          <li>A source of light.</li>
          <li>An opaque object.</li>
          <li>A screen or surface for the shadow to be cast upon.</li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>When you stand in the sunlight, your body blocks the light, creating a shadow behind you.</p>
        </div>
        <h3>Pinhole Camera:</h3>
        <p>
          A simple device that forms an inverted, real image of a bright object by allowing light to pass through a tiny hole. It demonstrates that light travels in straight lines.
        </p>
      </section>

      <section id="reflection">
        <h2>Reflection</h2>
        <p>
          Reflection is the phenomenon where light bounces back when it strikes a surface. Smooth and shiny surfaces, like mirrors, reflect light effectively.
        </p>
        <div className="example-box">
          <h4>Image Formation by a Plane Mirror:</h4>
          <ul>
            <li>The image is erect (upright).</li>
            <li>The image is of the same size as the object.</li>
            <li>The image is laterally inverted (left appears right and vice-versa).</li>
            <li>The image is formed behind the mirror.</li>
          </ul>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Light enables us to see objects.</li>
          <li>Objects are luminous (emit light) or non-luminous (reflect light).</li>
          <li>Materials are transparent, translucent, or opaque based on light passage.</li>
          <li>Shadows form when opaque objects block light.</li>
          <li>Reflection is when light bounces back from a surface, forming images.</li>
        </ul>
      </div>
    </div>
  );
};

export default LightShadowsAndReflectionsNotes;
