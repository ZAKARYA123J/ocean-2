import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from "../data/data";

const BlogDetail = () => {
    const { id } = useParams();
    const blogPost = blogData.find(post => post.id === parseInt(id));

    if (!blogPost) {
        return <div className="text-center py-4 text-red-500">Blog post not found.</div>;
    }

    return (
        <>
    <div className="flex items-center justify-center min-h-screen">
            <div className="">
                <div className="mb-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blogPost.title}</h1>
                    <p className="text-lg text-gray-600 mb-2">{blogPost.date}</p>
                </div>
            <div className="mb-6 ">
                <img 
                src={blogPost.image} 
                alt={blogPost.title} 
                className=""
                />
            </div>
                <div className="prose prose-gray">
                     <p>{blogPost.detail}</p>
                </div>
            </div>
          <div className=" mb-80 ml-1 p-6 bg-white rounded-lg shadow-lg w-100 h-full flex flex-col justify-start items-start">
    <div className="w-full flex flex-col items-center">
        <p className="text-gray-500 mb-6 text-2xl text-center">To register, simply click here</p>
        <button className="bg-purple-600 text-white py-4 px-40 rounded-lg text-xl font-semibold flex items-center">
            <span className="mr-2">⚡</span> Réserver
        </button>
    </div>
</div>




            </div>
            </>
    );
};
export default BlogDetail;