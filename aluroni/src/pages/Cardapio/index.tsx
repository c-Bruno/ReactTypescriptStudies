import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens'

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");

    return (
        <main>
            <nav className={styles.menu}>
                <Logo></Logo>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do codigo e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardapio</h3>
                <Buscador busca={busca} setBusca={setBusca}></Buscador>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                    <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
                </div>
            </section>
        </main>
    )
}