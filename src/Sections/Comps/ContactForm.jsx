import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
    style={{
      backdropFilter: 'blur(20px)'
    }}
     className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700">
      <div className="w-full max-w-md p-8 rounded-lg bg-white/10 backdrop-blur-md shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">CONTACT US</h1>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <div>
            <button
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;