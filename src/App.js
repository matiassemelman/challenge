// Libraries
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Login from "./components/Login";
import List from "./components/List";
import DetailView from './pages/DetailView';


// Styles
import './css/bootstrap.min.css'

function App() {
  return (
    <div className="container-fluid px-0">
      <Header />
      <div className="container mt-3">
        
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<DetailView />} />

      </Routes>
      </div>
    </div>
  );
}

export default App;
