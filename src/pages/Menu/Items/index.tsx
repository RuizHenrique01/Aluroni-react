import { useEffect, useState } from 'react';
import Item from './Item';
import menus from 'data/menu.json';
import styles from './Items.module.scss';
import { IMenu } from 'types/Dish';

interface Props {
    search: string;
    filter: number | null;
    sorter: string;
}

export default function Items(props: Props){
  const { search, filter, sorter } = props;
  const [list, setList] = useState(menus);

  function testSearch(title: string){
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number){
    if(filter !== null) return filter === id;
    return true;
  }

  function sort(newList: IMenu){
    switch(sorter){
    case 'porcao':
      return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return newList.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return newList;
    }
  }

  useEffect(()=>{
    const newList = menus.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(sort(newList));
  }, [search, filter, sorter]);

  return (
    <div className={ styles.itens }>
      {list.map(item => (
        <Item key={item.id} {...item}/>
      ))}
    </div>
  );
}