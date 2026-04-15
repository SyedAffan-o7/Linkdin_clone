import { MoreHorizontal, ChevronRight, Info } from 'lucide-react';

function RightSidebar() {
  const newsItems = [
    {
      id: 1,
      title: 'Tech hiring slowdown continues',
      readers: '45,892 readers',
      time: '4h ago'
    },
    {
      id: 2,
      title: 'AI startup raises $2.75B',
      readers: '38,234 readers',
      time: '6h ago'
    },
    {
      id: 3,
      title: 'Remote work reshapes real estate',
      readers: '32,156 readers',
      time: '8h ago'
    },
    {
      id: 4,
      title: 'New JavaScript framework gains traction',
      readers: '28,901 readers',
      time: '10h ago'
    },
    {
      id: 5,
      title: 'Major tech company announces layoffs',
      readers: '26,445 readers',
      time: '12h ago'
    },
    {
      id: 6,
      title: 'Cloud computing market grows 22%',
      readers: '21,678 readers',
      time: '14h ago'
    },
    {
      id: 7,
      title: 'Startup IPO market heats up',
      readers: '19,234 readers',
      time: '16h ago'
    },
    {
      id: 8,
      title: 'Cybersecurity threats increase',
      readers: '17,892 readers',
      time: '18h ago'
    },
    {
      id: 9,
      title: 'EV sales surpass expectations',
      readers: '15,667 readers',
      time: '20h ago'
    },
    {
      id: 10,
      title: 'New regulations for tech industry',
      readers: '14,234 readers',
      time: '1d ago'
    }
  ];

  const footerLinks = [
    ['About', 'Accessibility', 'Help Center'],
    ['Privacy & Terms', 'Ad Choices'],
    ['Advertising', 'Business Services'],
    ['Get the LinkedIn app', 'More']
  ];

  return (
    <div className="w-[300px] flex-shrink-0 h-full overflow-y-auto scrollbar-hide">
      {/* LinkedIn News */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-sm">LinkedIn News</h2>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Info className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="space-y-3">
          {newsItems.slice(0, 5).map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="flex items-start gap-2">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-linkedin-text group-hover:text-linkedin-blue hover:underline line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-linkedin-muted mt-0.5">
                    {item.readers} • {item.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-1 mt-3 text-xs font-semibold text-gray-500 hover:text-gray-700">
          Show more
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Ad Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-linkedin-muted">Ad</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-linkedin-muted mb-3">
            John, unlock your full potential with Premium
          </p>
          
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-12 h-12">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0a66c2"/>
                <path d="M12 4L14.5 9.5L20 10L16 14L17 19.5L12 17L7 19.5L8 14L4 10L9.5 9.5L12 4Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          <p className="text-xs text-linkedin-text mb-3">
            See who\'s viewed your profile in the last 90 days
          </p>
          
          <button className="px-4 py-1.5 border border-linkedin-blue rounded-full text-linkedin-blue font-semibold text-sm hover:bg-linkedin-lightBlue transition-colors">
            Try for $0
          </button>
        </div>
      </div>

      {/* More LinkedIn News */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-sm">Today\'s most viewed courses</h2>
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="space-y-3">
          {[
            'React.js Essential Training',
            'Learning Node.js',
            'JavaScript: Async Programming',
            'CSS: Animation'
          ].map((course, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-start gap-2">
                <span className="text-xs text-linkedin-muted font-semibold w-4">{index + 1}</span>
                <div>
                  <h3 className="text-sm text-linkedin-text group-hover:text-linkedin-blue hover:underline">
                    {course}
                  </h3>
                  <p className="text-xs text-linkedin-muted mt-0.5">LinkedIn Learning</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-1 mt-3 text-xs font-semibold text-gray-500 hover:text-gray-700">
          Show more on LinkedIn Learning
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Add to Your Feed */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2 sticky top-[60px]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-sm">Add to your feed</h2>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Info className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Tech Insider', followers: '2.1M followers' },
            { name: 'Harvard Business Review', followers: '5.8M followers' },
            { name: 'MIT Technology Review', followers: '1.2M followers' }
          ].map((page, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-gray-500">{page.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-linkedin-text hover:text-linkedin-blue hover:underline cursor-pointer truncate">
                  {page.name}
                </h3>
                <p className="text-xs text-linkedin-muted">{page.followers}</p>
                <button className="mt-1.5 flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-500 text-gray-600 font-semibold text-sm hover:bg-gray-100 hover:border-gray-700 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-1 mt-4 text-xs font-semibold text-gray-500 hover:text-gray-700">
          View all recommendations
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 text-center">
        {footerLinks.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 mb-1">
            {row.map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-xs text-linkedin-muted hover:text-linkedin-blue hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
        <div className="flex items-center justify-center gap-1 mt-2">
          <div className="w-14 h-4">
            <svg viewBox="0 0 56 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="10" fontSize="8" fontWeight="bold" fill="#0a66c2">LinkedIn</text>
            </svg>
          </div>
          <span className="text-xs text-linkedin-muted">LinkedIn Corporation © 2024</span>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
