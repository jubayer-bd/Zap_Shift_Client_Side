import React from "react";

const FAQAccordion = () => {
  // FAQ DATA ARRAY
  const faqs = [
    {
      id: "1",
      question: "How does your delivery service work?",
      answer:
        "Simply place an order through our platform, and our courier will pick up and deliver your item to the selected destination safely and on time.",
    },
    {
      id: "2",
      question: "How long does delivery take?",
      answer:
        "Delivery time depends on distance and traffic, but most orders are delivered within 30–60 minutes. You can track your delivery in real-time.",
    },
    {
      id: "3",
      question: "What items can I send?",
      answer:
        "You can send documents, parcels, groceries, small electronics, gifts, and more. Hazardous or illegal items are not allowed.",
    },
    {
      id: "4",
      question: "How much does delivery cost?",
      answer:
        "Delivery fees vary based on distance, parcel size, and urgency. Our app automatically calculates the price before you confirm the order.",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Question (FAQ)
      </h2>
      <p className="max-w-[900px] text-center mb-10 mx-auto text-secondary ">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      {faqs.map((item) => (
        <div
          key={item.id}
          className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2 "
        >
          {/* USE CHECKBOX INSTEAD OF RADIO FOR OPEN/CLOSE TOGGLE */}
          <input type="checkbox" className="peer" />

          <div className="collapse-title font-semibold ">{item.question}</div>

          <div className="collapse-content text-sm text-secondary">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
