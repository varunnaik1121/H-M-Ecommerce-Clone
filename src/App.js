import './App.css';
import Sidebar from './comps/Sidebar';
import Navbar from './comps/Navbar';
import Categories from './comps/Categories';
function App() {
  return (
    <div className="w-full min-h-full min-w-[100vw]">
      <Navbar />
      <Categories />
      <Sidebar />
    </div>
  );
}

export default App;
