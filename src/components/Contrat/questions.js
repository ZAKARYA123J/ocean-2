import React from 'react';
import questionMark from './icon/question-mark-round-icon.svg';
import { questionSectionContent } from './data';

const QuestionSection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 sm:py-16 lg:py-14">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8" style={{ backgroundImage: 'url("https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-bold leading-tight bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent sm:text-2xl lg:text-4xl">
            {questionSectionContent.title}
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-700">
            {questionSectionContent.description}
          </p>
        </div>
        <div className="grid grid-cols-1 mt-6 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {questionSectionContent.questions.map((question, index) => (
            <div key={index} className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full">
                <img src={questionMark} alt="Question mark" />
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">{question.question}</p>
                <p className="mt-2 text-base text-gray-700">{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-200 rounded-full">
            <p className="text-black">
              {questionSectionContent.footer.text} <a href="/contract" title="" className="font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent transition-all duration-200 hover:text-gradient-to-r focus:gradient-to-r hover:underline">{questionSectionContent.footer.linkText}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
