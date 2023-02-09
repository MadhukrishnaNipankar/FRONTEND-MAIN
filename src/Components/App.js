import "../Styles/App.css";

// Component imports
import Navbar from "./Navbar";
import Login from "./Login/Login";
import MoreSection from "./MoreSection";
import MainSectionHomepage from "./MainSectionHomepage";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* <div className="HomePage">
        <Navbar />
        <MainSectionHomepage />
        <MoreSection />
        <Footer />
      </div> */}
      <Login />
    </div>
  );
}

export default App;
