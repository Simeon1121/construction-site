import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaChartLine,
  FaPencilRuler,
  FaHardHat,
  FaWrench
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive construction services tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Excellence in Every Project</h2>
            <p className="text-lg text-gray-700 mb-8">
              At BuildMaster Construction, we offer a wide range of construction services designed to meet your
              residential, commercial, and industrial needs. Our experienced team is dedicated to delivering
              quality results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {/* Residential Construction */}
            <ServiceDetail
              icon={<FaHome size={40} />}
              title="Residential Construction"
              description="We build custom homes and residential developments that meet the highest standards of quality and design."
              features={[
                "Custom Home Construction",
                "Housing Developments",
                "Luxury Residences",
                "Apartment Buildings",
                "Townhouse Complexes",
                "Eco-friendly Home Design"
              ]}
              imagePath="/src/assets/images/residential-construction.jpeg"
              reverse={false}
            />

            {/* Commercial Construction */}
            <ServiceDetail
              icon={<FaBuilding size={40} />}
              title="Commercial Construction"
              description="Our commercial construction services deliver functional, attractive spaces for businesses of all types."
              features={[
                "Office Buildings",
                "Retail Spaces",
                "Shopping Centers",
                "Restaurants",
                "Hotels & Hospitality",
                "Medical Facilities"
              ]}
              imagePath="/src/assets/images/commercial-building.jpeg"
              reverse={true}
            />

            {/* Industrial Construction */}
            <ServiceDetail
              icon={<FaIndustry size={40} />}
              title="Industrial Construction"
              description="We specialize in creating industrial facilities that prioritize functionality, safety, and efficiency."
              features={[
                "Manufacturing Plants",
                "Warehouses & Distribution Centers",
                "Industrial Complexes",
                "Processing Facilities",
                "Research & Development Centers",
                "Storage Facilities"
              ]}
              imagePath="/src/assets/images/modern-building.jpeg"
              reverse={false}
            />

            {/* Design & Architecture */}
            <ServiceDetail
              icon={<FaPencilRuler size={40} />}
              title="Design & Architecture"
              description="Our in-house design team creates innovative architectural solutions tailored to your specific needs."
              features={[
                "Architectural Design",
                "Interior Design",
                "3D Modeling & Visualization",
                "Space Planning",
                "Sustainable Design",
                "Building Information Modeling (BIM)"
              ]}
              imagePath="/src/assets/images/modern-design.jpeg"
              reverse={true}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Additional Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of specialized construction services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdditionalServiceCard
              icon={<FaTools size={32} />}
              title="Renovations & Remodeling"
              description="Transform your existing spaces with our professional renovation and remodeling services."
            />
            <AdditionalServiceCard
              icon={<FaChartLine size={32} />}
              title="Construction Management"
              description="Expert project management to ensure your construction project is completed on time and within budget."
            />
            <AdditionalServiceCard
              icon={<FaHardHat size={32} />}
              title="Pre-construction Services"
              description="Comprehensive planning and consultation before construction begins to ensure project success."
            />
            <AdditionalServiceCard
              icon={<FaWrench size={32} />}
              title="Building Maintenance"
              description="Ongoing maintenance services to keep your property in optimal condition for years to come."
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              How we bring your construction project to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Consultation"
              description="We meet with you to understand your vision, needs, and budget for the project."
            />
            <ProcessStep
              number="02"
              title="Design & Planning"
              description="Our team creates detailed designs and comprehensive plans for your approval."
            />
            <ProcessStep
              number="03"
              title="Construction"
              description="We execute the project with precision, quality craftsmanship, and attention to detail."
            />
            <ProcessStep
              number="04"
              title="Completion & Handover"
              description="Final inspections ensure everything meets our high standards before project handover."
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
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imagePath: string;
  reverse: boolean;
}

const ServiceDetail = ({ icon, title, description, features, imagePath, reverse }: ServiceDetailProps) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-lg shadow-lg overflow-hidden`}>
    <div className="lg:w-1/2">
      <img src={imagePath} alt={title} className="h-full w-full object-cover" />
    </div>
    <div className="lg:w-1/2 p-8 lg:p-12">
      <div className="text-yellow-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

interface AdditionalServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdditionalServiceCard = ({ icon, title, description }: AdditionalServiceCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
  >
    <div className="text-yellow-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Services;
