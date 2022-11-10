import filtros from './filtros.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export function Filters({filter, setFilter}: Props) {

    function selecionaFiltro(opcao: IOpcao){
        if(filter === opcao.id) return setFilter(null);
        return setFilter(opcao.id);
    }

    return (
    <div className={styles.filtros}>
        { filtros.map(op => (
            <button className={
                classNames({
                    [styles.filtros__filtro]: true,
                    [styles['filtros__filtro--ativo']]: filter === op.id
                })
                } key={op.id} onClick={() => selecionaFiltro(op)}>
                {op.label}
            </button>
        ))
        }
    </div>);
}