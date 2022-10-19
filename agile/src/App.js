import "./App.css";
import HomePage from "./pages/HomePage.js";
import { Routes, Route, Link } from "react-router-dom";
import AdmissionPage from "./pages/AdmissionPage.js";
import AcademicsPage from "./pages/AcademicsPage.js";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout.js";
import NavPanel from "./components/NavPanel.js";

function App() {
  return (
    <>
      <Layout style={{height:"100vh"}}>
        <NavPanel />
        <Content style={{ backgroundColor: "white" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
          </Routes>
        </Content>
      </Layout>
    </>
  );
}

export default App;
