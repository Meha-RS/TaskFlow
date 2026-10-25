import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header';
import BoardPage from './pages/BoardPage';
import StatsPage from './pages/StatsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;