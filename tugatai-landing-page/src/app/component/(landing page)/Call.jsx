"use client"
import React from 'react'
import { motion } from "framer-motion";
import Container from '../Container';
import Header from '../Header';

const Call = () => {
  return (
    <section id="demo" className='relative bg-gradient-to-t from-[#000000] via-[#1A0B2E] to-[#000000] py-20 overflow-hidden'>
      <Container className="flex flex-col items-center gap-16">
        
       

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-5xl mx-auto items-center">
          
          {/* Left Content - Call Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 w-full"
          >
            <div className="bg-[#050925] backdrop-blur-xl  rounded-3xl py-16 px-6 shadow-2xl flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-inter text-white text-center">
                Get a call
              </h3>
              
              <div className="flex flex-col gap-4 mt-2">
                {/* Phone Input */}
                <div className="relative flex items-center border border-white rounded-xl overflow-hidden focus-within:border-[#AD46FF]/50 transition-colors">
                  <div className="flex items-center gap-2 pl-4 pr-2 py-3 border-r border-white/10 bg-[#1A1A24]">
                    <span className="text-sm"></span>
                    <span className="text-white text-sm font-inter">+1</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000" 
                    className="w-full  text-white px-4 py-3 outline-none text-sm font-inter placeholder:text-white/30"
                  />
                </div>

                {/* Email Input */}
                <div className="relative flex items-center  border border-white/10 rounded-xl overflow-hidden focus-within:border-[#AD46FF]/50 transition-colors">
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-full bg-transparent text-white px-4 py-3 outline-none text-sm font-inter placeholder:text-white/30"
                  />
                </div>

                {/* Submit Button */}
                <button className="w-full bg-[#AD46FF] hover:bg-[#9810FA] text-white font-inter font-semibold py-3.5 rounded-xl shadow-[0_0_20px_rgba(173,70,255,0.3)] hover:shadow-[0_0_25px_rgba(173,70,255,0.5)] transition-all mt-2">
                  Test Call
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Video Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 w-full flex items-center justify-center relative"
          >
            {/* The Video Container */}
            <div className="relative w-full aspect-video md:aspect-[16/10]  border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center group flex-col">
               <video 
                src="/AiVoice.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover rounded-3xl opacity-90 group-hover:opacity-100 transition-opacity duration-500 relative z-10"
              />
           
            </div>

            {/* Decorative Glow */}
           
          </motion.div>
          
        </div>
      </Container>
    </section>
  )
}

export default Call;