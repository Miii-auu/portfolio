import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Projects = () => <h1>Projects</h1>;

function App() {
  return (
    <Router>
      <nav style={{
        padding: "1rem",
        background: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10
      }}>
        <Link to="/" style={{ margin: "0 1.5rem", textDecoration: "none", color: "black", fontSize: "1.2rem" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 1.5rem", textDecoration: "none", color: "black", fontSize: "1.2rem" }}>About</Link>
        <Link to="/projects" style={{ margin: "0 1.5rem", textDecoration: "none", color: "black", fontSize: "1.2rem" }}>Projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;