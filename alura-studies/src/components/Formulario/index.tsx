import React from "react";
import Botao from "../Button";

class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que voc� quer estudar" required/>
                </div>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" step={1} name="tempo" id="tempo" min={'00:00:00'} max={'01:30:00'} required/>
                <div>

                </div>
                <Botao></Botao>
            </form>
        )
    }
}

export default Formulario;