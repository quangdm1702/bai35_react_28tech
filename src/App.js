import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error404 from './pages/Error404/Error404';
import LayoutDefault from './layout/LayoutDefault/LayoutDefault';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
