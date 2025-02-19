import { Phone, Calendar, Heart, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "24/7 Availability",
    description: "Never miss a call. Our AI receptionist is always ready to assist your clients.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Seamless appointment booking and management integrated with your calendar.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Advanced AI that understands context and speaks naturally with your clients.",
  },
  {
    icon: Heart,
    title: "Industry Expertise",
    description: "Specialized in beauty, skin care, and wellness terminology and protocols.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-glowline-navy mb-4">
            Why Choose Glowline?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI receptionist is designed specifically for beauty and wellness businesses,
            providing a seamless experience for both you and your clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:border-glowline-rose transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-glowline-rose/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-glowline-navy" />
              </div>
              <h3 className="text-xl font-semibold text-glowline-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;