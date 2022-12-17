import { Init } from 'pages/Init';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Init />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </Router>
  );
}