import classNames from 'classnames';
import menus from 'data/menu.json';
import styles from './Item.module.scss';

type Props = typeof menus[0];

export default function Item(props: Props){
  const { title, price, size, serving, category, description, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt="imagem" />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
      </div>
      <div className={styles.item__tags}>
        <div className={classNames({
          [styles.item__tipo]: true,
          [styles[`item__tipo__${category.label.toLocaleLowerCase()}`]]: true
        })}>{category.label}</div>
        <div className={styles.item__porcao}>{size}g</div>
        <div className={styles.item__qtdpessoas}>Serve {serving} pessoa{serving === 1 ? '' : 's'}</div>
        <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
      </div>
    </div>
  );
}