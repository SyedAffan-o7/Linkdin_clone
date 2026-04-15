import { useState } from 'react';
import { 
  Image, 
  Calendar, 
  FileText, 
  MoreHorizontal, 
  ThumbsUp, 
  MessageCircle, 
  Repeat2, 
  Send,
  Globe,
  X,
  Smile
} from 'lucide-react';

function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [postText, setPostText] = useState('');

  const posts = [
    {
      id: 1,
      author: {
        name: 'Sarah Chen',
        headline: 'Product Manager at Google',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
      },
      time: '2h',
      visibility: 'public',
      content: 'Excited to share that I\'ll be speaking at the upcoming ProductCon 2024! Looking forward to discussing AI-powered product development with fellow product leaders. Who else is attending? 🚀',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
      likes: 2847,
      comments: 156,
      reposts: 89,
      reactions: ['👍', '❤️', '🎉']
    },
    {
      id: 2,
      author: {
        name: 'TechCrunch',
        headline: 'Technology News & Analysis • 5.2M followers',
        avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop'
      },
      time: '4h',
      visibility: 'public',
      content: 'AI startup Anthropic raises $2.75B in latest funding round, valuing the company at $18.4 billion. The round was led by Menlo Ventures.\n\nThis comes just months after the company\'s previous funding and highlights continued investor appetite for AI infrastructure.',
      image: null,
      likes: 1243,
      comments: 89,
      reposts: 234,
      reactions: ['👍', '😮']
    },
    {
      id: 3,
      author: {
        name: 'David Miller',
        headline: 'Senior Software Engineer | React & Node.js',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      time: '6h',
      visibility: 'public',
      content: 'Just published a new blog post: "10 React Performance Optimization Techniques You Need to Know in 2024"\n\nFrom code splitting to memoization, these tips will help you build faster React applications. Check it out and let me know your thoughts! 💡\n\n#reactjs #javascript #webdevelopment #performance',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
      likes: 892,
      comments: 67,
      reposts: 156,
      reactions: ['👍', '❤️', '💡']
    },
    {
      id: 4,
      author: {
        name: 'LinkedIn News',
        headline: '4.2M followers',
        avatar: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop'
      },
      time: '8h',
      visibility: 'public',
      content: 'Remote work continues to reshape the tech industry. A new survey shows that 68% of software engineers would consider leaving their current role if required to return to the office full-time.\n\nWhat\'s your take on the future of work? Share your thoughts below. 👇',
      image: null,
      likes: 3456,
      comments: 523,
      reposts: 445,
      reactions: ['👍', '🤔', '💼']
    }
  ];

  return (
    <div className="w-full min-w-0">
      {/* Create Post */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-left text-sm text-gray-500 hover:bg-gray-50 transition-colors"
          >
            Start a post
          </button>
        </div>

        <div className="flex justify-between mt-3">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <Image className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-500">Media</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <Calendar className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium text-gray-500">Event</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <FileText className="w-5 h-5 text-rose-500" />
            <span className="text-sm font-medium text-gray-500">Write article</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex-1 h-[1px] bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Sort by:</span>
          <button className="text-xs font-semibold text-black flex items-center gap-1">
            Top
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg border border-gray-200 mb-2 overflow-hidden">
          {/* Post Header */}
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-linkedin-text hover:text-linkedin-blue hover:underline cursor-pointer">
                    {post.author.name}
                  </h3>
                  <p className="text-xs text-linkedin-muted">{post.author.headline}</p>
                  <div className="flex items-center gap-1 text-xs text-linkedin-muted mt-0.5">
                    <span>{post.time}</span>
                    <span>•</span>
                    <Globe className="w-3 h-3" />
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreHorizontal className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Post Content */}
            <div className="mt-2">
              <p className="text-sm text-linkedin-text whitespace-pre-line">{post.content}</p>
            </div>
          </div>

          {/* Post Image */}
          {post.image && (
            <div className="w-full">
              <img src={post.image} alt="Post content" className="w-full h-auto max-h-[500px] object-cover" />
            </div>
          )}

          {/* Post Stats */}
          <div className="px-4 py-2 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center gap-1">
              <div className="flex -space-x-1">
                {post.reactions.map((reaction, idx) => (
                  <span key={idx} className="w-4 h-4 text-sm">{reaction}</span>
                ))}
              </div>
              <span className="text-xs text-linkedin-muted ml-1">{post.likes.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-linkedin-muted hover:text-linkedin-blue hover:underline cursor-pointer">
                {post.comments} comments
              </span>
              <span className="text-xs text-linkedin-muted hover:text-linkedin-blue hover:underline cursor-pointer">
                {post.reposts} reposts
              </span>
            </div>
          </div>

          {/* Post Actions */}
          <div className="px-2 py-1 flex justify-between">
            <button className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors group">
              <ThumbsUp className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Like</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors group">
              <MessageCircle className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Comment</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors group">
              <Repeat2 className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Repost</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors group">
              <Send className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Send</span>
            </button>
          </div>
        </div>
      ))}

      {/* Create Post Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-[552px] shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">John Doe</p>
                  <button className="flex items-center gap-1 text-xs text-gray-500 border border-gray-300 rounded-full px-2 py-0.5 mt-0.5">
                    <Globe className="w-3 h-3" />
                    <span>Anyone</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What do you want to talk about?"
                className="w-full min-h-[120px] resize-none border-none outline-none text-lg text-gray-700 placeholder-gray-400"
                autoFocus
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Image className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <FileText className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Smile className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <button 
                disabled={!postText.trim()}
                className={`px-4 py-1.5 rounded-full font-semibold text-sm transition-colors ${
                  postText.trim() 
                    ? 'bg-linkedin-blue text-white hover:bg-linkedin-darkBlue' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feed;
