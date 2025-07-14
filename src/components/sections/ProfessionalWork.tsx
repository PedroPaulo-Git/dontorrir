'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkCase {
  id: number;
  title: string;
  description: string;
  image: string;
  treatment: string;
  duration: string;
  patientAge: string;
  satisfaction: number;
  testimonial: string;
  patientName: string;
  beforeImage: string;
  afterImage: string;
  treatmentDetails: string[];
}

const workCases: WorkCase[] = [
  {
    id: 1,
    title: "Clareamento Dental",
    description: "Transformação do sorriso com clareamento profissional",
    image: "/assets/Image1.jpg",
    treatment: "Clareamento",
    duration: "2 sessões",
    patientAge: "28 anos",
    satisfaction: 98,
    testimonial: "Fiquei impressionada com o resultado! Meu sorriso ficou muito mais bonito e confiante.",
    patientName: "Maria Silva",
    beforeImage: "/assets/Image1.jpg",
    afterImage: "/assets/Image1.jpg",
    treatmentDetails: [
      "Avaliação inicial",
      "Limpeza profissional",
      "Clareamento com gel",
      "Aplicação de flúor",
      "Orientações de manutenção"
    ]
  },
  {
    id: 2,
    title: "Ortodontia Estética",
    description: "Correção do alinhamento dental com aparelho transparente",
    image: "/assets/Image2_c.jpg",
    treatment: "Ortodontia",
    duration: "18 meses",
    patientAge: "24 anos",
    satisfaction: 95,
    testimonial: "O aparelho transparente foi perfeito! Ninguém notava que eu estava usando.",
    patientName: "João Santos",
    beforeImage: "/assets/Image2_c.jpg",
    afterImage: "/assets/Image2_c.jpg",
    treatmentDetails: [
      "Diagnóstico ortodôntico",
      "Planejamento personalizado",
      "Aparelho transparente",
      "Acompanhamento mensal",
      "Retenção final"
    ]
  },
  {
    id: 3,
    title: "Restauração Estética",
    description: "Restauração de dentes com aparência natural",
    image: "/assets/Image3_c.jpg",
    treatment: "Restauração",
    duration: "1 sessão",
    patientAge: "35 anos",
    satisfaction: 97,
    testimonial: "A restauração ficou tão natural que nem parece que foi feita!",
    patientName: "Ana Costa",
    beforeImage: "/assets/Image3_c.jpg",
    afterImage: "/assets/Image3_c.jpg",
    treatmentDetails: [
      "Avaliação estética",
      "Escolha da cor",
      "Restauração com resina",
      "Polimento final",
      "Ajuste de oclusão"
    ]
  },
  {
    id: 4,
    title: "Tratamento Completo",
    description: "Reabilitação do sorriso com múltiplos procedimentos",
    image: "/assets/Image4_c.jpg",
    treatment: "Multidisciplinar",
    duration: "6 meses",
    patientAge: "42 anos",
    satisfaction: 99,
    testimonial: "Transformou completamente minha vida! Agora sorrio sem medo.",
    patientName: "Carlos Oliveira",
    beforeImage: "/assets/Image4_c.jpg",
    afterImage: "/assets/Image4_c.jpg",
    treatmentDetails: [
      "Planejamento multidisciplinar",
      "Periodontia",
      "Ortodontia",
      "Implantes",
      "Estética final"
    ]
  },
  {
    id: 5,
    title: "Implantes Dentários",
    description: "Substituição de dentes perdidos com implantes",
    image: "/assets/Image5_c.jpg",
    treatment: "Implantes",
    duration: "4 meses",
    patientAge: "50 anos",
    satisfaction: 96,
    testimonial: "Voltei a comer normalmente e meu sorriso ficou perfeito!",
    patientName: "Rosa Ferreira",
    beforeImage: "/assets/Image5_c.jpg",
    afterImage: "/assets/Image5_c.jpg",
    treatmentDetails: [
      "Avaliação radiográfica",
      "Cirurgia de implantes",
      "Período de osseointegração",
      "Confecção das próteses",
      "Ajustes finais"
    ]
  },
  {
    id: 6,
    title: "Estética Dental",
    description: "Transformação do sorriso com procedimentos estéticos",
    image: "/assets/Image6_c.jpg",
    treatment: "Estética",
    duration: "3 meses",
    patientAge: "29 anos",
    satisfaction: 100,
    testimonial: "O resultado superou todas as minhas expectativas!",
    patientName: "Lucas Mendes",
    beforeImage: "/assets/Image6_c.jpg",
    afterImage: "/assets/Image6_c.jpg",
    treatmentDetails: [
      "Análise facial",
      "Clareamento dental",
      "Facetas de porcelana",
      "Harmonização facial",
      "Acompanhamento pós-tratamento"
    ]
  }
];

const sectionVariants = {
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const carouselVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export default function ProfessionalWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'details' | 'testimonial'>('overview');

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === workCases.length - 1 ? 0 : prevIndex + 1
    );
    setShowDetails(false);
    setSelectedTab('overview');
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workCases.length - 1 : prevIndex - 1
    );
    setShowDetails(false);
    setSelectedTab('overview');
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setShowDetails(false);
    setSelectedTab('overview');
  };

  const currentCase = workCases[currentIndex];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nossos Casos de Sucesso
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Conheça histórias reais de transformação e confiança restaurada. 
            Cada sorriso conta uma jornada única de cuidado, tecnologia e dedicação.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
          variants={statsVariants}
        >
          <motion.div 
            className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
            variants={statItemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: 'var(--color-primary)' }}>
              500+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Casos Realizados</div>
          </motion.div>
          <motion.div 
            className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
            variants={statItemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: 'var(--color-secondary)' }}>
              98%
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Satisfação</div>
          </motion.div>
          <motion.div 
            className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
            variants={statItemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: 'var(--color-primary)' }}>
              15+
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Anos de Experiência</div>
          </motion.div>
          <motion.div 
            className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
            variants={statItemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" style={{ color: 'var(--color-secondary)' }}>
              100%
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Garantia</div>
          </motion.div>
        </motion.div>

        {/* Enhanced Carousel Container */}
        <motion.div 
          className="relative max-w-6xl mx-auto overflow-hidden"
          variants={carouselVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="aspect-[4/5] relative">
                      <img
                        src={currentCase.image}
                        alt={currentCase.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Subtle corner indicator */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                          <div className="text-xs font-semibold text-gray-800">
                            ANTES → DEPOIS
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Mobile Responsive */}
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Dots Indicator - Mobile Responsive */}
              <motion.div 
                className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3"
                variants={itemVariants}
              >
                {workCases.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-green-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </motion.div>

              {/* Case Counter */}
              <motion.div 
                className="text-center mt-4"
                variants={itemVariants}
              >
                <span className="text-sm text-gray-600">
                  {currentIndex + 1} de {workCases.length} casos
                </span>
              </motion.div>

              {/* Case Information - Desktop only above details panel */}
              <motion.div 
                className="block sm:hidden mt-6 sm:mt-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
                variants={itemVariants}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 break-words">
                      {currentCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 break-words">
                      {currentCase.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <motion.span 
                        className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentCase.treatment}
                      </motion.span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        Duração: {currentCase.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Before/After indicator */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">ANTES → DEPOIS</div>
                        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-gray-400 to-green-500 rounded-full mx-auto"></div>
                        <div className="text-xs text-gray-500 mt-2">
                          {currentCase.duration}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Details Panel */}
            <div className="space-y-6">
              {/* Case Information - Desktop only above details panel */}
              <motion.div 
                className="hidden lg:block bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
                variants={itemVariants}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 break-words">
                      {currentCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 break-words">
                      {currentCase.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <motion.span 
                        className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentCase.treatment}
                      </motion.span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        Duração: {currentCase.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Before/After indicator */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">ANTES → DEPOIS</div>
                        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-gray-400 to-green-500 rounded-full mx-auto"></div>
                        <div className="text-xs text-gray-500 mt-2">
                          {currentCase.duration}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 sm:space-x-2 bg-gray-100 rounded-lg sm:rounded-xl p-1 sm:p-2">
                <motion.button
                  onClick={() => setSelectedTab('overview')}
                  className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    selectedTab === 'overview' 
                      ? 'bg-white shadow-md text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Visão Geral
                </motion.button>
                <motion.button
                  onClick={() => setSelectedTab('details')}
                  className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    selectedTab === 'details' 
                      ? 'bg-white shadow-md text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Detalhes
                </motion.button>
                <motion.button
                  onClick={() => setSelectedTab('testimonial')}
                  className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    selectedTab === 'testimonial' 
                      ? 'bg-white shadow-md text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Depoimento
                </motion.button>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {selectedTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
                      {currentCase.title}
                    </h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                        <span className="text-sm sm:text-base text-gray-600">Paciente:</span>
                        <span className="text-sm sm:text-base font-semibold">{currentCase.patientName}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                        <span className="text-sm sm:text-base text-gray-600">Idade:</span>
                        <span className="text-sm sm:text-base font-semibold">{currentCase.patientAge}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                        <span className="text-sm sm:text-base text-gray-600">Duração:</span>
                        <span className="text-sm sm:text-base font-semibold">{currentCase.duration}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                        <span className="text-sm sm:text-base text-gray-600">Satisfação:</span>
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                  i < Math.floor(currentCase.satisfaction / 20)
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm sm:text-base font-semibold">{currentCase.satisfaction}%</span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => setSelectedTab('details')}
                      className="mt-4 sm:mt-6 w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-colors"
                      style={{ 
                        backgroundColor: 'var(--color-secondary)',
                        color: 'white'
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      Ver Detalhes do Tratamento
                    </motion.button>
                  </motion.div>
                )}

                {selectedTab === 'details' && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
                      Detalhes do Tratamento
                    </h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">
                        Etapas do Procedimento:
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {currentCase.treatmentDetails.map((detail, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'var(--color-primary)' }}>
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm sm:text-base text-gray-700">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="black" viewBox="0 0 24 24" style={{ color: 'var(--color-primary)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm sm:text-base font-semibold text-gray-800">Importante</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Cada tratamento é personalizado de acordo com as necessidades específicas de cada paciente. 
                        Os resultados podem variar dependendo do caso individual.
                      </p>
                    </div>
                  </motion.div>
                )}

                {selectedTab === 'testimonial' && (
                  <motion.div
                    key="testimonial"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <blockquote className="text-base sm:text-lg text-gray-700 italic mb-4 sm:mb-6 break-words">
                        "{currentCase.testimonial}"
                      </blockquote>
                      
                      <div className="text-sm sm:text-base font-semibold text-gray-900">
                        {currentCase.patientName}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Paciente - {currentCase.treatment}
                      </div>
                      
                      <div className="flex justify-center mt-3 sm:mt-4 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center mt-16 sm:mt-20"
          variants={itemVariants}
        >
          <motion.div 
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden" 
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Elements */}
            <motion.div 
              className="absolute top-0 left-0 w-40 h-40 border-2 border-white/20 rounded-full -translate-x-20 -translate-y-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-32 h-32 border-2 border-white/20 rounded-full translate-x-16 translate-y-16"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 w-24 h-24 border border-white/20 rounded-full -translate-x-12 -translate-y-12"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 break-words">
                Quer fazer parte dos nossos casos de sucesso?
              </h3>
              <p className="text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4 sm:px-0 break-words">
                Agende sua consulta e descubra como podemos transformar seu sorriso com 
                tratamentos personalizados, tecnologia avançada e muito carinho.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.a 
                  href="https://wa.me/5581998921500"
                  target="_blank"
                  className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors inline-flex items-center justify-center"
                  style={{ color: 'var(--color-primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Agendar pelo WhatsApp
                </motion.a>
                <motion.a 
                  href="#contact"
                  className="border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors inline-flex items-center justify-center hover:bg-white hover:text-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar Mensagem
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 