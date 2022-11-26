import { Itarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';

// A inteface é como um tipo de variavel onde colocamos os tipos dentro dela
interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void 
}

export default function Lista({
    tarefas, 
    selecionaTarefa
}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item}></Item>
                ))}
            </ul>
        </aside>
    )
}