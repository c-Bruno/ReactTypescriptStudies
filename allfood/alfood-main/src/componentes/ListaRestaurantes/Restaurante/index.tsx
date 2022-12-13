import axios from 'axios';
import IRestaurante from '../../../interfaces/IRestaurante';
import Prato from '../Prato';
import estilos from './Restaurante.module.scss';
import { useEffect, useState } from 'react';
import IPrato from '../../../interfaces/IPrato';

interface RestauranteProps {
  restaurante: IRestaurante;
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
  const [pratos, setPratos] = useState<IPrato[]>([]);
  
  useEffect(() => {
    // Obeter pratos
    axios.get('http://localhost:8000/api/v2/pratos/')
      .then(resposta => {
        setPratos(resposta.data.filter((item: any) => item.restaurante === restaurante.id))
    })
    . catch( erro => {
        console.log(erro)
    })
  }, [])

  return (<section className={estilos.Restaurante}>
    <div className={estilos.Titulo}>
      <h2>{restaurante.nome}</h2>
    </div>
    <div>
      {pratos?.map(item => <Prato prato={item} key={item.id} />)}
    </div>
  </section>)
}

export default Restaurante