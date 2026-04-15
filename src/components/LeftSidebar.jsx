import { Bookmark, Hash, Users, Calendar, ChevronRight } from 'lucide-react';

function LeftSidebar() {
  const recentItems = [
    { icon: Hash, text: 'javascript' },
    { icon: Hash, text: 'reactjs' },
    { icon: Users, text: 'Full Stack Developers' },
    { icon: Users, text: 'Tech Careers' },
    { icon: Hash, text: 'webdevelopment' },
    { icon: Hash, text: 'careergrowth' },
  ];

  const groups = [
    'Full Stack Developers',
    'React Developers',
    'Tech Careers',
    'JavaScript Enthusiasts',
  ];

  const events = [
    { name: 'React Summit 2024', date: 'Mar 15' },
    { name: 'Tech Networking Meetup', date: 'Mar 22' },
  ];

  return (
    <div className="w-[225px] flex-shrink-0 h-full overflow-y-auto scrollbar-hide">
      {/* Profile Card */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-2">
        {/* Banner */}
        <div className="h-[56px] bg-gradient-to-r from-blue-400 to-blue-600"></div>
        
        {/* Profile Info */}
        <div className="px-4 pb-4 text-center relative">
          <div className="-mt-8 mb-2">
            <div className="w-[72px] h-[72px] rounded-full border-2 border-white bg-gray-300 overflow-hidden mx-auto shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="font-semibold text-sm text-linkedin-text hover:underline cursor-pointer">John Doe</h2>
          <p className="text-xs text-linkedin-muted mt-1">Software Engineer at Tech Company</p>
        </div>

        {/* Stats */}
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex justify-between items-center py-1 cursor-pointer hover:bg-gray-50 -mx-4 px-4">
            <span className="text-xs text-linkedin-muted">Profile viewers</span>
            <span className="text-xs text-linkedin-blue font-semibold">127</span>
          </div>
          <div className="flex justify-between items-center py-1 cursor-pointer hover:bg-gray-50 -mx-4 px-4">
            <span className="text-xs text-linkedin-muted">Post impressions</span>
            <span className="text-xs text-linkedin-blue font-semibold">2,847</span>
          </div>
        </div>

        {/* Premium */}
        <div className="px-4 py-3 border-t border-gray-200 cursor-pointer hover:bg-gray-50">
          <p className="text-xs text-linkedin-muted">Strengthen your profile with an AI writing assistant</p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600"></div>
            <span className="text-xs font-semibold text-amber-700">Try Premium for $0</span>
          </div>
        </div>

        {/* Saved Items */}
        <div className="px-4 py-3 border-t border-gray-200 cursor-pointer hover:bg-gray-50 flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-gray-600 fill-current" />
          <span className="text-sm font-semibold text-linkedin-text">Saved items</span>
        </div>
      </div>

      {/* Recent */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-2">
        <div className="px-4 py-3">
          <h3 className="text-xs font-semibold text-linkedin-muted mb-2">Recent</h3>
          {recentItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 py-1 cursor-pointer hover:underline group">
              <item.icon className="w-4 h-4 text-gray-500 group-hover:text-black" />
              <span className="text-xs text-linkedin-muted group-hover:text-linkedin-text">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="px-4 py-3 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-linkedin-blue mb-2 cursor-pointer hover:underline">Groups</h3>
          {groups.map((group, index) => (
            <div key={index} className="flex items-center gap-2 py-1 cursor-pointer hover:underline group">
              <Users className="w-4 h-4 text-gray-500 group-hover:text-black" />
              <span className="text-xs text-linkedin-muted group-hover:text-linkedin-text truncate">{group}</span>
            </div>
          ))}
          <div className="flex items-center gap-1 mt-2 cursor-pointer">
            <span className="text-xs text-linkedin-muted">Show more</span>
            <ChevronRight className="w-3 h-3 text-gray-500" />
          </div>
        </div>

        <div className="px-4 py-3 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-linkedin-blue mb-2 cursor-pointer hover:underline">Events</h3>
          {events.map((event, index) => (
            <div key={index} className="flex items-start gap-2 py-1 cursor-pointer hover:underline group">
              <Calendar className="w-4 h-4 text-gray-500 group-hover:text-black flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-linkedin-muted group-hover:text-linkedin-text">{event.name}</p>
                <p className="text-[10px] text-gray-400">{event.date}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2 py-1 cursor-pointer hover:underline group">
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
              <span className="text-xs text-gray-500">+</span>
            </div>
            <span className="text-xs text-linkedin-muted group-hover:text-linkedin-text">Create event</span>
          </div>
        </div>

        <div className="px-4 py-3 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-linkedin-blue mb-2 cursor-pointer hover:underline">Followed Hashtags</h3>
          <div className="flex items-center gap-2 py-1 cursor-pointer hover:underline group">
            <Hash className="w-4 h-4 text-gray-500 group-hover:text-black" />
            <span className="text-xs text-linkedin-muted group-hover:text-linkedin-text">hiring</span>
          </div>
          <div className="flex items-center gap-2 py-1 cursor-pointer hover:underline group">
            <Hash className="w-4 h-4 text-gray-500 group-hover:text-black" />
            <span className="text-xs text-linkedin-muted group-hover:text-linkedin-text">opentowork</span>
          </div>
        </div>

        <div className="px-4 py-3 border-t border-gray-200 text-center cursor-pointer hover:bg-gray-50">
          <span className="text-sm font-semibold text-linkedin-muted">Discover more</span>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
