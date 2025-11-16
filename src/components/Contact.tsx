import { useState } from "react";
import { User, Mail, Phone, MapPin, Building2 } from "lucide-react";


const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    community: "",
    requirement: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `
*New Property Inquiry*
----------------------
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Location:* ${form.location}
*Community:* ${form.community}
*Requirement:* ${form.requirement}
`;
    const url = `https://wa.me/919705666101?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-green-50 to-green-100">
    <div className="min-h-screen bg-[#E8F9EF] px-4 py-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#347844] tracking-wide">
           Contact Us
          </h2>

      <div className="mt-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Form Section */}
        <div className=" bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-green-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <h2 className="text-xl font-semibold text-green-700 mb-6 text-center">
            Send Your Requirement
          </h2>

          <div className="space-y-4">

            {/* Input Component */}
            {[
              { icon: <User />, name: "name", placeholder: "Your Name" },
              { icon: <Mail />, name: "email", placeholder: "Email" },
              { icon: <Phone />, name: "phone", placeholder: "Contact Number" },
              { icon: <MapPin />, name: "location", placeholder: "Location" },
              { icon: <Building2 />, name: "community", placeholder: "Community" },
            ].map((field, index) => (
              <div key={index} className="input-box">
                <span className="icon">{field.icon}</span>
                <input
                  name={field.name}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="input"
                />
              </div>
            ))}

            {/* Requirement Dropdown */}
            <div className="input-box">
              <select
                name="requirement"
                onChange={handleChange}
                className="input text-gray-600"
              >
                <option value="">Select Project Type</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
                <option value="Villa">Villa</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition shadow-md"
            >
              Send via WhatsApp
            </button>

          </div>
        </div>

        {/* Contact + Map Section */}
        <div className="space-y-6">

          {/* Office Contact Box */}
          <div className="bg-[#017A38] text-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Office Address</h3>
            <p className="leading-relaxed text-gray-100">
              Vanasthalipuram,<br />
              LB Nagar, Hyderabad, 500074
            </p>

            <p className="mt-4 space-y-1 text-gray-100">
              📞 +91 9705666101 <br />
              📞 +91 9703484448 <br />
              📧 vrinside48@gmail.com
            </p>
          </div>

          {/* Map Box */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-green-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-64 md:h-80"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactPage;
