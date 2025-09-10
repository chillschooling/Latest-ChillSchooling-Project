import React from 'react';
import './Notes.css';

const SaansSaansMeinBaansNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 17: साँस-साँस में बाँस (Saans-Saans Mein Baans)</h1>

      <section id="introduction">
        <h2>पाठ का परिचय (Introduction to the Lesson)</h2>
        <p>
          यह पाठ बाँस के महत्व और उससे बनने वाली विभिन्न चीज़ों के बारे में है। यह बताता है कि कैसे बाँस हमारे जीवन का एक अभिन्न अंग है और कैसे लोग अपनी कला और कौशल से बाँस को उपयोगी वस्तुओं में बदलते हैं।
        </p>
        <div className="did-you-know">
          <h4>क्या आप जानते हैं? (Did You Know?)</h4>
          <p>बाँस दुनिया की सबसे तेज़ी से बढ़ने वाली घास है।</p>
        </div>
      </section>

      <section id="baans-ka-mahatv">
        <h2>बाँस का महत्व (Importance of Bamboo)</h2>
        <p>
          बाँस का उपयोग विभिन्न प्रकार की वस्तुओं को बनाने के लिए किया जाता है:
        </p>
        <ul>
          <li>टोकरियाँ, चटाइयाँ, और फर्नीचर।</li>
          <li>घर बनाने के लिए सामग्री।</li>
          <li>संगीत वाद्ययंत्र।</li>
          <li>कागज़ और कपड़े।</li>
        </ul>
        <div className="example-box">
          <h4>उदाहरण (Example):</h4>
          <p>पूर्वोत्तर भारत में, बाँस का उपयोग पुल बनाने और पानी को एक जगह से दूसरी जगह ले जाने के लिए भी किया जाता है।</p>
        </div>
      </section>

      <section id="baans-ki-kala">
        <h2>बाँस की कला (Art of Bamboo)</h2>
        <p>
          बाँस से वस्तुएँ बनाना एक कला है जिसे लोग पीढ़ी-दर-पीढ़ी सीखते हैं।
        </p>
        <p>
          यह पाठ हमें प्रकृति के संसाधनों का सम्मान करने और उनका सही उपयोग करने के लिए प्रेरित करता है।
        </p>
        <div className="memory-trick">
          <h4>याद रखने का तरीका! (Memory Trick!)</h4>
          <p>बाँस = बहुउपयोगी + कला! (Bamboo = Multi-purpose + Art!)</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>सारांश (Summary)</h4>
        <ul>
          <li>यह पाठ बाँस के महत्व और उससे बनने वाली विभिन्न चीज़ों के बारे में है।</li>
          <li>बाँस का उपयोग टोकरियाँ, फर्नीचर, घर बनाने की सामग्री, संगीत वाद्ययंत्र, और कागज़ बनाने के लिए किया जाता है।</li>
          <li>बाँस से वस्तुएँ बनाना एक कला है जिसे लोग पीढ़ी-दर-पीढ़ी सीखते हैं।</li>
          <li>यह पाठ हमें प्रकृति के संसाधनों का सम्मान करने और उनका सही उपयोग करने के लिए प्रेरित करता है।</li>
        </ul>
      </div>
    </div>
  );
};

export default SaansSaansMeinBaansNotes;
