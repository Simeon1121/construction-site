import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaBuilding, FaHome, FaIndustry, FaTools } from 'react-icons/fa';

// Testimonial category types
type TestimonialCategory = 'all' | 'residential' | 'commercial' | 'industrial' | 'renovation';

// Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  category: 'residential' | 'commercial' | 'industrial' | 'renovation';
  content: string;
  rating: number;
  image?: string;
}

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState<TestimonialCategory>('all');

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Robert Johnson',
      company: 'Johnson Family',
      role: 'Homeowner',
      category: 'residential',
      content: 'BuildMaster constructed our dream home with exceptional attention to detail. The team was professional, responsive, and delivered exactly what we envisioned. We are thrilled with the quality of workmanship and would highly recommend them for any residential construction project.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Williams',
      company: 'Williams Enterprises',
      role: 'CEO',
      category: 'commercial',
      content: 'Our company headquarters was a complex project with specific requirements. BuildMaster managed the entire process seamlessly, from initial design to final construction. Their team expertise in commercial construction was evident throughout the project. The building was completed on time and within budget, exceeding our expectations.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'Chen Manufacturing',
      role: 'Operations Director',
      category: 'industrial',
      content: 'We contracted BuildMaster for our new manufacturing facility, and they delivered exceptional results. The building meets all of our specialized production needs, with attention to safety and efficiency. Their understanding of industrial requirements made the process smooth and successful.',
      rating: 4
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      company: 'Historic Downtown Hotel',
      role: 'Property Manager',
      category: 'renovation',
      content: 'BuildMaster did an amazing job renovating our historic hotel. They preserved the original charm while modernizing the facilities. Their ability to work within the constraints of a historic building was impressive. The result is beautiful and functional.',
      rating: 5
    },
    {
      id: 5,
      name: 'David Thompson',
      company: 'Thompson Family',
      role: 'Homeowner',
      category: 'residential',
      content: 'From start to finish, BuildMaster made building our custom home a pleasure. They were transparent about costs, timelines, and potential challenges. The quality of the craftsmanship is outstanding, and we could not be happier with our new home.',
      rating: 5
    },
    {
      id: 6,
      name: 'Jennifer Lee',
      company: 'Retail Solutions Inc.',
      role: 'Project Manager',
      category: 'commercial',
      content: 'We have worked with several construction companies for our retail locations, but BuildMaster stands above the rest. Their team understands the unique needs of retail spaces, and they delivered a beautiful, functional store that attracts customers and enhances our brand.',
      rating: 4
    },
    {
      id: 7,
      name: 'Carlos Mendez',
      company: 'Mendez Logistics',
      role: 'Founder',
      category: 'industrial',
      content: 'Our distribution center required specific design elements to optimize our logistics operations. BuildMaster worked closely with us to understand our workflow and created a facility that has improved our efficiency by 30%. Their industrial construction expertise is unmatched.',
      rating: 5
    },
    {
      id: 8,
      name: 'Elizabeth Taylor',
      company: 'Taylor Residences',
      role: 'Property Developer',
      category: 'renovation',
      content: 'BuildMaster renovated our apartment complex with minimal disruption to tenants. The team was respectful, professional, and addressed all concerns promptly. The quality of work transformed our property and has increased its value significantly.',
      rating: 4
    }
  ];

  // Filter testimonials based on active category
  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(testimonial => testimonial.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl max-w-3xl mx-auto">
              See what our clients have to say about their experience working with BuildMaster Construction
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            <FilterButton
              category="all"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="All Testimonials"
              icon={null}
            />
            <FilterButton
              category="residential"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="Residential"
              icon={<FaHome className="mr-2" />}
            />
            <FilterButton
              category="commercial"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="Commercial"
              icon={<FaBuilding className="mr-2" />}
            />
            <FilterButton
              category="industrial"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="Industrial"
              icon={<FaIndustry className="mr-2" />}
            />
            <FilterButton
              category="renovation"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="Renovation"
              icon={<FaTools className="mr-2" />}
            />
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Satisfaction */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Client Satisfaction</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence reflects in our client satisfaction rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              title="Client Satisfaction"
              value="98%"
              description="Of our clients report being highly satisfied with our construction services."
            />
            <StatCard
              title="Repeat Business"
              value="85%"
              description="Of our clients return to us for their future construction needs."
            />
            <StatCard
              title="Referral Rate"
              value="90%"
              description="Of our new clients come from referrals by our satisfied customers."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Satisfied Clients?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Contact us today to discuss your construction project and experience the BuildMaster difference.
          </p>
          <a
            href="/contact"
            className="bg-white text-yellow-600 hover:bg-gray-100 font-bold py-3 px-10 rounded-lg transition-colors duration-300 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

interface FilterButtonProps {
  category: TestimonialCategory;
  activeFilter: TestimonialCategory;
  setActiveFilter: (category: TestimonialCategory) => void;
  label: string;
  icon: React.ReactNode;
}

const FilterButton = ({ category, activeFilter, setActiveFilter, label, icon }: FilterButtonProps) => (
  <button
    className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 mb-2 flex items-center ${
      activeFilter === category
        ? 'bg-yellow-600 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    onClick={() => setActiveFilter(category)}
  >
    {icon}
    {label}
  </button>
);

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
  >
    <div className="flex items-start mb-4">
      <div className="text-yellow-500 mr-4">
        <FaQuoteLeft size={24} />
      </div>
      <div>
        <div className="flex mb-2">
          {Array(5).fill(0).map((_, i) => (
            <FaStar key={i} className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} />
          ))}
        </div>
        <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            {testimonial.image ? (
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
            ) : (
              <span className="text-gray-600 font-bold">{testimonial.name.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className="font-bold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
          </div>
        </div>
        <div className="mt-4 text-xs text-yellow-600 font-semibold uppercase">
          {testimonial.category}
        </div>
      </div>
    </div>
  </motion.div>
);

interface StatCardProps {
  title: string;
  value: string;
  description: string;
}

const StatCard = ({ title, value, description }: StatCardProps) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <div className="text-4xl font-bold text-yellow-600 mb-4">{value}</div>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Testimonials;
