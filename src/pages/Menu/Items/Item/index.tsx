import TagsDish from 'components/TagsDish';
import { useNavigate } from 'react-router-dom';
import { IDish } from 'types/Dish';
import styles from './Item.module.scss';

export default function Item(props: IDish){
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
      <div className={styles.item__image}>
        <img src={photo} alt="imagem" />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsDish {...props}/>
      </div>
    </div>
  );
}