import React from 'react';
import { useState, type FormEvent } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

// ... (the rest of your code remains exactly the same)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'residential',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or a service
    console.log('Form submitted:', formData);

    // Show success message and reset form
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      projectType: 'residential',
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with our team for inquiries, quotes, or to discuss your construction project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're here to answer any questions you have about our construction services. Reach out to us using the contact details below or fill out the form.
              </p>

              <div className="space-y-6">
                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  title="Main Office"
                  details={[
                    "123 Construction Ave, Buildtown, BT 12345",
                    "United States"
                  ]}
                />
                <ContactItem
                  icon={<FaPhone />}
                  title="Phone Number"
                  details={[
                    "(555) 123-4567",
                    "Monday - Friday, 8:00 AM - 6:00 PM"
                  ]}
                />
                <ContactItem
                  icon={<FaEnvelope />}
                  title="Email Address"
                  details={[
                    "info@buildmaster.com",
                    "sales@buildmaster.com"
                  ]}
                />
                <ContactItem
                  icon={<FaClock />}
                  title="Working Hours"
                  details={[
                    "Monday - Friday: 8:00 AM - 6:00 PM",
                    "Saturday: 9:00 AM - 1:00 PM",
                    "Sunday: Closed"
                  ]}
                />
              </div>

              {/* Regional Offices */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Regional Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RegionalOffice
                    city="New York"
                    address="456 East 78th Street, New York, NY 10001"
                    phone="(555) 234-5678"
                  />
                  <RegionalOffice
                    city="Los Angeles"
                    address="789 West Sunset Blvd, Los Angeles, CA 90001"
                    phone="(555) 345-6789"
                  />
                  <RegionalOffice
                    city="Chicago"
                    address="321 North Michigan Ave, Chicago, IL 60601"
                    phone="(555) 456-7890"
                  />
                  <RegionalOffice
                    city="Miami"
                    address="987 Ocean Drive, Miami, FL 33139"
                    phone="(555) 567-8901"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>

              {formSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                  <FaCheckCircle className="mr-2" />
                  <span>Thank you for your message! We'll get back to you shortly.</span>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  >
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="industrial">Industrial Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
            <p className="mt-4 text-xl text-gray-600">
              Visit our main office
            </p>
          </div>

          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            {/* Here you would typically embed a Google Map or other mapping service */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Map Placeholder - Embed Google Maps or your preferred mapping service here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactItem = ({ icon, title, details }: ContactItemProps) => (
  <div className="flex items-start">
    <div className="text-yellow-600 mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="mt-1 text-gray-700">
        {details.map((detail, index) => (
          <p key={`${title}-${index}`}>{detail}</p>
        ))}
      </div>
    </div>
  </div>
);

interface RegionalOfficeProps {
  city: string;
  address: string;
  phone: string;
}

const RegionalOffice = ({ city, address, phone }: RegionalOfficeProps) => (
  <div className="border border-gray-200 rounded-md p-4">
    <h4 className="font-bold text-gray-900">{city}</h4>
    <p className="text-gray-700 text-sm mt-2">{address}</p>
    <p className="text-gray-700 text-sm mt-1">{phone}</p>
  </div>
);

export default Contact;
