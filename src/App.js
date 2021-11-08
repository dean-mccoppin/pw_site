import "./App.css";
import NavParent from "./components/navbarparent.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Footer from "./components/footer.jsx";
import Projects from "./components/projects.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <NavParent />
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route exact path="/about" component={<About />} />
          <Route exact path="/projects" component={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
