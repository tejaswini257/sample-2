import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import portfolio1 from '../../assets/portfolio-1.jpg';
import portfolio2 from '../../assets/portfolio-2.jpg';
import visionBg from '../../assets/vision-bg.jpg';

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Interior',
    category: 'Residential',
    image: portfolio1,
    description: 'A contemporary living space blending comfort with elegance.',
  },
  {
    id: 2,
    title: 'Modern Office Space',
    category: 'Commercial',
    image: portfolio2,
    description: 'Innovative workspace design fostering creativity and collaboration.',
  },
  {
    id: 3,
    title: 'Boutique Restaurant',
    category: 'F&B',
    image: visionBg,
    description: 'An immersive dining experience through thoughtful interior design.',
  },
];

export const PortfolioSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16"
        >
          <div>
            <motion.span variants={staggerItem} className="label-elegant block mb-4">
              Our Portfolio
            </motion.span>
            <motion.h2 variants={staggerItem} className="heading-section">
              <span className="text-white">Featured</span> <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.div variants={staggerItem} className="gold-line-lg mt-6" />
          </div>
          <motion.div variants={staggerItem}>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/portfolio" className="group">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  animate={{
                    y: hoveredId === project.id ? 0 : 10,
                    opacity: hoveredId === project.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="label-elegant block mb-2 text-white/80">{project.category}</span>
                  <h3 className="heading-card mb-2 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/30"
                  animate={{
                    scale: hoveredId === project.id ? 1 : 0,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
