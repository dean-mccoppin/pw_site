import "./App.css";
import NavComponent from "./components/navbar.jsx";
import About from "./components/about.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="wrapper">
      <NavComponent />
      <About />
    </div>
  );
}

export default App;
