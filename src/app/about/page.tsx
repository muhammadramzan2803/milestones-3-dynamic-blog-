"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLaptopCode, FaRegLightbulb, FaUsers } from "react-icons/fa";
import Link from "next/link";

const AboutSection = () => {
  return (
    <motion.section
      className="bg-black py-20 px-6 sm:px-8 md:px-20 lg:px-40 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 mt-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[#48cfad] leading-relaxed mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a leading technology firm, bringing innovation and expertise to create unique digital solutions that help businesses thrive.
        </motion.p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16">
        <div className="text-center md:text-left">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#48cfad] mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h3>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our mission is to lead technological advancements, create scalable digital experiences, and empower businesses with modern software solutions.
          </motion.p>

          <motion.h3
            className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#48cfad] mb-4 mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Vision
          </motion.h3>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We envision a future where technology bridges gaps, simplifies processes, and drives meaningful innovation for every business and individual.
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full sm:w-full md:w-[650px] h-full relative rounded-lg overflow-hidden shadow-xl mt-[-50px] mr-40"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about.png"
            alt="Tech Innovation"
            width={1000}
            height={800}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Icons Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <FaLaptopCode className="text-4xl sm:text-5xl text-[#48cfad] mb-4 mx-auto" />
          <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">Innovation</h4>
          <p className="text-lg sm:text-xl text-gray-200">
            Constantly evolving and developing new tools that push the boundaries of whats possible.
          </p>
        </div>
        <div className="text-center">
          <FaRegLightbulb className="text-4xl sm:text-5xl text-[#48cfad] mb-4 mx-auto" />
          <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">Creativity</h4>
          <p className="text-lg sm:text-xl text-gray-200">
            Designing cutting-edge solutions with creativity at the heart of everything we do.
          </p>
        </div>
        <div className="text-center">
          <FaUsers className="text-4xl sm:text-5xl text-[#48cfad] mb-4 mx-auto" />
          <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">Collaboration</h4>
          <p className="text-lg sm:text-xl text-gray-200">
            Fostering a collaborative culture that drives success for our team and clients.
          </p>
        </div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          href="/"
          className="bg-[#48cfad] hover:bg-green-300 text-black px-8 py-3 rounded-[22px] text-lg sm:text-xl font-semibold hover:bg-gray-300 transition duration-300 mb-20"
        >
          Get in Touch
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
