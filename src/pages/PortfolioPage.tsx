import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { staggerContainer, staggerItem } from '@/lib/motion';
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio-2.jpg';
import visionBg from '../assets/vision-bg.jpg';
import servicesBg from '../assets/services-bg.jpg';
import contactBg from '../assets/contact-bg.jpg';
import fasion_img from  '../assets/fasion_img.jpg'


const categories = [
  'All',
  'Residential',
  'Commercial',
  'F&B',
  'Retail',
  'Healthcare',
];

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Palm Jumeirah',
    category: 'Residential',
    image: portfolio1,
    description: 'A contemporary 6-bedroom villa with panoramic views.',
    area: '12,000 sq.ft',
    location: 'Palm Jumeirah, Dubai',
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: portfolio2,
    description: 'Modern office space fostering creativity and collaboration.',
    area: '25,000 sq.ft',
    location: 'DIFC, Dubai',
  },
  {
    id: 3,
    title: 'Fine Dining Restaurant',
    category: 'F&B',
    image: visionBg,
    description: 'An immersive dining experience through thoughtful design.',
    area: '4,500 sq.ft',
    location: 'Downtown Dubai',
  },
  {
    id: 4,
    title: 'Boutique Fashion Store',
    category: 'Retail',
    image: fasion_img,
    description: 'Elegant retail space for luxury fashion brand.',
    area: '2,800 sq.ft',
    location: 'Dubai Mall',
  },
  {
    id: 5,
    title: 'Wellness Spa & Clinic',
    category: 'Healthcare',
    image: servicesBg,
    description: 'Serene healthcare environment promoting wellbeing.',
    area: '8,000 sq.ft',
    location: 'Jumeirah, Dubai',
  },
  {
    id: 6,
    title: 'Penthouse Apartment',
    category: 'Residential',
    image: contactBg,
    description: 'Luxurious penthouse with bespoke interiors.',
    area: '6,500 sq.ft',
    location: 'Business Bay, Dubai',
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={portfolio1}
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="label-elegant block mb-4"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-hero"
          >
            <span className="text-primary">Portfolio</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="body-elegant">
              At OneCoreX, we specialize in delivering comprehensive interior
              turnkey solutions across some of the most dynamic, design-driven, and
              experience-focused sectors. Our portfolio showcases our expertise in
              High-end Luxury Villas, Retail Spaces, F&B, Commercial Offices,
              Entertainment Spaces, and Healthcare & Wellness facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-charcoal sticky top-20 z-30 border-y border-border">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                layout
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="label-elegant block mb-2 text-white/80">
                    {project.category}
                  </span>
                  <h3 className="heading-card mb-2 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <div className="flex gap-4 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
