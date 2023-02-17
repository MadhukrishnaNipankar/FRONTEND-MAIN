import "../Styles/App.css";

// Component imports
import Navbar from "./Navbar";

import Login from "./Login/Login";
import MoreSection from "./MoreSection";
import MainSectionHomepage from "./MainSectionHomepage";
import Footer from "./Footer";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <div className="HomePage">
        <MainSectionHomepage />
        <MoreSection />
        <Footer />
      </div> */}
      {/* <Login /> */}
      <ProfilePage />
    </div>
  );
}

export default App;
