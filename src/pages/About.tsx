import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaHandshake, FaHardHat, FaLeaf } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About BuildMaster
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We've been building landmarks and creating spaces that inspire for
            over 25 years.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1998, BuildMaster Construction began as a small
              residential construction company...
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Over the years, we've grown into a full-service construction firm
              with expertise in residential, commercial...
            </p>
            <p className="text-lg text-gray-700">
              Today, with over 200 employees and hundreds of successful
              projects, we continue to uphold the values...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="aspect-w-4 aspect-h-3">
    <img
      src="/src/assets/images/site-managers.jpeg"
      alt="Construction workers at site"
      className="rounded-lg shadow-lg object-cover w-full h-full"
    />
  </div>
  <div className="aspect-w-4 aspect-h-3">
    <img
      src="/src/assets/images/team-planning.jpeg"
      alt="Team planning meeting"
      className="rounded-lg shadow-lg object-cover w-full h-full"
    />
  </div>
</div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At BuildMaster, our mission is to create exceptional spaces that
              enhance lives and communities...
            </p>
            <p className="text-lg text-gray-700">
              We believe in building not just structures, but lasting
              relationships with our clients...
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Values
            </h2>
            <div className="space-y-6">
              <ValueItem
                icon={<FaTrophy className="text-yellow-500" size={24} />}
                title="Excellence"
                description="We strive for excellence in every aspect of our work..."
              />
              <ValueItem
                icon={<FaHandshake className="text-yellow-500" size={24} />}
                title="Integrity"
                description="We operate with honesty, transparency, and ethical standards..."
              />
              <ValueItem
                icon={<FaHardHat className="text-yellow-500" size={24} />}
                title="Safety"
                description="We prioritize the safety of our team members, clients, and the public..."
              />
              <ValueItem
                icon={<FaLeaf className="text-yellow-500" size={24} />}
                title="Sustainability"
                description="We are committed to environmentally responsible construction practices..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Leadership Team
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who lead BuildMaster Construction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember name="John Builder" position="Founder & CEO" bio="..." />
          <TeamMember
            name="Sarah Johnson"
            position="Chief Operations Officer"
            bio="..."
          />
          <TeamMember
            name="Michael Chen"
            position="Chief Architect"
            bio="..."
          />
          <TeamMember
            name="Robert Williams"
            position="Construction Manager"
            bio="..."
          />
          <TeamMember
            name="Emily Rodriguez"
            position="Project Manager"
            bio="..."
          />
          <TeamMember
            name="David Thompson"
            position="Chief Financial Officer"
            bio="..."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years Experience", value: "25+" },
            { label: "Team Members", value: "200+" },
            { label: "Projects Completed", value: "500+" },
            { label: "Client Satisfaction", value: "98%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, bio }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg
        className="w-10 h-10 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-center text-gray-900">{name}</h3>
    <p className="text-yellow-600 font-medium text-center mb-3">{position}</p>
    <p className="text-gray-700 text-center">{bio}</p>
  </div>
);

export default About;
