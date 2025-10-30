import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Zap, TrendingUp, BarChart3, Users } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navbar */}
      <nav className="glass-effect border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-2.5 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold gradient-text">RankPrompt</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 glass-light px-4 py-2 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
