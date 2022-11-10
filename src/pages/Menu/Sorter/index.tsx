import styles from './Sorter.module.scss';
import opcoes from './opcoes.json';

export default function Sorter(){
    return(
        <button className={styles.ordenador}>
            <span>Orderna Por</span>
            <div className={styles.ordenador__options}>
                {opcoes.map((opcao) => (
                    <div className={styles.ordenador__option} key={opcao.value}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}