"use client"
import React from "react";
import Container from "../Container";
import Header from "../Header";
import { FiMessageSquare, FiCalendar, FiUsers, FiDollarSign, FiGlobe, FiZap, FiClock } from 'react-icons/fi';
import { LuBot } from "react-icons/lu";
import { motion } from "framer-motion";

const featuresData = [
  {
    id: 1,
    icon: <FiMessageSquare className="text-white w-7 h-7" />,
    iconBg: "bg-[#1E65FF]",
    bulletColor: "bg-[#1E65FF]",
    title: "AI Chat Automation",
    subtitle: "Instant intelligent responses in any language",
    bullets: ["Auto replies", "Multi-language support", "Context understanding", "Natural conversations"]
  },
  {
    id: 2,
    icon: <FiCalendar className="text-white w-7 h-7" />,
    iconBg: "bg-[#00D06A]",
    bulletColor: "bg-[#00D06A]",
    title: "Smart Booking System",
    subtitle: "Automated scheduling and calendar management",
    bullets: ["Auto scheduling", "Calendar integration", "Confirmation system", "Reminders & notifications"]
  },
  {
    id: 3,
    icon: <FiUsers className="text-white w-7 h-7" />,
    iconBg: "bg-[#AD46FF]",
    bulletColor: "bg-[#AD46FF]",
    title: "CRM & Lead Tracking",
    subtitle: "Complete customer relationship management",
    bullets: ["Pipeline tracking", "Customer history", "Lead scoring", "Automated follow-ups"]
  },
  {
    id: 4,
    icon: <FiDollarSign className="text-white w-7 h-7" />,
    iconBg: "bg-[#FF6A00]",
    bulletColor: "bg-[#FF6A00]",
    title: "Intelligent Pricing Engine",
    subtitle: "Dynamic quote generation and pricing rules",
    bullets: ["Rule-based pricing", "Auto quote generation", "Discount management", "Price optimization"]
  }
];

const smallFeaturesData = [
  {
    id: 5,
    icon: <FiGlobe className="text-[#C27AFF] w-8 h-8" />,
    title: "Multi-Channel",
    subtitle: "WhatsApp, messanger, Insta",
  },
  {
    id: 6,
    icon: <LuBot className="text-[#C27AFF] w-8 h-8" />,
    title: "AI Powered",
    subtitle: "GPT-4 Based",
  },
  {
    id: 7,
    icon: <FiZap className="text-[#C27AFF] w-8 h-8" />,
    title: "Real-Time",
    subtitle: "Instant Updates",
  },
  {
    id: 8,
    icon: <FiClock className="text-[#C27AFF] w-8 h-8" />,
    title: "24/7 Active",
    subtitle: "Never Miss a Lead",
  }
];

const Features = () => {
  return (
    <section className="py-10">
      <Container>
        <Header
          titleText={`Core Features`}
          subtitleText={`Everything you need to automate and grow your business`}
        />

        <div className="grid grid-cols-12 gap-6 mt-16">
          {/* Top 4 Large Cards */}
          {featuresData.map((feature, idx) => (
            <motion.div 
              key={feature.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="col-span-12 md:col-span-6 bg-gradient-to-br from-[#1A1A27]  to-[#0F0F18] border border-white/10 rounded-3xl p-8 "
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-8 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2 font-inter">{feature.title}</h3>
              <p className="text-[#99A1AF] text-base mb-8 font-inter">{feature.subtitle}</p>
              
              <ul className="space-y-3.5">
                {feature.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-center gap-4">
                    <div className={`w-1.5 h-1.5 rounded-full ${feature.bulletColor} `} />
                    <span className="text-white/70 text-sm font-inter">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Bottom 4 Small Cards */}
          {smallFeaturesData.map((feature, idx) => (
            <motion.div 
              key={feature.id} 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
              className=" md:col-span-3 col-span-12 bg-gradient-to-br from-[#1A1A27]  to-[#0F0F18] border border-white/10 rounded-[24px] py-10 px-6 flex flex-col items-center justify-center text-center  mt-2"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h4 className="text-white font-semibold text-base mb-1.5 font-inter">{feature.title}</h4>
              <p className="text-[#99A1AF] text-sm font-inter">{feature.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
