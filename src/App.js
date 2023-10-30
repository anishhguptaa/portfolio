import './index.css';
import Home from "./Routes/Home"
import About from "./Routes/About"
import Contact from "./Routes/Contact"
import Projects from "./Routes/Projects"
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;