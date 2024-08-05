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
            <div className="ml-8 p-6 bg-white rounded-lg shadow-lg w-72 h-full flex flex-col justify-center items-center">
                <button className="bg-purple-600 text-white py-2 px-6 rounded-lg text-lg font-semibold flex items-center">
                     Réserver
                </button>
            </div>
    </div>
    );
};
export default BlogDetail;