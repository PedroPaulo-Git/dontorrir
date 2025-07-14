"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Stethoscope,
  Braces,
  Sparkles,
  Anchor,
  Zap,
  Shield,
} from "lucide-react";

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
    description:
      "Limpeza, restaurações e cuidados preventivos para toda a família.",
    icon: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "var(--color-primary)",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    title: "Ortodontia",
    description:
      "Correção de alinhamento com aparelhos modernos e personalizados.",
    icon: <Braces className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "var(--color-secondary)",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Estética Dental",
    description:
      "Clareamento, facetas e procedimentos para um sorriso perfeito.",
    icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "var(--color-primary)",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Implantes",
    description: "Reposição de dentes com implantes de alta qualidade.",
    icon: <Anchor className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "var(--color-secondary)",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 5,
    title: "Endodontia",
    description: "Tratamento de canal com técnicas modernas e precisão.",
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "var(--color-primary)",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    title: "Prevenção",
    description: "Higiene bucal, flúor e tratamentos preventivos.",
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "var(--color-secondary)",
    gradient: "from-green-500 to-emerald-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const scrollVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços Especializados
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços odontológicos para cuidar
            do seu sorriso. Desde tratamentos básicos até procedimentos
            especializados, sempre com muito carinho e dedicação.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 items-stretch"
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
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 px-2 sm:px-4 py-2 sm:py-8 h-full flex flex-col">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative p-2 sm:p-8">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center relative overflow-hidden`}
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
                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                    style={{
                      background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
                      width: hoveredId === service.id ? "100%" : "0%",
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
          <div
            className="relative overflow-hidden rounded-3xl p-12 text-white flex flex-col items-center"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full -translate-x-16 -translate-y-16"
                // animate={{ rotate: 360 }}
                // transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 border-2 border-white rounded-full translate-x-12 translate-y-12"
                // animate={{ rotate: -360 }}
                // transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-16 h-16 border border-white rounded-full -translate-x-8 -translate-y-8"
                // animate={{ rotate: 360 }}
                // transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">
                Pronto para cuidar do seu sorriso?
              </h3>
              <p className="text-gray-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Agende sua consulta hoje e dê o primeiro passo para um sorriso
                saudável e bonito!
              </p>
              <motion.a
                href="https://wa.me/5581998921500"
                target="_blank"
                className="inline-flex items-center px-8 py-4 mx-auto text-sm whitespace-nowrap bg-white rounded-xl font-semibold sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ color: "var(--color-primary)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
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
