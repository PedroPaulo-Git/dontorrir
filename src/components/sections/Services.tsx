interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Clínica Geral",
    description: "Tratamentos completos incluindo limpeza, restaurações, extrações e cuidados preventivos para toda a família.",
    icon: "🦷",
    color: "var(--color-primary)"
  },
  {
    id: 2,
    title: "Ortodontia",
    description: "Correção de alinhamento dos dentes com aparelhos modernos e tratamentos personalizados para todas as idades.",
    icon: "🦿",
    color: "var(--color-secondary)"
  },
  {
    id: 3,
    title: "Estética Dental",
    description: "Clareamento, facetas, lentes de contato e procedimentos para um sorriso mais bonito e confiante.",
    icon: "✨",
    color: "var(--color-primary)"
  },
  {
    id: 4,
    title: "Implantes",
    description: "Reposição de dentes perdidos com implantes de alta qualidade e tecnologia avançada.",
    icon: "🦷",
    color: "var(--color-secondary)"
  },
  {
    id: 5,
    title: "Endodontia",
    description: "Tratamento de canal com técnicas modernas e equipamentos de última geração.",
    icon: "🔬",
    color: "var(--color-primary)"
  },
  {
    id: 6,
    title: "Prevenção",
    description: "Orientações de higiene bucal, aplicação de flúor e tratamentos preventivos para manter a saúde dos dentes.",
    icon: "📚",
    color: "var(--color-secondary)"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços odontológicos para cuidar do seu sorriso. 
            Desde tratamentos básicos até procedimentos especializados, sempre com muito carinho e dedicação.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-4 font-medium transition-colors" style={{ color: service.color }}>
                Saiba Mais →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}>
            <h3 className="text-2xl font-bold mb-4">
              Pronto para cuidar do seu sorriso?
            </h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Agende sua consulta hoje e dê o primeiro passo para um sorriso saudável e bonito!
            </p>
            <a 
              href="https://wa.me/5581998921500"
              target="_blank"
              className="bg-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              style={{ color: 'var(--color-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 