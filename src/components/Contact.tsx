import { useState, type JSX } from "react";
import { User, Mail, Phone, MapPin, Building2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    community: "",
    projectType: "",
  });

  const projectTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa", "Duplex"];

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "contact") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppSend = () => {
    if (formData.contact.length !== 10) return;
    const m = formData;
    const msg = `Hello, I am *${m.name}*%0A📧 Email: ${m.email}%0A📞 Contact: ${m.contact}%0A📍 Location: ${m.location}%0A🏢 Community: ${m.community}%0A🏗 Project Type: ${m.projectType}`;
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  const Input = ({
    icon,
    label,
    type = "text",
    name,
  }: {
    icon: JSX.Element;
    label: string;
    type?: string;
    name: string;
  }) => (
    <div className="flex items-center gap-3 bg-white border border-green-300 rounded-xl px-4 py-3 focus-within:border-green-600 transition">
      {icon}
      <input
        type={type}
        name={name}
        placeholder={label}
        onChange={handleChange}
        className="w-full bg-transparent outline-none placeholder-gray-500 text-gray-700"
      />
    </div>
  );

  return (
    <section id="contact" className="py-20 px-6 bg-[#ecfff3]">
      {/* Heading */}
      <div className="text-center mb-14">
       <h2 className="text-3xl md:text-5xl font-bold text-[#347844] tracking-wide">
           Contact Us
          </h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-green-300">
          <h3 className="text-2xl font-semibold text-green-700 mb-8">
            Send Your Requirement
          </h3>

          <div className="space-y-5">
            <Input icon={<User className="text-green-600" />} label="Your Name" name="name" />
            <Input icon={<Mail className="text-green-600" />} type="email" label="Email" name="email" />
            <Input icon={<Phone className="text-green-600" />} type="tel" label="Contact Number" name="contact" />
            <Input icon={<MapPin className="text-green-600" />} label="Location" name="location" />
            <Input icon={<Building2 className="text-green-600" />} label="Community" name="community" />

            <select
              name="projectType"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white border border-green-300 text-gray-700 outline-none focus:border-green-600 transition"
            >
              <option value="">Select Project Type</option>
              {projectTypes.map((pt) => (
                <option key={pt} value={pt}>
                  {pt}
                </option>
              ))}
            </select>

            <button
              onClick={handleWhatsAppSend}
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl mt-4 hover:bg-green-700 transition shadow-md"
            >
              Send via WhatsApp
            </button>
          </div>
        </div>

        {/* ADDRESS + MAP */}
        <div className="space-y-6">
          <div className="bg-green-700 text-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Office Address</h3>
            <p className="opacity-95 leading-7">
              Flat No 1302, Block I, <br />
              Aditya Imperial Heights, <br />
              Hafeezpet, Hyderabad, 500049
            </p>

            <p className="mt-4 font-medium">📞 +91 99999 99999</p>
            <p className="font-medium">📧 vrinsideinteriors@gmail.com</p>
          </div>

          <div className="border border-green-300 rounded-3xl overflow-hidden shadow-lg h-72">
            <iframe
              title="office-map"
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_LINK"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
