import "../Styles/App.css";
// Component imports
import Navbar from "./Navbar";

import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import MoreSection from "./MoreSection";
import MainSectionHomepage from "./MainSectionHomepage";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <Router>
        <Switch>
          {/* Homepage */}
          <Route exact path="/">
            <Navbar />
            <div className="HomePage">
              <MainSectionHomepage />
              <MoreSection />
              <Footer />
            </div>
          </Route>
          {/* Profile Page */}
          <Route exact path="/profile">
            <Navbar />
            <ProfilePage />
            <Footer />
          </Route>
          {/* Login Page */}
          <Route exact path="/login">
            <Login />
          </Route>

          {/* Signup Page */}
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
