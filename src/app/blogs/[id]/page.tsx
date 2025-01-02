import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import { blogData } from '@/app/data/blogData';
import CommentForm from '@/components/CommentForm';

interface BlogPostProps {
  params: Promise<{ id: string }>; 
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;  

  if (!id) {
    return notFound();
  }

  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <div className="container mx-auto p-4 w-[90%] md:w-[80%] xl:w-[70%]">

      {/* Back to Home Icon */}
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 mb-6 cursor-pointer">
            <IoIosArrowBack className="w-5 h-5 text-gray-200 hover:text-gray-300" />
            <span className="text-gray-200 hover:text-gray-300">Back to Home</span>
          </div>
        </Link>

      {/* Blog Image */}
        <div className="relative w-full h-64 lg:h-96">
          <Image
            src={blog.imageUrl}  
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

      {/* Blog Content */}
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#48cfad] mb-4">{blog.title}</h1>
          <p className="text-[17px] text-gray-400 mb-8 text-center"> {blog.description}</p>

      {/* Render Full Blog Content */}
          <div
            className="text-[20px] font-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

      {/* Comment Section */}
        <CommentForm blogId={id} /> 
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id.toString(), 
  }));
}