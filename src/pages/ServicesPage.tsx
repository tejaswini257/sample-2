import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { staggerContainer, staggerItem } from '@/lib/motion';
import {
  Palette,
  Lightbulb,
  Settings,
  FileCheck,
  Users,
  Wrench,
} from 'lucide-react';
import servicesBg from '../assets/services-bg.jpg';

const services = [
  {
    icon: Palette,
    title: 'Design & Concept Development',
    description:
      'Where imagination meets functionality. Our design team crafts unique concepts that reflect each client\'s vision and brand identity.',
    features: [
      'Space planning and layout optimization',
      'Material selection and specification',
      '3D visualizations and renderings',
      'Detailed technical drawings',
      'Brand identity integration',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Interior Decoration & Finishing',
    description:
      'The art of the final touch. Our interior finishing and décor services add character and sophistication to every project.',
    features: [
      'Wall finishes and treatments',
      'Lighting design and implementation',
      'Furniture selection and custom pieces',
      'Fabrics and soft furnishings',
      'Art curation and accessories',
    ],
  },
  {
    icon: Settings,
    title: 'MEP & Technical Services',
    description:
      'Engineering comfort, safety, and reliability into every space with modern systems.',
    features: [
      'Mechanical systems (HVAC)',
      'Electrical design and installation',
      'Plumbing and drainage',
      'Fire safety systems',
      'Energy efficiency solutions',
    ],
  },
  {
    icon: FileCheck,
    title: 'Authority Approvals & Documentation',
    description:
      'Navigating approvals with efficiency and expertise for a seamless project lifecycle.',
    features: [
      'Dubai Municipality approvals',
      'Civil Defence certification',
      'DEWA coordination',
      'Landlord NOCs',
      'Permit management',
    ],
  },
  {
    icon: Users,
    title: 'Project Management & Supervision',
    description:
      'End-to-end project oversight ensuring quality, timeline, and budget adherence.',
    features: [
      'Project scheduling and planning',
      'Cost management',
      'Quality control',
      'Vendor coordination',
      'Progress reporting',
    ],
  },
  {
    icon: Wrench,
    title: 'Civil Works',
    description:
      'Comprehensive civil works including structural modifications and base building works.',
    features: [
      'Structural modifications',
      'Flooring installation',
      'Ceiling systems',
      'Partition walls',
      'Joinery and millwork',
    ],
  },
];

const ServicesPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesBg}
            alt="Our Services"
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
            Our Offerings
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-hero"
          >
            <span className="text-primary">Services</span>
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            className="text-center mb-16"
          >
            <motion.span variants={staggerItem} className="label-elegant block mb-4">
              What We Offer
            </motion.span>
            <motion.h2 variants={staggerItem} className="heading-section mb-4">
              Comprehensive Interior{' '}
              <span className="text-primary">Solutions</span>
            </motion.h2>
            <motion.div variants={staggerItem} className="gold-line mx-auto mb-6" />
            <motion.p variants={staggerItem} className="body-elegant max-w-2xl mx-auto">
              From concept to completion, we offer a full spectrum of interior
              design and fit-out services tailored to your unique vision and needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-new-hover p-8"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-card mb-4 text-black">{service.title}</h3>
                <p className="body-elegant text-sm mb-6 text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-elegant block mb-4"
            >
              Our Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="heading-section mb-4"
            >
              <span className="text-white">Project</span> <span className="text-primary">Journey</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="gold-line mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial meeting and brief' },
              { step: '02', title: 'Concept', desc: 'Design development' },
              { step: '03', title: 'Approval', desc: 'Authority permits' },
              { step: '04', title: 'Execution', desc: 'Fit-out works' },
              { step: '05', title: 'Handover', desc: 'Final delivery' },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-display text-primary/30 mb-4">
                  {phase.step}
                </div>
                <h4 className="font-display text-xl mb-2 text-white">{phase.title}</h4>
                <p className="text-sm text-primary">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
