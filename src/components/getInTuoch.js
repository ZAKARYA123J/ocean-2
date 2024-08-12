import React, { useRef } from "react";
import emailjs from "emailjs-com";
import contact2 from '../assets/images/done/contact.svg';
import styled from "styled-components";


const CTA = styled.button`
  background-color: var(--white);
  color: #3a86ff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  border: solid 1px blue;

  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default function GetInTouch() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_USER_ID',
      { to_email: 'ayoubbounaga2001@gmail.com' }  // Add this line to specify the email recipient
    )
    .then((result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
    }, (error) => {
        console.log(error.text);
        alert("Failed to Send Message");
    });
  };

  return (
    <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="contact">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4">CONTACT US</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            We’d love to hear from you! Fill out the form below with your name, email, and message, and we’ll get back to you shortly. Thanks for reaching out!
          </p>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-7 md:col-span-6">
            <img src={contact2} alt="" />
          </div>
          <div className="lg:col-span-5 md:col-span-6">
            <div className="lg:ms-5">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                    <div className="lg:col-span-6">
                      <label htmlFor="name" className="font-semibold">Your Name:</label>
                      <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :" required />
                    </div>
                    <div className="lg:col-span-6">
                      <label htmlFor="email" className="font-semibold">Your Email:</label>
                      <input name="email" id="email" type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :" required />
                    </div>
                    <div className="lg:col-span-12">
                      <label htmlFor="subject" className="font-semibold">Your Question:</label>
                      <input name="subject" id="subject" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Subject :" required />
                    </div>
                    <div className="lg:col-span-12">
                      <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                      <textarea name="comments" id="comments" className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :" required></textarea>
                    </div>
                  </div>
                  <CTA>
                    <button type="submit" id="submit" name="send">Send Message</button>
                  </CTA>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
