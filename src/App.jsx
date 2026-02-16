import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-soft text-primary dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foundation" element={<SectionPage type="foundation" />} />
          <Route path="/childhood" element={<SectionPage type="childhood" />} />
          <Route path="/youth" element={<SectionPage type="youth" />} />
          <Route path="/marriage" element={<SectionPage type="marriage" />} />
          <Route path="/parenting" element={<SectionPage type="parenting" />} />
          <Route path="/character" element={<SectionPage type="character" />} />
          <Route path="/death" element={<SectionPage type="death" />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
