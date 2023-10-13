import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
     <Layout></Layout>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/menu" element={<Menu></Menu>}></Route>
     </Routes>
    </div>
  );
}

export default App;