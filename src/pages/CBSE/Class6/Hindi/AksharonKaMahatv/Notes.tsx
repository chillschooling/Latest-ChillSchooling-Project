import React from 'react';
import './Notes.css';

const AksharonKaMahatvNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 5: अक्षरों का महत्व (Aksharon Ka Mahatv)</h1>

      <section id="introduction">
        <h2>अक्षरों की कहानी (The Story of Letters)</h2>
        <p>
          यह पाठ गुणाकर मुले द्वारा लिखा गया है, जिसमें अक्षरों के महत्व और उनके इतिहास पर प्रकाश डाला गया है। अक्षरों के बिना हम अपने विचारों को लिख नहीं सकते और न ही ज्ञान को एक पीढ़ी से दूसरी पीढ़ी तक पहुँचा सकते हैं।
        </p>
        <div className="did-you-know">
          <h4>क्या आप जानते हैं? (Did You Know?)</h4>
          <p>अक्षरों की खोज लगभग 6000 साल पहले हुई थी।</p>
        </div>
      </section>

      <section id="aksharon-ka-itihas">
        <h2>अक्षरों का इतिहास (History of Letters)</h2>
        <p>
          अक्षरों की खोज मानव सभ्यता के लिए एक बहुत बड़ी उपलब्धि थी।
        </p>
        <ul>
          <li>शुरुआत में, मनुष्य चित्रों के माध्यम से अपने विचारों को व्यक्त करता था।</li>
          <li>धीरे-धीरे, ये चित्र संकेत बन गए और फिर अक्षरों का विकास हुआ।</li>
          <li>अक्षरों की खोज के बाद ही इतिहास का सही अर्थों में आरंभ हुआ।</li>
        </ul>
        <div className="example-box">
          <h4>उदाहरण (Example):</h4>
          <p>पुराने समय में लोग जानवरों के चित्र बनाकर अपनी बातें समझाते थे, जैसे गुफाओं में बनी पेंटिंग।</p>
        </div>
      </section>

      <section id="aksharon-ka-mahatv">
        <h2>अक्षरों का महत्व (Importance of Letters)</h2>
        <p>
          अक्षर हमारे जीवन में बहुत महत्वपूर्ण हैं:
        </p>
        <ul>
          <li>अक्षरों के कारण ही हम पढ़ और लिख सकते हैं।</li>
          <li>अक्षरों के कारण ही हम ज्ञान को सुरक्षित रख सकते हैं।</li>
          <li>अक्षरों के कारण ही हम एक-दूसरे से संवाद कर सकते हैं।</li>
          <li>अक्षरों के बिना हम इतिहास को नहीं जान सकते।</li>
        </ul>
        <div className="memory-trick">
          <h4>याद रखने का तरीका! (Memory Trick!)</h4>
          <p>अक्षर = ज्ञान + इतिहास + संवाद! (Letters = Knowledge + History + Communication!)</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>सारांश (Summary)</h4>
        <ul>
          <li>अक्षरों की खोज मानव सभ्यता की एक महान उपलब्धि है।</li>
          <li>अक्षरों के बिना हम ज्ञान को सुरक्षित नहीं रख सकते और न ही इतिहास को जान सकते हैं।</li>
          <li>अक्षरों के कारण ही हम पढ़, लिख और संवाद कर सकते हैं।</li>
          <li>यह पाठ हमें अक्षरों के महत्व और उनके इतिहास के बारे में बताता है।</li>
        </ul>
      </div>
    </div>
  );
};

export default AksharonKaMahatvNotes;
