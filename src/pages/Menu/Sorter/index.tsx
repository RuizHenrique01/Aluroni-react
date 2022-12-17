import styles from './Sorter.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classnames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export type OptionsSorter = '' | 'porcao' | 'qtd_pessoas' | 'preco';

interface Props {
    sorter: string;
    setSorter: React.Dispatch<React.SetStateAction<OptionsSorter>>
}

export default function Sorter({ sorter, setSorter } : Props) {
  const [open, setOpen] = useState(false);
  const nameOption = sorter && opcoes.find(op => op.value === sorter)?.nome;

  return (
    <button className={classnames({
      [styles.ordenador]: true,
      [styles['ordenador--ativo']]: sorter !== ''
    })} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
      <span>{ nameOption || 'Orderna Por'}</span>
      {open ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div className={classnames({ 
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: open
      })}>
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__option} key={opcao.value} onClick={() => setSorter(opcao.value as OptionsSorter)}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}