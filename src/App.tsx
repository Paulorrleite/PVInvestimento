import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/Navbar';
import PagedList from './Componentes/PagedList/PagedList';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<NavBar/>}/>
          <Route path="/teste" element={<PagedList/>}/>
      </Routes>
    </Router>
  );
}

export default App