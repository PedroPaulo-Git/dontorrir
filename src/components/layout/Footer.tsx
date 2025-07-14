"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* <motion.div 
                className="w-8 h-8 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: 'var(--color-secondary)' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-bold text-lg">D</span>
              </motion.div>
              <span className="ml-2 text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Dontorrir</span> */}
              <Link href="/" className="flex items-center">
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/Logo.png" alt="" className="min-w-16" />
                </motion.div>
                <span
                  className="ml-2 text-2xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Dontorrir
                </span>
              </Link>
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Presente em seu sorriso! Sua clínica em Belo Jardim especializada
              em odontologia. Cuidamos do seu sorriso com carinho e dedicação.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/dontorrir/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://wa.me/5581998921500"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="white"
                  stroke="white"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.318 2 2 12.318 2 25 C 2 28.96 3.0228906 32.853062 4.9628906 36.289062 L 2.0371094 46.730469 C 1.9411094 47.073469 2.03325 47.440312 2.28125 47.695312 C 2.47225 47.892313 2.733 48 3 48 C 3.08 48 3.1612344 47.989703 3.2402344 47.970703 L 14.136719 45.271484 C 17.463719 47.057484 21.21 48 25 48 C 37.682 48 48 37.682 48 25 C 48 12.318 37.682 2 25 2 z M 16.642578 14 C 17.036578 14 17.428437 14.005484 17.773438 14.021484 C 18.136437 14.039484 18.624516 13.883484 19.103516 15.021484 C 19.595516 16.189484 20.775875 19.058563 20.921875 19.351562 C 21.069875 19.643563 21.168656 19.984047 20.972656 20.373047 C 20.776656 20.762047 20.678813 21.006656 20.382812 21.347656 C 20.086813 21.688656 19.762094 22.107141 19.496094 22.369141 C 19.200094 22.660141 18.892328 22.974594 19.236328 23.558594 C 19.580328 24.142594 20.765484 26.051656 22.521484 27.597656 C 24.776484 29.583656 26.679531 30.200188 27.269531 30.492188 C 27.859531 30.784188 28.204828 30.734703 28.548828 30.345703 C 28.892828 29.955703 30.024969 28.643547 30.417969 28.060547 C 30.810969 27.477547 31.204094 27.572578 31.746094 27.767578 C 32.288094 27.961578 35.19125 29.372062 35.78125 29.664062 C 36.37125 29.956063 36.766062 30.102703 36.914062 30.345703 C 37.062062 30.587703 37.062312 31.754234 36.570312 33.115234 C 36.078313 34.477234 33.717984 35.721672 32.583984 35.888672 C 31.565984 36.037672 30.277281 36.10025 28.863281 35.65625 C 28.006281 35.38625 26.907047 35.028734 25.498047 34.427734 C 19.575047 31.901734 15.706156 26.012047 15.410156 25.623047 C 15.115156 25.234047 13 22.46275 13 19.59375 C 13 16.72475 14.524406 15.314469 15.066406 14.730469 C 15.608406 14.146469 16.248578 14 16.642578 14 z"></path>
                </svg>
              </motion.a>
                <motion.svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-secondary)" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Clínica Geral
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ortodontia
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Estética Dental
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Implantes
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Endodontia
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://wa.me/5581998921500"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Agendar pelo WhatsApp
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dicas de Saúde Bucal
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">
              Informações de Contato
            </h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-secondary)" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
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
                </motion.svg>
                <p className="text-gray-400">
                  Rua Monteiro Lobato, 250
                  <br />
                  Belo Jardim - PE
                  <br />
                  CEP: 55150-000
                </p>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-secondary)" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </motion.svg>
                <p className="text-gray-400">(81) 99892-1500</p>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-secondary)" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
                <p className="text-gray-400">contato@dontorrir.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Dontorrir Odontologia Integrada. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Política de Privacidade
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Termos de Uso
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Política de Cookies
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
