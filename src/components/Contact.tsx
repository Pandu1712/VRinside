import { useRef,useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

    const [selectedProject, setSelectedProject] = useState("");
  const [budgetOptions, setBudgetOptions] = useState<string[]>([]);

// Mapping Project Type → Budget Ranges
  const budgetData: Record<string, string[]> = {
    "2bhk": ["Standard: ~10 - 12 Lacs", "Premium: ~12 - 16 Lacs", "Luxury: ~16 - 22 Lacs"],
    "3bhk": ["Standard: ~14 - 18 Lacs", "Premium: ~18 - 26 Lacs", "Luxury: ~26 - 38 Lacs"],
    "4bhk": ["Standard: ~20 - 26 Lacs", "Premium: ~26 - 38 Lacs", "Luxury: ~38 - 56 Lacs"],
    "villa": ["Standard: ~20 - 26 Lacs", "Premium: ~26 - 38 Lacs", "Luxury: ~38 - 56 Lacs"],
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const project = e.target.value;
    setSelectedProject(project);
    setBudgetOptions(budgetData[project] || []);
  };


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
        form.current?.reset(); 
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
                  <p className="text-gray-600">+91 86885 47851</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDB8D9] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#433673]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600">iniziointeriorshyd@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDB8D9] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#433673]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Visit Us</p>
                  <p className="text-gray-600">Flat No 1302 , Block I , Aditya Imperial Heights 
Hafeezpet 
Hyderabad- 500049</p>
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
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Number (Responsive for Mobile) */}
<div className="w-full">
  <label
    htmlFor="phone"
    className="block text-sm sm:text-base font-semibold text-gray-700 mb-2"
  >
    Phone Number
  </label>
  <input
    type="tel"
    name="user_phone"
    id="phone"
    required
    pattern="[0-9]{10}"
    maxLength={10}
    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none text-sm sm:text-base"
    placeholder="9876543210"
  />
  <p className="text-xs text-gray-500 mt-1">Enter a valid 10-digit mobile number</p>
</div>


{/* Area */}
<div>
  <label
    htmlFor="area"
    className="block text-sm font-semibold text-gray-700 mb-2"
  >
    Area (in Sq. Ft)
  </label>
  <input
    type="text"
    name="user_area"
    id="area"
    placeholder="e.g., 1200 Sq Ft"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
  />
</div>

{/* Name of the Community */}
<div>
  <label
    htmlFor="community"
    className="block text-sm font-semibold text-gray-700 mb-2"
  >
    Name of the Community
  </label>
  <input
    type="text"
    name="user_community"
    id="community"
    placeholder="e.g., Aditya Imperial Heights"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
  />
</div>


{/* Project Type */}
      <div>
        <label
          htmlFor="project"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Project Type
        </label>
        <select
          name="user_project"
          id="project"
            value={selectedProject}
          required
          onChange={handleProjectChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
        >
          <option value="">Select Project Type</option>
          <option value="2bhk">2 BHK Apartment (800–1300 Sq Ft)</option>
          <option value="3bhk">3 BHK Apartment (1301–2400 Sq Ft)</option>
          <option value="4bhk">4 BHK Apartment (2401–3500 Sq Ft)</option>
          <option value="villa">3/4 BHK Villa (1600–3500 Sq Ft)</option>
        </select>
      </div>

      {/* Budget Range */}
      {budgetOptions.length > 0 && (
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Budget Range
          </label>
          <select
            name="user_budget"
            id="budget"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
          >
            <option value="">Select Budget Range</option>
            {budgetOptions.map((budget, index) => (
              <option key={index} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      )}

              {/* Requirement Timelines */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                Requirement Timelines
                </label>
                <select
                  name="user_timeline"
                  id="budget"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] outline-none"
                >
                  <option value="">Requirement Timelines</option>
                  <option value="immediately">Immediate - (0-15 Days )</option>
                  <option value="1month">Within - ( 30 Days ) </option>
                  <option value="3months">Within - ( 90 Days )</option>
                  <option value="greater">Greater &rarr;  90 Days </option>
             
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#362C59] text-white py-3 rounded-lg hover:bg-[#433673] transition-colors font-semibold cursor-pointer"
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
