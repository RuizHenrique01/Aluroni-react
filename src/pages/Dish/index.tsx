import menu from 'data/menu.json';
import styles from './Dish.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import TagsDish from 'components/TagsDish';

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = menu.find(item => item.id === Number(id));
  if(!dish){
    return <></>;
  }
  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
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
          <TagsDish {...dish}/>
        </div>
      </section>
    </>
  );
}