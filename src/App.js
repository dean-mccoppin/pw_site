import "./App.css";
import NavComponent from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Footer from "./components/footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="wrapper">
      <NavComponent />
      <About />
      <Footer />
    </div>
  );
}

export default App;
