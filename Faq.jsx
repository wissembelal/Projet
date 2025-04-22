import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why hire a freelancer?",
      answer: "Hiring a freelancer allows access to specialized skills quickly and flexibly."
    },
    {
      question: "What makes Fiverr different from other platforms?",
      answer: "Fiverr offers affordable services with a secure system and easy-to-use interface."
    },
    {
      question: "How much does it cost to sign up on Fiverr?",
      answer: "Signing up is completely free for both freelancers and clients."
    },
    {
      question: "How can I communicate with my freelancer?",
      answer: "You can use Fiverr’s built-in messaging system to talk with your freelancer."
    },
    {
      question: "What payment methods are available on Fiverr?",
      answer: "Fiverr supports credit cards, PayPal, and more depending on your region."
    },
    {
      question: "How can I ensure the result is worth the price?",
      answer: "Check reviews and ratings, and request revisions if needed before approval."
    },
    {
      question: "Who do I contact if I have an issue with a freelancer?",
      answer: "Fiverr’s support team is available to help with any issues or disputes."
    },
    {
      question: "Can I work with French-speaking freelancers?",
      answer: "Yes, you can filter freelancers by language, including French."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section style={{ maxWidth: "1500px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}>FAQ</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          onClick={() => toggleFAQ(index)}
          style={{
            borderBottom: "1px solid #eee",
            padding: "16px 0",
            cursor: "pointer"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: "500", margin: 0 }}>
              {faq.question}
            </h3>
            <ChevronDown
              size={20}
              style={{
                transition: "transform 0.2s",
                transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                color: "#666"
              }}
            />
          </div>
          {activeIndex === index && (
            <p style={{ marginTop: "10px", color: "#555", fontSize: "0.95rem" }}>
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;
