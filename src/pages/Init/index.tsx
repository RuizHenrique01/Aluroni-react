import menu from 'data/menu.json';
import styles from './Init.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { IDish } from 'types/Dish';

export function Init() {
  const navigate = useNavigate();
  let recommendedDishes = [...menu];

  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);

  function redirect(dish: IDish) {
    navigate(`/dish/${dish.id}`, { state: { dish }, replace: true });
  }

  return (
    <section>
      <h3 className={stylesTheme.titulo}>Recomendações da Cozinha</h3>
      <div className={styles.recomendados}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button className={styles.recomendado__botao} onClick={() => redirect(item)}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='Caso do aluroni' />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergeuiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}