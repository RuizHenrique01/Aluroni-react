import styles from './Search.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props{
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({ search, setSearch}: Props){
    return (
        <div className={styles.buscador}>
            <input placeholder='Buscar' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <CgSearch size={20} color="#4C4D5E"/>
        </div>
    );
}