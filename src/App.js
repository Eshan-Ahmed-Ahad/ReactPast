
import './App.css';
import Home from "./pages/Home"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';

function App() {
  return <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Main" element={<Main />} />
            </Routes>
          </BrowserRouter>

 
}

export default App;
