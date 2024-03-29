import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSeleciona: Itarefa) {
    setSelecionado(tarefaSeleciona);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: (tarefa.id === tarefaSeleciona.id ? true : false)
    })));
  }

  function finalizarTarefa() {
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }

        return tarefa;
      }))}
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}></Lista>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}></Cronometro>
    </div>
  );
}

export default App;
