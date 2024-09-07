import React from "react";

type Props = {};

const FAQ: React.FC<Props> = (props: Props) => {
  const faqs = [
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email.",
    },
    {
      question: "Are there group discounts available?",
      answer:
        "Yes, we offer group discounts for corporate or team enrollments. Contact our support team for more information.",
    },
    {
      question: "Can I access the courses offline?",
      answer:
        "No, our courses are currently only available online. You need an internet connection to access the course content.",
    },
    {
      question: "What programming languages are covered?",
      answer:
        "We cover a variety of programming languages including JavaScript, Python, Java, C++, and more. Check our course catalog for details.",
    },
    // Add more random FAQs as needed
  ];

  return (
    <div className="dark:text-white text-black pl-2">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{faq.question}</h3>
          <p className="text-base">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
