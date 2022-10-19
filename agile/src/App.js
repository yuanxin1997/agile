import './App.css';
import HomePage from './pages/HomePage.js';
import { Routes, Route, Link } from "react-router-dom";
import AdmissionPage from './pages/AdmissionPage.js';
import AcademicsPage from './pages/AcademicsPage.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
      </Routes>
    </div>
  );
}

export default App;
