import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="h-screen bg-[#f3f2ef] overflow-hidden flex flex-col">
      <Navbar />
      
      {/* Main Content - Fixed height container */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-[1128px] mx-auto h-full px-4 py-6">
          <div className="flex gap-6 justify-center h-full items-start">
            {/* Left Sidebar - Fixed, no scroll */}
            <div className="hidden lg:block h-full overflow-hidden">
              <LeftSidebar />
            </div>
            
            {/* Main Feed - Only this scrolls */}
            <div className="flex-1 max-w-[555px] h-full overflow-y-auto pr-2 scrollbar-hide">
              <Feed />
            </div>
            
            {/* Right Sidebar - Fixed, no scroll */}
            <div className="hidden xl:block h-full overflow-hidden">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
