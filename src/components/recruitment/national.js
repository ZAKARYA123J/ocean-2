import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../navbar";
import img from '../../assets/images/blog/01.jpg'
const CTA = styled.button`
  background-color: var(--white);
  color: #3a86ff;
  padding: 0.5rem 1rem;
  margin: 1rem;
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

function National() {
  // Sample data for the table
  useEffect(() => {
    // Restore the scroll position from local storage
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      localStorage.removeItem('scrollPosition'); // Clear the stored position after restoring
    }
  }, []);
  return (
    <>
    {/* <CTA>
      <Link to="/" className="text-blue-500 " >  <button style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <IoIosArrowBack />
      Back
    </button></Link>
      </CTA> */}
    
      <div className="max-w-sm rounded overflow-hidden border border-sky-500  shadow-lg mt-20">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base mb-4">
          Description or introductory text for the card goes here.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li className="mb-2">Item 1</li>
          <li className="mb-2">Item 2</li>
          <li className="mb-2">Item 3</li>
        </ul>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
    </>
  )
}

export default National;
