import Header from "./components/Header";
import Login from "./components/Login";
import List from "./components/List";
import {Routes, Route} from 'react-router-dom'



function App() {
  
  return (
    <>
    {localStorage.getItem('token') ? <Header/> : null}
    <Routes>
      
    <Route exact path="/" element={<Login/>}/>
    <Route path="/list" element={<List/>}/>
    </Routes>
    </>
  );
}

export default App;
