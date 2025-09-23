import React, { useState } from "react";
import "./faq.css";
import faqimg from "./images/faq.png";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the most important things I should know about riding a bike?",
      answer:
        "Always wear a helmet and follow traffic rules for safety.Maintain your bike regularly and stay alert to your surroundings while riding."
    },
    {
      question: "How can I tell if my helmet is old and needs to be replaced?",
      answer:
        "Check for cracks, dents, frayed straps, or loose padding, and replace it if it’s over 5 years old or has been in a crash, even if it looks fine."
    },
    {
      question: "My bike has been in storage. Is it safe to ride?",
      answer:
        "Inspect the tires, brakes, chain, and frame for damage or rust, and ensure everything works properly before riding."
    },
    {
      question: "What rules should I follow when riding my bike?",
      answer:
        "Always ride with traffic, use hand signals, and wear a helmet."
    }
  ];

  return (
    <div className="faq-container" id="faq">
      <div className="faq-head-text">
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>
      </div>

      <div className="container">
        <div className="body-img">
          <img src={faqimg} alt="FAQ" />
        </div>

        <div className="body-container">
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <button onClick={() => toggleAccordion(index)}>
                {item.question}
              </button>
              <div
                className="accordionBody"
                style={{
                  display: activeIndex === index ? "block" : "none"
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
