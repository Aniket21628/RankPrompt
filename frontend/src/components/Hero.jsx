import { ArrowRight, Sparkles, Star, TrendingUp, Zap, Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-bg min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-right">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-light px-5 py-2.5 rounded-full text-sm font-medium animate-slide-down">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-gray-200">AI-Powered Brand Visibility</span>
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            </div>
            
            {/* Heading */}
            <h1 className="text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="text-white">Dominate</span>
              <br />
              <span className="gradient-text">AI Search</span>
              <br />
              <span className="text-gray-300">Rankings</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Monitor your brand across ChatGPT, Gemini, Claude & more. Get real-time insights 
              and climb the AI rankings with data-driven optimization.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Start Free Analysis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
              <button className="glass-light text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="space-y-2">
                <div className="text-4xl font-black gradient-text">50K+</div>
                <div className="text-sm text-gray-400">Queries Tracked</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black gradient-text">10K+</div>
                <div className="text-sm text-gray-400">Brands Analyzed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black gradient-text">4+</div>
                <div className="text-sm text-gray-400">AI Platforms</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Visual */}
          <div className="relative animate-slide-left">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-3xl blur-3xl"></div>
            
            {/* Main Card */}
            <div className="relative z-10 glass-effect rounded-3xl p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-lg">Live Rankings</h3>
                <div className="px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                  <span className="text-xs text-green-400 font-semibold">● LIVE</span>
                </div>
              </div>

              {/* Ranking Cards */}
              <div className="space-y-3">
                {/* Card 1 */}
                <div className="glass-light p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-primary-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">ChatGPT</div>
                        <div className="text-sm text-gray-400">Ranking #1</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">98%</div>
                      <div className="flex items-center space-x-1 text-xs text-green-400">
                        <TrendingUp className="w-3 h-3" />
                        <span>+12%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="glass-light p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Gemini</div>
                        <div className="text-sm text-gray-400">Ranking #2</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary-400 font-bold text-lg">92%</div>
                      <div className="flex items-center space-x-1 text-xs text-green-400">
                        <TrendingUp className="w-3 h-3" />
                        <span>+8%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="glass-light p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                        <Star className="w-6 h-6 text-white fill-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Claude</div>
                        <div className="text-sm text-gray-400">Ranking #3</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-300 font-bold text-lg">87%</div>
                      <div className="flex items-center space-x-1 text-xs text-green-400">
                        <TrendingUp className="w-3 h-3" />
                        <span>+5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="mt-6 p-5 glass-light rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-gray-300">Visibility Trend</div>
                  <div className="text-xs text-gray-400">Last 7 days</div>
                </div>
                <div className="h-32 flex items-end space-x-2">
                  {[60, 72, 68, 85, 78, 92, 98].map((height, index) => (
                    <div key={index} className="flex-1 group cursor-pointer">
                      <div
                        className="bg-gradient-to-t from-primary-500 to-accent-500 rounded-t-lg transition-all duration-300 group-hover:from-primary-400 group-hover:to-accent-400"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
            
            {/* Floating Accent Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/30 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
