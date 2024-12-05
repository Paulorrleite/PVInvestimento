import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/Navbar';
import AreaLogada from './Paginas/AreaLogada/AreaLogada';
import SharesFavPage from './Paginas/ShareFavList/ShareFavList';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<NavBar/>}/>
          <Route path="/home" element={<AreaLogada/>}/>
          <Route path="/fav" element={<SharesFavPage />} />
      </Routes>
    </Router>
  );
}

export default App