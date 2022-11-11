import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import { useState } from "react";
import { Filters } from "./Filters";
import  Sorter, { OptionsSorter } from "./Sorter";
import Items from "./Items";

export default function Menu(){
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [sorter, setSorter] = useState<OptionsSorter>("");

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Search search={search} setSearch={setSearch}/>
                <div className={styles.cardapio__filtros}>
                    <Filters filter={filter} setFilter={setFilter}/>
                    <Sorter sorter={sorter} setSorter={setSorter}/> 
                </div>
                <Items search={search} filter={filter} sorter={sorter} />
            </section>
        </main>
    );
}