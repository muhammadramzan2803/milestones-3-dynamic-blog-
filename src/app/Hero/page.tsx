"use client";
import { motion } from "framer-motion"; 
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative text-white py-40 bg-cover bg-right">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 lg:px-20">
        <div className="space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight mt-[-60px]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore the World of{" "}
            <span
              className="text-[#48cfad]"
              style={{ textShadow: "1px 1px 10px #48cfad" }}
            >
              Technology and Innovation
            </span>
          </motion.h1>
          <motion.p
            className="text-[19px] text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay updated with the latest trends, tutorials, and insights from
            the tech industry. Your journey to knowledge starts here.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              className="bg-[#48cfad] hover:bg-green-300 px-6 py-4 rounded-[30px] text-sm font-bold mt-6 text-black"
              aria-label="Read Latest Articles"
            >
              Read Latest Articles
            </button>
          </motion.div>
        </div>
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 transform scale-110 bg-gradient-to-tr from-purple-500 via-[#48cfad] to-[#48cfad] blur-lg rounded-[30px]"></div>
          <div className="relative flex flex-col space-y-6">
            <div className="relative mt-[-60px] p-3 rounded-[64px] shadow-md">
              <div className="absolute inset-0 transform scale-110 bg-gradient-to-tr from-purple-500 via-[#124e66] to-pink-500 blur-lg rounded-[50px]"></div>
              <div className="relative">
                <Image
                  src="/hero2.jpeg"
                  alt="Tech Innovation"
                  className="w-full h-auto object-cover rounded-[44px] shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
