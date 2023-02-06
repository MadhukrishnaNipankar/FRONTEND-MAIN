import "../Styles/App.css";

// Component imports
import Navbar from "./Navbar";
import MoreSection from "./MoreSection";
import MainSectionHomepage from "./MainSectionHomepage";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSectionHomepage />
      <MoreSection />
      <Footer />
    </div>
  );
}

export default App;
