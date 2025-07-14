'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const contactVariants = {
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

const formVariants = {
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

const contactItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    appointmentType: 'consulta'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={contactVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para agendar sua consulta? Entre em contato conosco hoje mesmo. 
            Estamos aqui para responder suas dúvidas e ajudar a cuidar do seu sorriso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 mb-8">
                Estamos aqui para ajudar com todas as suas necessidades odontológicas. 
                Entre em contato para agendar uma consulta ou tirar qualquer dúvida.
              </p>
            </div>

            {/* Contact Details */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div 
                className="flex items-start space-x-4"
                variants={contactItemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                  style={{ backgroundColor: 'var(--color-primary-light)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'var(--color-primary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">Rua Monteiro Lobato, 250<br />Belo Jardim - PE<br />CEP: 55150-000</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                variants={contactItemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                  style={{ backgroundColor: 'var(--color-secondary-light)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="text-gray-600">(81) 99892-1500</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                variants={contactItemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                  style={{ backgroundColor: 'var(--color-primary-light)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'var(--color-primary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@dontorrir.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                variants={contactItemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                  style={{ backgroundColor: 'var(--color-secondary-light)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horário de Funcionamento</h4>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8:00 às 18:00<br />
                    Sábado: 8:00 às 12:00<br />
                    Domingo: Fechado
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden"
            variants={formVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Elements */}
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 border-2 border-gray-200 rounded-full -translate-x-16 -translate-y-16"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-24 h-24 border-2 border-gray-200 rounded-full translate-x-12 translate-y-12"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Agende Sua Consulta
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                      style={{ '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties}
                      placeholder="Seu nome completo"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                      style={{ '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties}
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                      style={{ '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties}
                      placeholder="(81) 99892-1500"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço
                    </label>
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                      style={{ '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties}
                    >
                      <option value="consulta">Primeira Consulta</option>
                      <option value="limpeza">Limpeza e Prevenção</option>
                      <option value="ortodontia">Ortodontia</option>
                      <option value="estetica">Estética Dental</option>
                      <option value="implantes">Implantes</option>
                      <option value="endodontia">Endodontia</option>
                      <option value="emergencia">Emergência</option>
                      <option value="outro">Outro</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                    style={{ '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties}
                    placeholder="Conte-nos sobre suas necessidades odontológicas..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 