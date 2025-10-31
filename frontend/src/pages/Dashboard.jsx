import { TrendingUp, BarChart3, Users, Zap } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen gradient-bg">
      <Sidebar />
      
      {/* Dashboard Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Track your AI search rankings and visibility</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-effect rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-400 text-sm font-semibold">+12%</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-1">98%</h3>
            <p className="text-gray-400 text-sm">Visibility Score</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-400 text-sm font-semibold">+8</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-1">24</h3>
            <p className="text-gray-400 text-sm">Brand Mentions</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-400 text-sm font-semibold">4 platforms</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-1">#2</h3>
            <p className="text-gray-400 text-sm">Average Ranking</p>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="glass-effect rounded-2xl p-12 border border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex p-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Dashboard Coming Soon</h2>
            <p className="text-gray-400 text-lg mb-8">
              We're building an amazing dashboard experience for you. Stay tuned for powerful analytics, 
              real-time tracking, and AI-powered insights.
            </p>
            <div className="inline-flex items-center space-x-2 glass-light px-6 py-3 rounded-xl text-primary-400 font-semibold">
              <span>Your account is active and ready!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
