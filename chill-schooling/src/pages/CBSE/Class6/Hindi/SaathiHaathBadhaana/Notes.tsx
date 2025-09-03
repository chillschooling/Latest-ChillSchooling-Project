import React from 'react';
import './Notes.css';

const SaathiHaathBadhaanaNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 7: साथी हाथ बढ़ाना (Saathi Haath Badhaana)</h1>

      <section id="introduction">
        <h2>कविता का परिचय (Introduction to the Poem)</h2>
        <p>
          यह कविता साहिर लुधियानवी द्वारा लिखी गई है, जो एकता और सहयोग के महत्व पर जोर देती है। यह कविता बताती है कि जब लोग मिलकर काम करते हैं, तो वे बड़ी से बड़ी मुश्किलों को भी हल कर सकते हैं।
        </p>
        <div className="did-you-know">
          <h4>क्या आप जानते हैं? (Did You Know?)</h4>
          <p>साहिर लुधियानवी एक प्रसिद्ध गीतकार और कवि थे, जिन्होंने कई फिल्मों के लिए गीत लिखे।</p>
        </div>
      </section>

      <section id="ekta-aur-sahyog">
        <h2>एकता और सहयोग (Unity and Cooperation)</h2>
        <p>
          कविता में एकता और सहयोग के कई उदाहरण दिए गए हैं:
        </p>
        <ul>
          <li>एक-एक बूंद से सागर बनता है।</li>
          <li>एक-एक कण से रेगिस्तान बनता है।</li>
          <li>एक-एक राई से पर्वत बनता है।</li>
          <li>एक-एक ज़र्रे से इंसान बनता है।</li>
        </ul>
        <div className="example-box">
          <h4>उदाहरण (Example):</h4>
          <p>जब मज़दूर मिलकर काम करते हैं, तो वे बड़ी-बड़ी इमारतें बना सकते हैं या पहाड़ खोद सकते हैं।</p>
        </div>
      </section>

      <section id="mehnat-ka-mahatv">
        <h2>मेहनत का महत्व (Importance of Hard Work)</h2>
        <p>
          कविता मेहनत और पसीने के महत्व पर भी जोर देती है। यह बताती है कि मेहनत करने वालों को कभी हार नहीं माननी चाहिए।
        </p>
        <p>
          यह कविता हमें सिखाती है कि हमें हमेशा एक-दूसरे का साथ देना चाहिए और मिलकर काम करना चाहिए।
        </p>
        <div className="memory-trick">
          <h4>याद रखने का तरीका! (Memory Trick!)</h4>
          <p>साथी हाथ बढ़ाना = मिलकर काम करना + सफलता पाना! (Extend a helping hand = Work together + Achieve success!)</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>सारांश (Summary)</h4>
        <ul>
          <li>यह कविता एकता, सहयोग और मेहनत के महत्व पर आधारित है।</li>
          <li>यह बताती है कि मिलकर काम करने से बड़ी से बड़ी मुश्किलों को भी हल किया जा सकता है।</li>
          <li>कविता हमें एक-दूसरे का साथ देने और मेहनत करने के लिए प्रेरित करती है।</li>
          <li>यह एक प्रेरणादायक कविता है जो हमें जीवन में आगे बढ़ने के लिए प्रोत्साहित करती है।</li>
        </ul>
      </div>
    </div>
  );
};

export default SaathiHaathBadhaanaNotes;
