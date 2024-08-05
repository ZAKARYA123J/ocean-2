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
        <div className=" flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
                <div className="mb-6">
                    <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{blogPost.title}</h3>
                </div>
                <div className="mb-6">
                    <div className="group relative overflow-hidden">
                        <img 
                            src={blogPost.image} 
                            alt={blogPost.title} 
                            className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-500 transform group-hover:scale-110"
                        />
                    </div>
                </div>
                <div className="prose prose-gray">
                    <p>{blogPost.detail}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
