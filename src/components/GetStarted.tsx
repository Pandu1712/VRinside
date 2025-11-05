import { X, MessageCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function GetStarted() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
   
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id.replace("gs-", "")]: e.target.value });
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();


  const adminParams = {
    user_name: formData.name,
    user_email: formData.email,
    user_phone: formData.phone,
    user_project: formData.project,
    user_budget: formData.budget,
  
    admin_email: "sairama1026@gmail.com",
  };

  const userParams = {
    user_name: formData.name,
    user_email: formData.email,
   
  };

  // 1️⃣ Send to Admin
  emailjs
    .send("service_u3g7zqt", "template_98tzbjj", adminParams, "eCghyYkcbDQ6ZkRW2")
    .then(() => {
      // 2️⃣ Send Confirmation to User
      return emailjs.send("service_u3g7zqt", "template_user_confirmation", userParams, "eCghyYkcbDQ6ZkRW2");
    })
    .then(() => {
      alert("✅ Appointment booked! Confirmation email sent to you and admin.");
      setIsOpen(false);
    })
    .catch((err) => {
      console.error("❌ Email send failed:", err);
      alert("Failed to send email. Please check console for details.");
    });
};



  const handleWhatsApp = () => {
    const phoneNumber = "+918688547851";
    const message = encodeURIComponent("Hi! I’d like to know more about your interior design services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Floating Buttons */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-[#433673] text-white px-6 py-3 rounded-lg hover:bg-[#5a48a6] transition-all shadow-lg hover:shadow-xl z-40 cursor-pointer"
      >
        Get Started
      </button>

      <button
        onClick={handleWhatsApp}
        className="fixed bottom-24 right-8 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="gs-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="gs-name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="gs-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="gs-email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="gs-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="gs-phone"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="gs-project" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="gs-project"
                  onChange={handleChange}
                  value={formData.project}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                >
                  <option value="">Select a project type</option>
                  <option>4 BHK</option>
                  <option>3 BHK</option>
                  <option>2 BHK</option>
                  <option>Villa</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="gs-budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="gs-budget"
                  onChange={handleChange}
                  value={formData.budget}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                >
                  <option value="">Select budget range</option>
                  <option>Immediately (0-15 days)</option>
                  <option>Within 1 Month</option>
                  <option>Within 3 Months</option>
                  <option>₹50L+</option>
                </select>
              </div>

         

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#433673] text-white py-2 rounded-lg hover:bg-[#5a48a6] transition-colors font-semibold mt-6"
              >
                Book Appointment
              </button>
            </form>

            {/* WhatsApp CTA */}
            <div className="flex justify-center items-center p-4 border-t border-gray-200">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
