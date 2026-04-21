"use client";
import React from 'react';
import Header from '../Header';
import FAQdropdown from '../FAQdropdown';
import Container from '../Container';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How does the AI work?",
    answer: "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM."
  },
  {
    question: "Can I customize the AI responses?",
    answer: "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM."
  },
  {
    question: "How fast is the setup process?",
    answer: "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM."
  },
  {
    question: "Which platforms are supported?",
    answer: "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM."
  },
  {
    question: "What happens if the AI doesn't understand something?",
    answer: "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM."
  },
  {
    question: "Is my data secure?",
    answer: "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM."
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM."
  },
  {
    question: "What kind of support do you provide?",
    answer: "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-10 bg-black">
      <Container>
        <div className="flex flex-col items-center">
          <Header
            titleText="FAQ"
            subtitleText="Everything you need to know about Tugatai Cargo Logistics"
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="mt-8 w-full flex flex-col gap-2"
          > 
            {faqs.map((faq, index) => (
              <FAQdropdown
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;