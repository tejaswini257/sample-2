import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { staggerContainer, staggerItem } from '@/lib/motion';
import {
  Layers,
  Target,
  Sparkles,
  Users,
  Globe,
  Cpu,
} from 'lucide-react';
import whyUsBg from '../assets/why-us-bg.jpg';

const differentiators = [
  {
    icon: Layers,
    title: 'Integrated Design + Build Approach',
    description:
      'This integration reduces cost overruns, shortens delivery times, and preserves the creative vision from start to finish.',
  },
  {
    icon: Target,
    title: 'Precision Without Excess',
    description:
      'We maintain a lean, intelligent structure - no unnecessary overhead, no inflated mark-ups - allowing us to deliver superior results at exceptional value.',
  },
  {
    icon: Sparkles,
    title: 'Crafted for Performance',
    description:
      'Our designs go beyond aesthetics. We focus on how a space feels, functions, and flows - creating environments that work beautifully.',
  },
  {
    icon: Users,
    title: 'Transparent & Collaborative',
    description:
      'We believe in open communication & accountability. Every project milestone, material choice, and cost breakdown is shared clearly with our clients.',
  },
  {
    icon: Globe,
    title: 'Local Insight, Global Perspective',
    description:
      'Based in Dubai, we blend international design standards with local expertise, ensuring our projects meet both creative ambition and regulatory precision.',
  },
  {
    icon: Cpu,
    title: 'Technology at the Core',
    description:
      'From 3D visualizations to digital project tracking, we employ smart tools that bring clarity, control, and confidence to every stage of the project.',
  },
];

const WhyUsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={whyUsBg}
            alt="Why Choose Us"
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
            Our Advantage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-hero"
          >
            <span className="text-white">Why</span> <span className="text-primary">Choose Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-section mb-6">
              Where Ideas Become{' '}
              <span className="text-primary">Built Realities</span>
            </h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="body-elegant mb-6">
              At OneCoreX, we turn ideas into spaces that speak. Every environment
              we design is built around a clear purpose — to inspire, perform, and
              reflect the essence of the people and brands it represents.
            </p>
            <p className="body-elegant">
              We combine design intuition with engineering, ensuring that every
              detail - from concept sketches to final handover — is executed with
              precision and care. Our work is defined by clarity, craftsmanship,
              and commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span variants={staggerItem} className="label-elegant block mb-4">
              How We're Different
            </motion.span>
            <motion.h2 variants={staggerItem} className="heading-section mb-4">
              Our <span className="text-primary">Differentiators</span>
            </motion.h2>
            <motion.div variants={staggerItem} className="gold-line mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card-hover p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-card mb-4">{item.title}</h3>
                <p className="body-elegant text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-8xl text-primary/20 font-display mb-4">"</div>
            <blockquote className="font-display text-3xl md:text-4xl italic leading-relaxed mb-6">
              At OneCoreX, design and implementation are not two stages —{' '}
              <span className="text-primary">
                they're one seamless experience.
              </span>
            </blockquote>
            <div className="gold-line mx-auto" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUsPage;
