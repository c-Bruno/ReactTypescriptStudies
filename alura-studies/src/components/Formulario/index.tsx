import React from "react";
import Botao from "../Button";
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    state = {
        tarefa: '',
        tempo: '00:00:00'
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
    }

    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" value={this.state.tarefa} name="tarefa" id="tarefa" placeholder="O que você quer estudar" required onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" value={this.state.tempo} step={1} name="tempo" id="tempo" min={'00:00:00'} max={'01:30:00'} required onChange={evento => this.setState({...this.state, tempo: evento.target.value})}/>
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;