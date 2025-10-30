import { Search, BarChart2, Lightbulb, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Connect & Scan',
    description: 'Enter your brand details and watch as we scan across ChatGPT, Gemini, Claude, and more AI platforms.',
    number: '01',
    color: 'from-primary-500 to-orange-500',
  },
  {
    icon: BarChart2,
    title: 'Analyze Deep',
    description: 'Get comprehensive reports on rankings, visibility scores, sentiment analysis, and competitor insights.',
    number: '02',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Optimize Smart',
    description: 'Receive AI-powered recommendations for schema, content, and citations to boost your rankings.',
    number: '03',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Scale & Grow',
    description: 'Monitor improvements in real-time and dominate AI search results across all major platforms.',
    number: '04',
    color: 'from-green-500 to-emerald-500',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6 animate-slide-up">
          <div className="inline-flex items-center space-x-2 glass-light px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary-400" />
            <span className="text-gray-300">Simple Process</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            How It
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get started in minutes and watch your AI search rankings soar
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-green-500 opacity-20 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative text-center space-y-4">
                  {/* Number Badge with Glow */}
                  <div className="relative inline-flex mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    <div className={`relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${step.color} text-white text-3xl font-black shadow-2xl`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon Card */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                      <div className={`relative glass-effect p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${step.color}`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center space-x-3">
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>
          <p className="text-gray-400 text-sm mt-4">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
