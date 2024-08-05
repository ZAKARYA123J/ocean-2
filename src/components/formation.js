// components/CourseCard.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { blogData } from "../data/data";
import { FiCalendar, FiClock } from '../assets/icons/vander';

const CourseCard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredBlogData = blogData.filter(item => {
        const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || item.type.includes(filter);
        return matchesSearchTerm && matchesFilter;
    });

    const filterOptions = [
        { label: 'All', value: 'All' },
        { label: 'Formation', value: 'Formation' },
        { label: 'language', value: 'language' }
    ];

    return (
        <section className="relative md:py-24 py-16" id="blog">
            <div className="container relative">
                 <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Formation</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    <div className="relative flex justify-center items-center mt-4">
                        <input 
                            type="text" 
                            placeholder="Search by title" 
                            value={searchTerm} 
                            onChange={handleSearch} 
                            className="absolute left-0 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                        />
                        <select 
                            value={filter} 
                            onChange={handleFilterChange} 
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                        >
                            {filterOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {filteredBlogData.map((item, index) => {
                        return (
                            <div className="group relative overflow-hidden" key={index}>
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <img src={item.image}  className="group-hover:scale-110 transition-transform duration-500" alt=""/>
                                </div>

                                <div className="mt-6">
                                    <div className="flex mb-4">
                                    </div>
                                    <Link to="" className="title text-lg font-semibold hover:text-teal-500 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>

                                    <div className="mt-3">
                                        <Link to={`/blog/${index+1}`} className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CourseCard;
