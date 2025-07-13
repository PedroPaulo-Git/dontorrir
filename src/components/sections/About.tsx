export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre Nossa Clínica
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Há mais de 10 anos, cuidamos dos sorrisos de Belo Jardim com muito carinho e dedicação. 
                Nossa clínica foi criada pensando no conforto e bem-estar dos pacientes, com um ambiente acolhedor 
                e tecnologia avançada para garantir o melhor tratamento.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa equipe é especializada em odontologia e acredita que cada paciente merece um atendimento 
                personalizado e carinhoso. Construímos relacionamentos de confiança com as famílias, baseados 
                na transparência e nos resultados excepcionais.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tecnologia Avançada</h3>
                  <p className="text-gray-600 text-sm">Equipamentos modernos e técnicas inovadoras</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Equipe Especializada</h3>
                  <p className="text-gray-600 text-sm">10+ anos de experiência em odontologia</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ambiente Acolhedor</h3>
                  <p className="text-gray-600 text-sm">Clínica preparada para receber todos os pacientes</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Atendimento de Emergência</h3>
                  <p className="text-gray-600 text-sm">Sempre prontos para ajudar quando precisar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Stats */}
          <div className="space-y-8">
            {/* Doctor Image Placeholder */}
            <div className="rounded-2xl p-8 text-white text-center" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}>
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Dra. Ana Silva</h3>
              <p className="text-gray-100">Odontóloga & Proprietária</p>
              <p className="text-gray-100 mt-2">10+ Anos de Experiência</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>2000+</div>
                <div className="text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>98%</div>
                <div className="text-gray-600">Pacientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 