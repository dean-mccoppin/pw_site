import "./App.css";
import NavComponent from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Footer from "./components/footer.jsx";
import Projects from "./components/projects.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <NavComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
