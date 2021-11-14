
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { TodoPage } from "./pages/TodoPage";
import {BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  
  return (
    <BrowserRouter>
     <Navbar />
     <div className="container">

      <Routes>
      <Route path="/" element={<TodoPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/*" element={<h1>Неверный URL адрес</h1>}/>
     </Routes>

     </div>
    </BrowserRouter>
  );
}

export default App;
