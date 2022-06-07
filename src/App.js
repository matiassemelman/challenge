// Libraries
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Login from "./components/Login";
import List from "./components/List";
import Footer from "./components/Footer";

// Styles
import './css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
