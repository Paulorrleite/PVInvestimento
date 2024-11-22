import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/Navbar';
import AreaLogada from './Paginas/AreaLogada/AreaLogada';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<NavBar/>}/>
          <Route path="/teste" element={<AreaLogada/>}/>
      </Routes>
    </Router>
  );
}

export default App