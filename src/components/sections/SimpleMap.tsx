import { MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function SimpleMap() {
  return (
    <motion.section
      id="mapa"
      className="w-full flex flex-col items-center py-16 bg-gradient-to-br from-white to-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-6xl px-4">
        <motion.div
          className="mb-8 text-left max-w-3xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <MapPin className="w-7 h-7 text-green-700" />
            Venha nos visitar!
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Estamos em uma área central de Belo Jardim. Use o mapa para traçar
            sua rota ou salvar nosso endereço. Se precisar de ajuda, fale
            conosco pelo WhatsApp!
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-stretch"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-700" />
              <span className="block text-base text-gray-500 mb-1">
                Endereço da clínica:
              </span>
            </div>
            <span className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Navigation className="w-8 h-8 text-blue-600" />
              Rua Monteiro Lobato, 250, Belo Jardim - PE
            </span>
            <div className="flex flex-col gap-2 w-full max-w-sm ">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+Monteiro+Lobato,+250,+Belo+Jardim,+PE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-bold shadow hover:bg-green-700 transition w-full justify-center"
              >
                <Navigation className="w-5 h-5" />
                Traçar rota no Google Maps
              </a>
              <a
                href="https://wa.me/5581998921500"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-white font-bold shadow hover:bg-gray-900 transition w-full justify-center"
              >
                <Phone className="w-5 h-5" />
                Fale conosco no WhatsApp
              </a>
            </div>
            <p className="mt-2 text-gray-500 text-sm max-w-sm">
              <span className="font-semibold text-gray-700">Dica:</span> Se
              precisar de ajuda para chegar, clique em "Traçar rota" para abrir
              o trajeto direto no seu celular, ou fale conosco pelo WhatsApp
              para orientações rápidas.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 min-w-0 order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-full h-64 md:h-full aspect-[16/7] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                title="Mapa da Clínica Dontorrir"
                src="https://www.google.com/maps?q=Rua+Monteiro+Lobato,+250,+Belo+Jardim,+PE&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
