'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Clínica Geral",
    description: "Tratamentos completos incluindo limpeza, restaurações, extrações e cuidados preventivos para toda a família.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M5 7a2 2 0 012-2h1a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "var(--color-primary)",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    title: "Ortodontia",
    description: "Correção de alinhamento dos dentes com aparelhos modernos e tratamentos personalizados para todas as idades.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M5 7a2 2 0 012-2h1a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
      </svg>
    ),
    color: "var(--color-secondary)",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Estética Dental",
    description: "Clareamento, facetas, lentes de contato e procedimentos para um sorriso mais bonito e confiante.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: "var(--color-primary)",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Implantes",
    description: "Reposição de dentes perdidos com implantes de alta qualidade e tecnologia avançada.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
      </svg>
    ),
    color: "var(--color-secondary)",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: 5,
    title: "Endodontia",
    description: "Tratamento de canal com técnicas modernas e equipamentos de última geração.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
      </svg>
    ),
    color: "var(--color-primary)",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: 6,
    title: "Prevenção",
    description: "Orientações de higiene bucal, aplicação de flúor e tratamentos preventivos para manter a saúde dos dentes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
      </svg>
    ),
    color: "var(--color-secondary)",
    gradient: "from-green-500 to-emerald-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const scrollVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.section 
      id="services" 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços odontológicos para cuidar do seu sorriso. 
            Desde tratamentos básicos até procedimentos especializados, sempre com muito carinho e dedicação.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon Container */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}
                    style={{ backgroundColor: `${service.color}15` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <div 
                      className="relative z-10"
                      style={{ color: service.color }}
                    >
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                    style={{ 
                      background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
                      width: hoveredId === service.id ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-400" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-gray-300 to-gray-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-3xl p-12 text-white" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full -translate-x-16 -translate-y-16"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-24 h-24 border-2 border-white rounded-full translate-x-12 translate-y-12"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 w-16 h-16 border border-white rounded-full -translate-x-8 -translate-y-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">
                Pronto para cuidar do seu sorriso?
              </h3>
              <p className="text-gray-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Agende sua consulta hoje e dê o primeiro passo para um sorriso saudável e bonito!
              </p>
              <motion.a 
                href="https://wa.me/5581998921500"
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ color: 'var(--color-primary)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Agendar pelo WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 