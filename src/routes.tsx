import Header from 'components/Header';
import MenuHeader from 'components/MenuHeader';
import { Init } from 'pages/Init';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRouter() {
  return (
    <main>
      <Router>
        <MenuHeader />
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Init />} />
            <Route path='menu' element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}