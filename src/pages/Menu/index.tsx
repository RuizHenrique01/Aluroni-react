import styles from './Menu.module.scss';
import Search from './Search';
import { useState } from 'react';
import { Filters } from './Filters';
import Sorter, { OptionsSorter } from './Sorter';
import Items from './Items';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState<OptionsSorter>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filters filter={filter} setFilter={setFilter} />
        <Sorter sorter={sorter} setSorter={setSorter} />
      </div>
      <Items search={search} filter={filter} sorter={sorter} />
    </section>
  );
}