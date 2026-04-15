import { useState } from 'react';
import { 
  Home, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Bell, 
  Search, 
  Grid3X3,
  ChevronDown
} from 'lucide-react';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'network', icon: Users, label: 'My Network' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'messaging', icon: MessageSquare, label: 'Messaging' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-[52px]">
      <div className="max-w-[1128px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Left: Logo and Search */}
        <div className="flex items-center gap-4">
          {/* LinkedIn Logo */}
          <a href="#" className="flex-shrink-0">
            <svg className="w-[34px] h-[34px]" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="34" height="34" rx="4" fill="#0a66c2"/>
              <path d="M24.5 24.5h-3.1v-4.8c0-1.1 0-2.6-1.6-2.6-1.6 0-1.8 1.2-1.8 2.5v5H15v-10h3v1.4h0c0.4-0.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.6v5.5zM11.5 12.5c-1 0-1.8-0.8-1.8-1.8s0.8-1.8 1.8-1.8 1.8 0.8 1.8 1.8-0.8 1.8-1.8 1.8zm1.5 12h-3v-10h3v10z" fill="white"/>
            </svg>
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-linkedin-lightBlue rounded-md px-3 py-1.5 w-[280px]">
            <Search className="w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none ml-2 text-sm w-full placeholder-gray-500"
            />
          </div>

          {/* Mobile Search Icon */}
          <button className="md:hidden p-2">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Right: Navigation Items */}
        <div className="flex items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center min-w-[80px] px-1 py-1 mx-0.5 rounded-sm transition-colors relative group ${
                activeTab === item.id 
                  ? 'text-black' 
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              <div className="relative">
                <item.icon className={`w-6 h-6 ${item.id === 'notifications' && activeTab === item.id ? 'fill-current' : ''}`} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                {item.id === 'notifications' && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                )}
              </div>
              <span className="text-xs mt-0.5 hidden sm:block">{item.label}</span>
              {activeTab === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
          ))}

          {/* Me Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex flex-col items-center justify-center min-w-[80px] px-1 py-1 mx-0.5 text-gray-500 hover:text-black"
            >
              <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-xs mt-0.5 hidden sm:block">Me</span>
                <ChevronDown className="w-3 h-3 hidden sm:block" />
              </div>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                {/* Profile Section */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">John Doe</p>
                      <p className="text-xs text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-1.5 px-3 text-linkedin-blue font-semibold text-sm border border-linkedin-blue rounded-full hover:bg-linkedin-lightBlue transition-colors">
                    View Profile
                  </button>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings & Privacy</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Help</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Language</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Manage</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Posts & Activity</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Posting Account</a>
                  <div className="border-t border-gray-200 my-1"></div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                </div>
              </div>
            )}
          </div>

          {/* For Business */}
          <div className="hidden lg:flex items-center gap-1 ml-4 pl-4 border-l border-gray-200">
            <button className="flex flex-col items-center justify-center px-1 py-1 text-gray-500 hover:text-black">
              <Grid3X3 className="w-5 h-5" />
              <span className="text-xs mt-0.5">For Business</span>
            </button>
            <a href="#" className="text-xs text-amber-700 hover:underline ml-2 text-center leading-tight max-w-[80px]">
              Try Premium for<br/>$0
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
