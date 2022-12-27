import Footer from 'components/Footer';
import Header from 'components/Header';
import MenuHeader from 'components/MenuHeader';
import { About } from 'pages/About';
import { Init } from 'pages/Init';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <MenuHeader />
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Init />} />
            <Route path='menu' element={<Menu />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer /> 
      </Router>
    </main>
  );
}