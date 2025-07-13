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
    title: "General Dentistry",
    description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
    icon: "🦷",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with whitening, veneers, and cosmetic procedures.",
    icon: "✨",
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    title: "Orthodontics",
    description: "Straighten your teeth with braces, aligners, and orthodontic treatments.",
    icon: "🦿",
    color: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    title: "Emergency Care",
    description: "24/7 emergency dental care for urgent dental problems and pain relief.",
    icon: "🚨",
    color: "bg-red-100 text-red-600"
  },
  {
    id: 5,
    title: "Implants",
    description: "Permanent tooth replacement with advanced dental implant technology.",
    icon: "🦷",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children in a friendly, comfortable environment.",
    icon: "👶",
    color: "bg-pink-100 text-pink-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs. 
            From routine checkups to advanced cosmetic procedures, we're here to help you achieve a healthy, beautiful smile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step towards a healthier, more confident smile.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 