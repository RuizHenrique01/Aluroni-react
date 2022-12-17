import menu from 'data/menu.json';
import styles from './Init.module.scss';

export function Init() {
  let recommendedDishes = [...menu];

  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3>Recomendações da Cozinha</h3>
      <div className={styles.recomendados}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}