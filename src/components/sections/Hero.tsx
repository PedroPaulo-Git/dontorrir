import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative bg-gradient-to-br from-gray-50 to-white pt-32 lg:pt-44 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={heroVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Presente em seu
                <span
                  className="block"
                  style={{ color: "var(--color-primary)" }}
                >
                  sorriso!
                </span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Sua clínica em Belo Jardim especializada em odontologia.
                Cuidamos do seu sorriso com carinho, tecnologia avançada e muito
                profissionalismo!
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://wa.me/5581998921500"
                  target="_blank"
                  className="group relative overflow-hidden text-white px-4 py-3 lg:px-8 lg:py-4 rounded-lg text-sm lg:text-lg 
                  font-semibold transition-colors text-center block"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-secondary-dark)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-secondary)")
                  }
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Agendar pelo WhatsApp
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#services"
                  className="group relative overflow-hidden border-2 rounded-lg px-4 py-2.5 lg:px-8 lg:py-3.5 text-sm lg:text-lg font-semibold transition-colors text-center block"
                  style={{
                    borderColor: "var(--color-secondary)",
                    color: "var(--color-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-secondary)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--color-secondary)";
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Nossos Serviços
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              variants={statsVariants}
            >
              <motion.div className="text-center" variants={statItemVariants}>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  2000+
                </div>
                <div className="text-gray-600">Pacientes Atendidos</div>
              </motion.div>
              <motion.div className="text-center" variants={statItemVariants}>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  10+
                </div>
                <div className="text-gray-600">Anos de Experiência</div>
              </motion.div>
              <motion.div className="text-center" variants={statItemVariants}>
                <div
                  className="text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  100%
                </div>
                <div className="text-gray-600">Satisfação</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Main Image Container */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/HeroMainImage2.png"
                alt="Paciente sorrindo com dentes saudáveis"
                className="w-full mx-auto rounded-2xl "
              />

              {/* Decorative Background Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: "var(--color-primary)" }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15"
                style={{ backgroundColor: "var(--color-secondary)" }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating Badge - Trust Indicator */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border-2"
              style={{ borderColor: "var(--color-primary)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                <span className="text-sm font-semibold text-gray-700">
                  Especializada
                </span>
              </div>
            </motion.div>

            {/* Floating Badge - Location */}
            <motion.div
              className="absolute bottom-18 -left-4 bg-white rounded-full p-3 shadow-lg border-2"
              style={{ borderColor: "var(--color-secondary)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-secondary)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Belo Jardim
                </span>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-8 flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <svg
                    className="w-6 h-6 "
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Ambiente Seguro</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                  style={{ backgroundColor: "var(--color-secondary-light)" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Muito Carinho</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="text-xs text-gray-600">Tecnologia</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
