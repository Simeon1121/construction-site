import { useState } from 'react';
import { motion } from 'framer-motion';

// Project category types
type ProjectCategory = 'all' | 'residential' | 'commercial' | 'industrial' | 'renovation';

// Project interface
interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'industrial' | 'renovation';
  image: string;
  location: string;
  year: string;
  description: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'residential',
      image: '/assets/images/residential-construction.jpeg',
      location: 'Miami, FL',
      year: '2023',
      description: 'A high-end residential development featuring 50 custom-designed homes with modern amenities and sustainable features.',
    },
    {
      id: 2,
      title: 'Corporate Office Tower',
      category: 'commercial',
      image: '/assets/images/commercial-building.jpeg',
      location: 'Chicago, IL',
      year: '2022',
      description: 'A 15-story office tower with modern amenities, energy-efficient design, and collaborative workspaces for a Fortune 500 company.',
    },
    {
      id: 3,
      title: 'Distribution Center',
      category: 'industrial',
      image: '/assets/images/modern-building.jpeg',
      location: 'Dallas, TX',
      year: '2021',
      description: 'A state-of-the-art distribution facility with automated systems, expansive storage capacity, and logistics infrastructure.',
    },
    {
      id: 4,
      title: 'Historic Building Renovation',
      category: 'renovation',
      image: '/assets/images/modern-design.jpeg',
      location: 'Boston, MA',
      year: '2023',
      description: 'Restoration and modernization of a 100-year-old building, preserving historical elements while adding contemporary functionality.',
    },
    {
      id: 5,
      title: 'Beachfront Condominiums',
      category: 'residential',
      image: '/assets/images/commercial-building.jpeg',
      location: 'San Diego, CA',
      year: '2022',
      description: 'Luxury beachfront condominium complex with ocean views, premium finishes, and resort-style amenities.',
    },
    {
      id: 6,
      title: 'Shopping Mall Expansion',
      category: 'commercial',
      image: '/assets/images/modern-building.jpeg',
      location: 'Atlanta, GA',
      year: '2021',
      description: 'Expansion of an existing shopping mall, adding 50 new retail spaces, dining areas, and entertainment facilities.',
    },
    {
      id: 7,
      title: 'Manufacturing Plant',
      category: 'industrial',
      image: '/assets/images/residential-construction.jpeg',
      location: 'Detroit, MI',
      year: '2023',
      description: 'Custom-designed manufacturing facility with specialized production areas, office spaces, and employee amenities.',
    },
    {
      id: 8,
      title: 'Hotel Refurbishment',
      category: 'renovation',
      image: '/assets/images/modern-design.jpeg',
      location: 'Las Vegas, NV',
      year: '2022',
      description: 'Complete interior and exterior renovation of a 300-room hotel, upgrading all facilities to luxury standards.',
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our portfolio of successful construction projects across various sectors
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            <FilterButton
              category="all"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="All Projects"
            />
            <FilterButton
              category="residential"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="Residential"
            />
            <FilterButton
              category="commercial"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="Commercial"
            />
            <FilterButton
              category="industrial"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="Industrial"
            />
            <FilterButton
              category="renovation"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              label="Renovation"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Our team of experienced professionals is ready to bring your vision to life. Contact us today to discuss your construction needs.
          </p>
          <a
            href="/contact"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-10 rounded-lg transition-colors duration-300 inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

interface FilterButtonProps {
  category: ProjectCategory;
  activeFilter: ProjectCategory;
  setActiveFilter: (category: ProjectCategory) => void;
  label: string;
}

const FilterButton = ({ category, activeFilter, setActiveFilter, label }: FilterButtonProps) => (
  <button
    className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 mb-2 ${
      activeFilter === category
        ? 'bg-yellow-600 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    onClick={() => setActiveFilter(category)}
  >
    {label}
  </button>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg"
  >
    <div className="h-60 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <div className="text-sm text-yellow-600 font-semibold">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</div>
        <div className="text-sm text-gray-500">{project.year}</div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="text-gray-600 text-sm">
        <span className="font-semibold">Location:</span> {project.location}
      </div>
    </div>
  </motion.div>
);

export default Projects;
