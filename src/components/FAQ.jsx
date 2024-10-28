import "./styles/FAQ.css";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
export default function FAQComponent() {
  const handleToggleFaq = (e) => {
    const faqCard = e.currentTarget;
    const faqCardAnswer = faqCard.querySelector(".faq__card__answer");
    const faqCardSvg = faqCard.querySelector("svg");
    if (faqCardAnswer.style.display === "block") {
      faqCardAnswer.style.display = "none";
      faqCardSvg.style.transform = "rotate(0deg)";
    }
    document.querySelectorAll(".faq__card__answer").forEach((item) => {
      item.style.display = "none";
    });
    document.querySelectorAll("svg").forEach((item) => {
      item.style.transform = "rotate(0deg)";
    });
    faqCardAnswer.style.display = "block";
    faqCardSvg.style.transform = "rotate(45deg)";
  };
  const FAQData = [
    {
      id: 1,
      question:
        "What does it mean to be a technical co-founder, and how can we help?",
      answer:
        "A technical co-founder is a partner who brings in the tech expertise needed to turn an idea into a fully developed product. With my background in development, I not only contribute technical insights but also help shape the overall strategy. Whether it’s overseeing product development, scaling infrastructure, or ensuring security, I’m there to guide each phase to set the business up for long-term success.",
    },
    {
      id: 2,
      question: "What's our investment process?",
      answer:
        "Our process is straightforward and tailored to each opportunity. First, we start with a conversation to understand the founder’s vision, the market potential, and the unique value of the product. If it aligns with our goals, we conduct a deeper evaluation of the business model, technical feasibility, and growth plans. Once both sides feel it’s a fit, we move forward with a custom investment plan to fuel growth.",
    },
    {
      id: 3,
      question: "What types of companies do we invest in?",
      answer:
        "We invest in innovative startups, particularly in technology-driven sectors like cybersecurity, blockchain, artificial intelligence, and IT services. We’re looking for businesses with a unique edge, a clear vision, and a strong, adaptable team that can make a lasting impact in their industry.",
    },
    {
      id: 4,
      question: "Do we offer seed funding?",
      answer:
        "Yes, we do offer seed funding. We understand that early-stage funding is critical for startups to gain traction. With seed investments, we aim to provide the resources and support needed to accelerate development and prepare the business for the next stages of growth.",
    },
  ];
  return (
    <div className="faq cent">
      <div className="faq__item col cent">
        <div className="faq__heading">
          <h1>FAQ</h1>
        </div>
        <div className="faq__card__container col cent">
          {FAQData.map((data) => {
            return (
              <div
                className="faq__card"
                key={data.id}
                onClick={handleToggleFaq}
              >
                <div className="faq__card__question row">
                  {data.id + ". "} {data.question}
                  <div>
                    <FaPlus />
                  </div>
                </div>
                <div className="faq__card__answer">{data.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
