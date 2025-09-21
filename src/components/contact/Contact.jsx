import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    message: ""
  });

  const [popup, setPopup] = useState({ show: false, success: false });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_26chl5l", // from EmailJS
        "template_iiqguvy", // from EmailJS
        {
            full_name: formData.full_name,
          message: formData.message
        },
        "eRavAlWsMDge8g99j" // from EmailJS
      )
      .then(
        () => {
          setPopup({ show: true, success: true });
        
          setFormData({
            full_name: "",
            message: ""
          });
        },
        () => {
          setPopup({ show: true, success: false });
        }
      );
  };

  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>
        <form onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-white"
            >
              Message
            </label>
            <textarea
              rows="6"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg"
          >
            Send Message
          </button>
        </form>

              {/* ✅ Popup Message */}
              {popup.show && (
          <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50">
            <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center max-w-sm">
              <h3 className="text-lg font-bold mb-2">
                {popup.success ? "✅ Message Sent!" : "❌ Something Went Wrong"}
              </h3>
              <p>
                {popup.success
                  ? "Thank you! I’ll get back to you soon."
                  : "Please try again later."}
              </p>
              <button
                onClick={() => setPopup({ show: false, success: false })}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
