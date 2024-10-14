import React from 'react';
import questinMark from './icon/question-mark-round-icon.svg';

const QuestionSection = () => {
    return (
        <section class="py-10 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 sm:py-16 lg:py-14 " >
            <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8" style={{ backgroundImage: 'url("https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">Questions & Answers</h2>
                    <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-700">Explore the common questions and answers about Celebration</p>
                </div>
                <div class="grid grid-cols-1 mt-6 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                    <div class="flex items-start">
                        <div class="flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-full">
                            <img src={questinMark} alt="Question mark"  />
                        </div>
                        <div class="ml-4">
                            <p class="text-xl font-bold ">How to create an account?</p>
                            <p class="mt-2 text-base text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-full">
                        <img src={questinMark} alt="Question mark"  />
                        </div>
                        <div class="ml-4">
                            <p class="text-xl font-bold ">How can I make payment?</p>
                            <p class="mt-2 text-base text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-full">
                        <img src={questinMark} alt="Question mark"  />
                        </div>
                        <div class="ml-4">
                            <p class="text-xl font-bold ">Do you provide discounts?</p>
                            <p class="mt-2 text-base text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-full">
                        <img src={questinMark} alt="Question mark" />
                        </div>
                        <div class="ml-4">
                            <p class="text-xl font-bold ">How do you provide support?</p>
                            <p class="mt-2 text-base text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center mt-8 md:mt-20">
                    <div class="px-8 py-4 text-center bg-gray-800 rounded-full">
                        <p class="text-gray-50">Didn’t find the answer you are looking for? <a href="#" title="" class="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact our support</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default QuestionSection;
