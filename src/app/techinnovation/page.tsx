"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

export default function TechInnovations() {
  const innovations = [
    {
      era: "1970s",
      title: "The Birth of Personal Computing",
      description: "Introduction of personal computers, paving the way for digital transformation.",
      highlights: [
        "1971: Intel 4004 - The first microprocessor.",
        "1976: Apple I by Steve Jobs and Steve Wozniak.",
        "1979: Introduction of spreadsheets (VisiCalc).",
      ],
    },
    {
      era: "1990s",
      title: "The Internet Revolution",
      description: "The rise of the World Wide Web transformed communication and commerce.",
      highlights: [
        "1991: Tim Berners-Lee launched the first website.",
        "1995: Amazon and eBay were founded.",
        "1998: Google was launched.",
      ],
    },
    {
      era: "2000s",
      title: "Mobile Technology Boom",
      description: "Smartphones became ubiquitous, changing how people interact with technology.",
      highlights: [
        "2004: Facebook started the social media revolution.",
        "2007: Apple released the first iPhone.",
        "2008: Introduction of Android OS.",
      ],
    },
    {
      era: "2010s",
      title: "Cloud and AI",
      description: "Advances in cloud computing and AI shaped modern technological ecosystems.",
      highlights: [
        "2012: Rise of cloud services like AWS and Azure.",
        "2016: Introduction of AI-powered personal assistants (e.g., Alexa, Siri).",
        "2018: Breakthroughs in autonomous driving technology.",
      ],
    },
    {
      era: "2020s",
      title: "Sustainability and Emerging Tech",
      description: "Focus on green technologies and advancements in blockchain, quantum computing, and IoT.",
      highlights: [
        "2021: Increased adoption of renewable energy technologies.",
        "2022: Rise of the Metaverse and Web3.",
        "2023: Quantum computing research breakthroughs.",
      ],
    },
  ];

  return (
    <div className="bg-black py-12 px-6 text-white">
  {/* Hero Section */}
      <section className="text-center mb-12">
        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Tech Innovations Timeline
        </motion.h1>
      </section>

  {/* Timeline Section */}
      <section className="max-w-5xl mx-auto">
        {innovations.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="w-12 h-12 bg-white rounded-full flex justify-center items-center text-black font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.era}
              </motion.div>
              <motion.h2
                className="ml-4 text-3xl font-bold text-[#48cfad]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {item.title}
              </motion.h2>
            </div>
            <motion.p
              className="text-white text-xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {item.description}
            </motion.p>
            <motion.ul
              className="list-disc text-xl ml-8 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {item.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.3 }}
                >
                  {highlight}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </section>

  {/* Stay Updated Section */}
      <section className="bg-[#292929] text-white py-12 mt-12 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Stay Updated
        </motion.h2>
        <motion.p
          className="mb-6 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Subscribe to our newsletter for the latest updates and insights.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full max-w-md text-black rounded-lg shadow focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.div
            className="w-full sm:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <Button>Subscribe</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}