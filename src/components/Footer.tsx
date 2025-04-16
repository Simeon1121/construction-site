import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">BUILDMASTER</h3>
            <p className="mb-4">
              Building tomorrow's landmarks with today's innovation. Quality construction services for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaFacebook size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaTwitter size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaInstagram size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-yellow-500 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-yellow-500 transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Our Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-500 transition-colors">Residential Construction</li>
              <li className="hover:text-yellow-500 transition-colors">Commercial Buildings</li>
              <li className="hover:text-yellow-500 transition-colors">Industrial Facilities</li>
              <li className="hover:text-yellow-500 transition-colors">Renovations</li>
              <li className="hover:text-yellow-500 transition-colors">Construction Management</li>
              <li className="hover:text-yellow-500 transition-colors">Design & Architecture</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-500" />
                <span>123 Construction Ave, Buildtown, BT 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-yellow-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-yellow-500" />
                <span>info@buildmaster.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BuildMaster Construction. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm">
            <Link to="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-yellow-500">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
