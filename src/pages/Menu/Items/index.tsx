import Item from './Item';
import menus from './items.json';
import styles from './Items.module.scss';

export default function Items(){
    return (
        <div className={ styles.itens }>
        {menus.map(item => (
           <Item key={item.id} {...item}/>
        ))}
        </div>
    )
}