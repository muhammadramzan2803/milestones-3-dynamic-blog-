"use client";
import { blogData } from "@/app/data/blogData";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface BlogCardItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

function BlogCardItem({
  id,
  title,
  description,
  image,
}: BlogCardItemProps) {
  const [isClicked, setIsClicked] = useState(false); // Track if the button has been clicked

  const handleButtonClick = () => {
    setIsClicked(true); // Mark as clicked
    // Navigate after a short delay to avoid interference from animation
    setTimeout(() => {
      window.location.href = `/blogs/${id}`; // Programmatically navigate to the blog
    }, 150); // Adjust the delay to ensure the click animation has time to complete
  };

  return (
    <motion.div
      key={id}
      className="p-4 border-2 border-[#48cfad] shadow-lg hover:shadow-xl cursor-pointer rounded-sm text-center flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileTap={{ scale: 0.95 }} // Scale effect on card click
    >
      {/* Image Component */}
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Title */}
      <h2 className="font-bold font-serif py-2 text-xl mt-4 hover:text-[#48cfad]">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-300 flex-1">{description}</p>

      {/* Read More Button */}
      <div className="mt-6">
        {/* Use a motion.div to animate button click */}
        <motion.button
          className={`text-[#48cfad] font-bold hover:text-[#48cfad] hover:underline text-[17px] mt-[-80px] ${
            isClicked ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleButtonClick} // Use onClick to handle navigation
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          disabled={isClicked} // Disable button after clicking
        >
          {isClicked ? "Loading..." : "Read More"}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function BlogCard() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
        Latest Blogs
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogData && blogData.length > 0 ? (
          blogData.map((blog) => (
            <BlogCardItem
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.imageUrl}
            />
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}