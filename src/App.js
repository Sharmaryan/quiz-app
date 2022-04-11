import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import { Home, Quiz, Rules, Results } from "./pages/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
