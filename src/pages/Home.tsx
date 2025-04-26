import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHardHat, FaBuilding, FaTools, FaChartLine, FaPencilRuler, FaWrench } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/src/assets/images/modern-building.jpeg')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building Your <span className="text-yellow-500">Dreams</span> Into Reality
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quality construction services for residential, commercial and industrial projects.
            Excellence in every brick we lay.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get A Quote
            </Link>
            <Link
              to="/projects"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View Our Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive construction services tailored to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaHardHat size={40} />}
              title="Residential Construction"
              description="Custom homes and housing developments built with quality materials and exceptional craftsmanship."
            />
            <ServiceCard
              icon={<FaBuilding size={40} />}
              title="Commercial Building"
              description="Office buildings, retail spaces, and other commercial structures designed for functionality and durability."
            />
            <ServiceCard
              icon={<FaTools size={40} />}
              title="Renovations & Remodeling"
              description="Transform your existing space with our expert renovation and remodeling services."
            />
            <ServiceCard
              icon={<FaChartLine size={40} />}
              title="Construction Management"
              description="Professional oversight of your construction project from planning to completion."
            />
            <ServiceCard
              icon={<FaPencilRuler size={40} />}
              title="Design & Architecture"
              description="Creative design solutions that combine aesthetics and functionality for your construction needs."
            />
            <ServiceCard
              icon={<FaWrench size={40} />}
              title="Industrial Construction"
              description="Specialized construction for manufacturing, warehousing, and other industrial facilities."
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful construction projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="/src/assets/residential-construction.jpeg"
              title="Corporate Office Tower"
              category="Commercial"
              description="A 15-story office tower with modern amenities and energy-efficient design."
            />
            <ProjectCard
              image="/src/assets/commercial-building.jpeg"
              title="Luxury Residential Complex"
              category="Residential"
              description="A high-end residential development featuring 50 custom-designed homes."
            />
            <ProjectCard
              image="/src/assets/site-managers.jpeg"
              title="Modern Art Museum"
              category="Public"
              description="An award-winning museum with innovative architecture and exhibition spaces."
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose BuildMaster</h2>
            <p className="mt-4 text-xl max-w-3xl mx-auto opacity-80">
              Excellence in construction for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              number="01"
              title="Quality Craftsmanship"
              description="We take pride in our work and deliver exceptional quality in every project."
            />
            <FeatureCard
              number="02"
              title="Experienced Team"
              description="Our team brings decades of combined experience to your construction project."
            />
            <FeatureCard
              number="03"
              title="Timely Delivery"
              description="We understand the importance of deadlines and work diligently to meet them."
            />
            <FeatureCard
              number="04"
              title="Budget Friendly"
              description="Transparent pricing and efficient project management to stay within budget."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Contact us today for a free consultation and quote on your construction project.
          </p>
          <Link
            to="/contact"
            className="bg-white text-yellow-600 hover:bg-gray-100 font-bold py-3 px-10 rounded-lg transition-colors duration-300 inline-block"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-200">
    <div className="text-yellow-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const ProjectCard = ({ image, title, category, description }: ProjectCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="h-60 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <div className="text-sm text-yellow-600 font-semibold mb-2">{category}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to="/projects"
        className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
      >
        View Details
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

const FeatureCard = ({ number, title, description }: FeatureCardProps) => (
  <div className="p-6 border border-gray-700 rounded-lg transition-colors duration-300 hover:border-yellow-500">
    <div className="text-yellow-500 font-bold text-3xl mb-4">{number}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Home;
