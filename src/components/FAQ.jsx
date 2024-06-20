import React, { useState } from "react";

const FAQ = () => {

  // Array of FAQs
  const faqs = [
    {
      question: "WHAT MAKES YOUR WEBSITES SO AFFORDABLE?",
      answer:
        "The Make Lots Foundation exists to give business owners an alternative to high prices web design. We don’t cut back at all on quality. We count on donations from people just like you to help us continue to keep our prices so low.",
    },
    {
      question: "WHAT IS THE IMPORTANCE OF HAVING A WEBSITE?",
      answer:
        "We started the Make Lots Foundation to give all entrepreneurs a voice at the lowest price we could offer. Your professionally designed website will be your voice. If you don’t have one your customers and clients will not find you. Our web design costs are less than 10% of the industry standard.",
    },
    {
        question: "HOW LONG WILL IT TAKE TO BUILD MY WEBSITE?",
        answer:
          "Typical time to complete your website is only 5 to 10 business days once we have all the necessary information. This time can be extended if changes or additions are needed to be made. E-commerce websites will take longer.",
      },
      {
        question: "CAN I UPDATE THE WEBSITE MYSELF ONCE IT’S BEEN BUILT?",
        answer:
          "Yes. We provide the option to update text and images yourself through the easy-to-use WordPress interface. You can add edit and delete content without paying us to do it for you. If you do need us to make small changes/edits for you please contact us and we will get it done for you at no cost. If it is a bigger job, we will let you know and give you a quote.",
      },
      {
        question: "WHO PROVIDES HOSTING FOR THE WEBSITE?",
        answer:
          "After we build your website, we will provide the hosting for your website. In addition, we will keep your website and plugins up to date. Also, we are always available for technical issues and small edits to your website. We use the same hosting company for our own website and for ALL of our clients.",
      }
  ];

  // State to track open/close status of each FAQ
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the FAQ open/close state
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[45%] m-auto mt-8 ">
      <h1 className="text-3xl font-semibold text-[#203548] text-center mb-16">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 mt-6 border-b border-gray-300 p-2 pb-6 hover:cursor-pointer"
        >
          <div onClick={() => toggleFAQ(index)} className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="font-semibold">{faq.question}</p>
              <button>{openIndex === index ? "➖" : "➕"}</button>
            </div>
            {openIndex === index && (
              <p className="text-sm leading-relaxed">{faq.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
