import { useRef } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Consultation request sent successfully!");
          e.currentTarget.reset();
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send request. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#433673] mb-6">
             Contact Us
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Share your project details and budget range — our team will reach out for your personalized consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDB8D9] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#433673]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDB8D9] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#433673]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600">sairama1026@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDB8D9] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#433673]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Visit Us</p>
                  <p className="text-gray-600">123 Design Street, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                  placeholder="john@example.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  name="user_project"
                  id="project"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                >
                  <option value="">Select Project Type</option>
                    <option value="4bhk">4 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="villa">Villa</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  name="user_budget"
                  id="budget"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                >
                  <option value="">Select Budget Range</option>
  <option value="immediately">Immediately (0-15 days)</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="3months">Within 3 Months</option>
             
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#362C59] text-white py-3 rounded-lg hover:bg-[#433673] transition-colors font-semibold"
              >
                Send Consultation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
