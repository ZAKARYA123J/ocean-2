import React, { useState } from "react";
import nurseImage from "../assets/images/done/TeamDev/service.png"; // Ensure the correct path
import { FaUser, FaEnvelope, FaPhone, FaStethoscope } from "react-icons/fa"; // Medical icons

const ContactForm = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to handle form submission feedback
  const [formStatus, setFormStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setFormStatus("Please fill in all fields.");
      return;
    }
    // Simulate form submission
    setFormStatus(
      "Thank you for contacting us! We will get back to you shortly."
    );
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-12 text-center animate-fade-in">
          CONTACT US
        </h2>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
          If you have any questions or need further information, please do not
          hesitate to contact us. Our team is ready to assist you.
        </p>
        <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-12">
          <div className="image-container">
          <img
  src={nurseImage}
  alt="Medical team assisting a patient"
  className="rounded-full object-cover"
  style={{ height: "450px", width: "600px" }} // Make width and height equal for a perfect circle
/>

          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-6 text-left bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-blue-200 dark:border-blue-600"
            style={{
              borderRadius: "10px",
              borderColor: "#E2E8F0",
              backgroundColor: "#F9FAFB",
            }}
          >
            {/* Input Fields */}
            {[
              {
                type: "text",
                placeholder: "First Name",
                name: "firstName",
                icon: <FaUser />,
              },
              {
                type: "text",
                placeholder: "Last Name",
                name: "lastName",
                icon: <FaUser />,
              },
              {
                type: "email",
                placeholder: "Email",
                name: "email",
                icon: <FaEnvelope />,
              },
              {
                type: "text",
                placeholder: "Phone",
                name: "phone",
                icon: <FaPhone />,
              },
            ].map((field, index) => (
              <div className="relative" key={index}>
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  {field.icon}
                </span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="pl-12 pr-4 py-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
                  aria-label={field.placeholder}
                  style={{
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  required
                />
              </div>
            ))}
            {/* Message Field */}
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="col-span-1 lg:col-span-2 p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
              rows="4"
              aria-label="Message"
              style={{
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              required
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="col-span-1 lg:col-span-2 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md flex items-center justify-center"
              style={{
                backgroundColor: "rgb(54, 172, 255)",
                borderColor: "rgb(54, 172, 255)",
                transition: "background-color 0.3s, box-shadow 0.3s",
              }}
            >
              <FaStethoscope className="mr-2" /> SEND
            </button>
            {/* Form status message */}
            {formStatus && (
              <p className="col-span-1 lg:col-span-2 text-center mt-4 text-red-600 dark:text-red-400">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
