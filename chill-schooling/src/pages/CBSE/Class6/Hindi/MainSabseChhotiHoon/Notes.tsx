import React from 'react';
import './Notes.css';

const MainSabseChhotiHoonNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 13: मैं सबसे छोटी होऊँ (Main Sabse Chhoti Hoon)</h1>

      <section id="introduction">
        <h2>कविता का परिचय (Introduction to the Poem)</h2>
        <p>
          यह कविता सुमित्रानंदन पंत द्वारा लिखी गई है, जिसमें एक छोटी बच्ची अपनी माँ से हमेशा छोटी रहने की इच्छा व्यक्त करती है ताकि वह हमेशा अपनी माँ के साथ रह सके और उसका प्यार पा सके।
        </p>
        <div className="did-you-know">
          <h4>क्या आप जानते हैं? (Did You Know?)</h4>
          <p>सुमित्रानंदन पंत हिंदी साहित्य के छायावादी युग के प्रमुख कवि हैं।</p>
        </div>
      </section>

      <section id="bachchi-ki-ichha">
        <h2>बच्ची की इच्छा (The Girl's Wish)</h2>
        <p>
          बच्ची अपनी माँ से कहती है कि वह कभी बड़ी नहीं होना चाहती, क्योंकि बड़ी होने पर माँ उसे छोड़ देगी।
        </p>
        <ul>
          <li>वह हमेशा अपनी माँ की उंगली पकड़कर चलना चाहती है।</li>
          <li>वह अपनी माँ के आँचल में छिपकर रहना चाहती है।</li>
          <li>वह अपनी माँ के हाथों से खाना खाना चाहती है।</li>
        </ul>
        <div className="example-box">
          <h4>उदाहरण (Example):</h4>
          <p>बच्ची कहती है, "मैं सबसे छोटी होऊँ, तेरी गोदी में सोऊँ।"</p>
        </div>
      </section>

      <section id="maa-ka-pyar">
        <h2>माँ का प्यार (Mother's Love)</h2>
        <p>
          कविता माँ और बच्चे के अटूट रिश्ते और माँ के निस्वार्थ प्यार को दर्शाती है।
        </p>
        <p>
          बच्ची को लगता है कि बड़ी होने पर उसे माँ का उतना प्यार नहीं मिलेगा जितना बचपन में मिलता है।
        </p>
        <div className="memory-trick">
          <h4>याद रखने का तरीका! (Memory Trick!)</h4>
          <p>छोटी बच्ची = माँ का प्यार + हमेशा साथ! (Little Girl = Mother's Love + Always Together!)</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>सारांश (Summary)</h4>
        <ul>
          <li>यह कविता एक छोटी बच्ची की अपनी माँ से हमेशा छोटी रहने की इच्छा पर आधारित है।</li>
          <li>बच्ची अपनी माँ के साथ हमेशा रहना चाहती है और उसका प्यार पाना चाहती है।</li>
          <li>कविता माँ और बच्चे के अटूट रिश्ते और माँ के निस्वार्थ प्यार को दर्शाती है।</li>
          <li>यह हमें बचपन की मासूमियत और माँ के प्यार के महत्व का एहसास कराती है।</li>
        </ul>
      </div>
    </div>
  );
};

export default MainSabseChhotiHoonNotes;
