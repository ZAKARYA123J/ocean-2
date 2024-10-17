import React from 'react';
import Navbar from '../navbar';
import Footer from '../foooter';
import Doctor from '../../assets/images/1.jpg';
import For from '../../assets/images/formation/formation8.jpg';
import { CheckCircle, Clock, MapPin, Calendar, Award, User, Book } from "lucide-react";

function FirstAidEssentials() {
  return (
    <>
      <Navbar />

      <div className="container mt-20 mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">First Aid Essentials</h1>
              <p className="mt-2 text-xl text-muted-foreground">
                Comprehensive training to save lives and manage emergencies
              </p>
            </div>
            <div className="prose max-w-none dark:prose-invert">
              <p>
                Our First Aid Essentials course is designed to equip you with the knowledge and skills necessary to
                respond effectively in emergency situations. Whether you're a concerned parent, a workplace safety
                officer, or simply someone who wants to be prepared, this course will give you the confidence to act
                swiftly and appropriately when every second counts.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Course Highlights</CardTitle>
                <CardDescription>Key topics covered in this comprehensive course</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  {[
                    "Basic Life Support (BLS) techniques",
                    "Cardiopulmonary Resuscitation (CPR) for adults, children, and infants",
                    "Automated External Defibrillator (AED) usage",
                    "Wound care and advanced bandaging techniques",
                    "Management of fractures, sprains, and dislocations",
                    "Recognition and treatment of shock",
                    "Handling choking incidents in different age groups",
                    "Addressing burns, poisoning, and environmental emergencies",
                    "Effective communication with emergency services",
                  ].map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="btn btn-lg w-full sm:w-auto inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105">Enroll Now</button>
              <button className="btn btn-outline btn-lg w-full sm:w-auto inline-flex items-center px-4 py-4 text-lg font-bold transition-all duration-200 bg-transparent border rounded-xl hover:bg-gradient-to-r from-blue-600 to-red-600 hover:text-white hover:to-red-500 transform hover:scale-105">
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                Download Syllabus</button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src={For}
                alt="First Aid Training in Action"
                width={800}
                height={400}
                className="object-cover"
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <dt className="font-semibold">Duration:</dt>
                    <dd>2 days (16 hours) - 8 hours per day</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <dt className="font-semibold">Location:</dt>
                    <dd>Online (live webinar) and in-person options available</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <dt className="font-semibold">Next Start Date:</dt>
                    <dd>July 15, 2024 (Online), August 1, 2024 (In-person)</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <dt className="font-semibold">Certification:</dt>
                    <dd>Accredited First Aid Certification (valid for 2 years)</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <dt className="font-semibold">Class Size:</dt>
                    <dd>Maximum 20 participants (ensures personalized attention)</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Book className="h-4 w-4 text-muted-foreground" />
                    <dt className="font-semibold">Prerequisites:</dt>
                    <dd>None - suitable for beginners and those refreshing their skills</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Instructor</CardTitle>
              </CardHeader>
              <CardContent className="flex items-start gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                  <img
                    src={Doctor}
                    alt="Dr. Sarah Johnson"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Dr. Sarah Johnson, MD, FACEP</h3>
                  <p className="text-sm text-muted-foreground">
                    Board-Certified Emergency Medicine Physician with 15+ years of experience
                  </p>
                  <ul className="mt-2 text-sm">
                    <li>- Former Chief of Emergency Medicine at City General Hospital</li>
                    <li>- Certified instructor for AHA BLS, ACLS, and PALS</li>
                    <li>- Published author on emergency care and first aid practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Detailed Course Curriculum</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                title: "Module 1: Introduction to First Aid",
                content: [
                  "Understanding the importance of first aid",
                  "Legal considerations and duty of care",
                  "Assessing emergency situations safely",
                  "Activating emergency medical services effectively",
                ],
              },
              {
                title: "Module 2: Basic Life Support and CPR",
                content: [
                  "Adult, child, and infant CPR techniques",
                  "Rescue breathing and chest compressions",
                  "Using an Automated External Defibrillator (AED)",
                  "Managing choking incidents across different age groups",
                ],
              },
              {
                title: "Module 3: Wound Care and Bleeding Control",
                content: [
                  "Types of wounds and appropriate treatments",
                  "Controlling external bleeding",
                  "Recognizing and managing internal bleeding",
                  "Proper bandaging techniques for different body parts",
                ],
              },
              {
                title: "Module 4: Musculoskeletal Injuries",
                content: [
                  "Identifying fractures, sprains, and strains",
                  "Immobilization techniques for various injuries",
                  "Managing head, neck, and spinal injuries",
                  "Proper use of splints and slings",
                ],
              },
              {
                title: "Module 5: Medical Emergencies",
                content: [
                  "Recognizing and responding to heart attacks and strokes",
                  "Managing diabetic emergencies",
                  "Addressing severe allergic reactions (anaphylaxis)",
                  "Handling seizures and epileptic episodes",
                ],
              },
            ].map((module, index) => (
              <AccordionItem key={index} value={`module-${index + 1}`}>
                <AccordionTrigger>{module.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-1">
                    {module.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Card>
            <CardHeader>
              <CardTitle>What You'll Get</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  "Comprehensive course materials and handouts",
                  "Hands-on practice with professional training equipment",
                  "Personalized feedback from experienced instructors",
                  "Official First Aid certification upon successful completion",
                  "Access to online refresher materials for 2 years",
                  "Networking opportunities with healthcare professionals",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="flex flex-col items-center gap-4 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold text-center">Ready to become a life-saver?</h3>
            <p className="text-center text-muted-foreground">
              Enroll now and gain the skills to make a difference in emergency situations.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="btn btn-lg">Enroll in First Aid Essentials</button>
              <button className="btn btn-outline btn-lg">
                Contact Us for Group Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Mock Card and Accordion Components for demonstration
function Card({ children }) {
  return <div className="border p-4 rounded-lg">{children}</div>;
}

function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

function CardTitle({ children }) {
  return <h3 className="font-bold">{children}</h3>;
}

function CardDescription({ children }) {
  return <p>{children}</p>;
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

function Accordion({ children }) {
  return <div>{children}</div>;
}

function AccordionItem({ children }) {
  return <div className="border-b">{children}</div>;
}

function AccordionTrigger({ children }) {
  return <button className="w-full text-left p-2 font-bold">{children}</button>;
}

function AccordionContent({ children }) {
  return <div className="p-2">{children}</div>;
}

export default FirstAidEssentials;
