import { useEffect, useState } from 'react';
import IRestaurante from '../../../interfaces/IRestaurante';
import Prato from '../Prato';
import estilos from './Restaurante.module.scss';
import IPrato from '../../../interfaces/IPrato';
import http from '../../../http';

interface RestauranteProps {
  restaurante: IRestaurante
}


const Restaurante = ({ restaurante }: RestauranteProps) => {
  const [pratoRestaurante, setPratoRestaurante] = useState<IPrato[]>();

  useEffect(() => {
    http.get<IPrato[]>(`http://localhost:8000/api/v1/restaurantes/${restaurante.id}/pratos/`)
    .then((res) => {
      setPratoRestaurante(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [restaurante.id])


  return (<section className={estilos.Restaurante}>
    <div className={estilos.Titulo}>
      <h2>{restaurante.nome}</h2>
    </div>
    <div>
      {pratoRestaurante?.map(item => <Prato prato={item} key={item.id} />)}
    </div>
  </section>)
}

export default Restaurante