import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonPage from './pages/PokemonPage';
import './App.scss';

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      <Route path="/:pokemon" element={<PokemonPage />} />
    </Routes>
  );
}

export default App;
