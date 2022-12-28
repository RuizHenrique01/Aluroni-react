import TagsDish from 'components/TagsDish';
import { IDish } from 'types/Dish';
import styles from './Item.module.scss';

export default function Item(props: IDish){
  const { title, description, photo } = props;
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
      <TagsDish {...props}/>
    </div>
  );
}