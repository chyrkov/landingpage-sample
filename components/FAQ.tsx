"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How fast can we launch?",
    answer: "If we're aligned on scope, most projects move fast—without rushing quality.",
  },
  {
    question: 'Is no-code "serious" enough for my industry?',
    answer:
      'Yes—when built properly. The goal isn\'t the tool; it\'s a fast, secure, high-performing site that your team can maintain.',
  },
  {
    question: "Do you help with SEO?",
    answer:
      "I build the site with an SEO-ready structure and best practices from day one, and I can support ongoing SEO/content if you want.",
  },
  {
    question: "Will my team be able to update the website?",
    answer: "Yes. You'll have an editor-friendly setup plus a clean handoff.",
  },
  {
    question: "Do you only work with NYC?",
    answer: "NYC is my focus, but if you're a great fit, we can talk.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            FAQ
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-gray-300 hover:shadow-lg bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-purple-500 text-2xl font-light transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-5 bg-gray-50 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
