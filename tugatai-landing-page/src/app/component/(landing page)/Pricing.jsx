"use client"
import React from 'react'
import Header from '../Header'
import Container from '../Container'
import { FiCheck } from 'react-icons/fi'
import { motion } from 'framer-motion'

const HalfMoonIcon = () => (
  <div className="transition-all duration-500 drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(152,16,250,0.6)]">
    <svg className="w-[56px] h-[56px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8 A16 16 0 0 1 24 40 Z" fill="#F3E8FF" />
      <path d="M24 8 A16 16 0 0 0 24 40 Z" fill="#9810FA" />
    </svg>
  </div>
)

const FullMoonIcon = () => (
  <div className="transition-all duration-500 drop-shadow-none group-hover:drop-shadow-[0_0_20px_rgba(152,16,250,0.8)]">
    <svg className="w-[56px] h-[56px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" fill="#9810FA" />
      <circle cx="24" cy="24" r="9" fill="#F3E8FF" />
    </svg>
  </div>
)

const MoonEnterpriseIcon = () => (
  <div className="transition-all duration-500 drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(243,232,255,0.4)]">
    <svg className="w-[56px] h-[56px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="15" stroke="#F3E8FF" strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="8" fill="#F3E8FF" />
    </svg>
  </div>
)

const pricingPlans = [
  {
    name: "Half Moon",
    description: "Best for small businesses getting started",
    price: "49",
    icon: <HalfMoonIcon />,
    features: [
      "1 User",
      "2 Channels",
      "1,000 chats per month",
      "Shared Inbox",
      "Basic AI instant replies",
      "Basic lead Capture",
      "Basic booking form",
      "No Advance automation",
      "Basic lead capture",
    ]
  },
  {
    name: "Full Moon",
    description: "Best for scaling teams and growing businesses",
    price: "199",
    icon: <FullMoonIcon />,
    features: [
      "5-10 team users",
      "Multi-channel support",
      "5,000 chats per month",
      "Advanced AI + CRM",
      "Full booking system",
      "Pricing engine",
      "Workflow automation",
      "Priority support"
    ]
  },
  {
    name: "Moon Enterprise",
    description: "For large teams with advanced needs",
    price: "499",
    icon: <MoonEnterpriseIcon />,
    features: [
      "Unlimited users",
      "Unlimited channels",
      "Unlimited chats",
      "Advanced automation",
      "API integration",
      "Voice AI included",
      "Custom workflows",
      "Dedicated support",
      "SLA guarantee"
    ]
  }
]

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0614]">
      <Container>
        <Header
          titleText={`Simple, Scalable Pricing`}
          subtitleText={`Choose the plan that fits your business. Upgrade or downgrade anytime`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-25 mt-25  mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative flex flex-col p-8 rounded-4xl bg-[#12131C] border border-white/5 transition-all duration-500 hover:bg-gradient-to-r from-[#9810FA]/35  to-[#AD46FF]/35 hover:border-[#9810FA]/90 hover:shadow-[0_0_40px_rgba(173,70,255,0.2)] hover:-translate-y-10 cursor-pointer "
            >
              <div className="flex flex-col items-center text-center mb-8">
                <div className="mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white font-inter mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#9CA3AF] text-sm font-inter group-hover:text-white/70 transition-colors">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline justify-center gap-1">
                  <span className="text-white text-5xl font-bold font-inter">${plan.price}</span>
                  <span className="text-[#9CA3AF] text-sm font-inter">/month</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mt-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-3">
                      <FiCheck className="text-[#6A7282] text-lg shrink-0 group-hover:text-[#AD46FF] transition-colors" />
                      <span className="text-[#D1D5DC] text-smfont-inter group-hover:text-[#E5E7EB] transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-5 w-full py-4 rounded-xl text-white font-inter font-semibold bg-white/5 border border-white/10 group-hover:bg-gradient-to-r group-hover:from-[#9810FA] group-hover:to-[#AD46FF] group-hover:border-transparent transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(173,70,255,0.4)] ">
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Pricing