import "../Styles/App.css";

// Component imports
import Navbar from "./Navbar";
import MoreSection from "./MoreSection";
import MainSectionHomepage from "./MainSectionHomepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSectionHomepage />
      <MoreSection />
    </div>
  );
}

export default App;
