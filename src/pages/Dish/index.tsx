import menu from 'data/menu.json';
import styles from './Dish.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import TagsDish from 'components/TagsDish';
import NotFound from 'pages/NotFound';
import Header from 'components/Header';

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = menu.find(item => item.id === Number(id));
  if (!dish) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<Header />}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <div className={styles.container}>
              <h1 className={styles.titulo}>
                {dish.title}
              </h1>
              <div className={styles.imagem}>
                <img src={dish.photo} alt={dish.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {dish.description}
                </p>
              </div>
              <TagsDish {...dish} />
            </div>
          </>
        } />
      </Route>
    </Routes>
  );
}