import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 p-2.5 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold gradient-text">
              RankPrompt
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#features" className="px-4 py-2 text-gray-300 hover:text-primary-400 transition-colors rounded-lg hover:bg-white/5">
              Features
            </a>
            <a href="#how-it-works" className="px-4 py-2 text-gray-300 hover:text-primary-400 transition-colors rounded-lg hover:bg-white/5">
              How It Works
            </a>
            <a href="#pricing" className="px-4 py-2 text-gray-300 hover:text-primary-400 transition-colors rounded-lg hover:bg-white/5">
              Pricing
            </a>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="ml-4 px-4 py-2 text-gray-300 hover:text-primary-400 transition-colors rounded-lg hover:bg-white/5"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-300 hover:text-primary-400 transition-colors rounded-lg hover:bg-white/5 ml-4"
                >
                  Sign In
                </Link>
                <Link to="/register" className="ml-2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur group-hover:blur-lg transition-all"></div>
                  <div className="relative bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300">
                    Get Started Free
                  </div>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary-400 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-white/5 animate-slide-down">
            <a href="#features" className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-white/5 rounded-lg transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-white/5 rounded-lg transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-white/5 rounded-lg transition-colors">
              Pricing
            </a>
            {isAuthenticated ? (
              <Link to="/dashboard" className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-white/5 rounded-lg transition-colors">
                Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-3 text-gray-300 hover:text-primary-400 hover:bg-white/5 rounded-lg transition-colors">
                  Sign In
                </Link>
                <Link to="/register" className="block w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-2 text-center">
                  Get Started Free
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
