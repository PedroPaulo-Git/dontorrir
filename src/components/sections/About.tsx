'use client';

import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={aboutVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                Sobre Nossa Clínica
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed mb-6"
                variants={itemVariants}
              >
                Há mais de 10 anos, cuidamos dos sorrisos de Belo Jardim com muito carinho e dedicação. 
                Nossa clínica foi criada pensando no conforto e bem-estar dos pacientes, com um ambiente acolhedor 
                e tecnologia avançada para garantir o melhor tratamento.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Nossa equipe é especializada em odontologia e acredita que cada paciente merece um atendimento 
                personalizado e carinhoso. Construímos relacionamentos de confiança com as famílias, baseados 
                na transparência e nos resultados excepcionais.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-start space-x-3"
                variants={featureVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" 
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tecnologia Avançada</h3>
                  <p className="text-gray-600 text-sm">Equipamentos modernos e técnicas inovadoras</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                variants={featureVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" 
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900">Equipe Especializada</h3>
                  <p className="text-gray-600 text-sm">10+ anos de experiência em odontologia</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                variants={featureVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" 
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ambiente Acolhedor</h3>
                  <p className="text-gray-600 text-sm">Clínica preparada para receber todos os pacientes</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3"
                variants={featureVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" 
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900">Atendimento de Emergência</h3>
                  <p className="text-gray-600 text-sm">Sempre prontos para ajudar quando precisar</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image/Stats */}
          <motion.div className="space-y-8" variants={imageVariants}>
            {/* Doctor Image Placeholder */}
            <motion.div 
              className="rounded-2xl p-8 text-white text-center relative overflow-hidden" 
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Elements */}
              <motion.div 
                className="absolute top-0 left-0 w-32 h-32 border-2 border-white/20 rounded-full -translate-x-16 -translate-y-16"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-24 h-24 border-2 border-white/20 rounded-full translate-x-12 translate-y-12"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/assets/HeroMainImage.jpg" alt="" className='object-contain mt-10 ' />
                  {/* <svg className="w-16 h-16" fill="black" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg> */}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Dra. Ana Silva</h3>
                <p className="text-gray-100">Odontóloga & Proprietária</p>
                <p className="text-gray-100 mt-2">10+ Anos de Experiência</p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={imageVariants}
            >
              <motion.div 
                className="bg-white rounded-xl p-6 text-center shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2" 
                  style={{ color: 'var(--color-primary)' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  2000+
                </motion.div>
                <div className="text-gray-600">Pacientes Atendidos</div>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl p-6 text-center shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2" 
                  style={{ color: 'var(--color-primary)' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  98%
                </motion.div>
                <div className="text-gray-600">Pacientes Satisfeitos</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 