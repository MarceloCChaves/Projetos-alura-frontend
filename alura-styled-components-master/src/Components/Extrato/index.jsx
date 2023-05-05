import React, { useState } from 'react';
import { Box, Button } from '../UI';
import { extratoLista } from "../../info";
import Itens from '../Itens';

export default function Extrato() {
  const [toggleButton, setToggleButton] = useState(false);
  const listaFiltrada = extratoLista.updates.filter((extratoLista) => extratoLista.id <= 3);
  const restoDaListaFiltrada = extratoLista.updates.filter((extratoLista) => extratoLista.id > 3);
  return (
    <Box>
      <h2>Extrato</h2>
      {listaFiltrada.map(({id, type, from, value, date}) => {
        return(
          <Itens
            key={id}
            type={type}
            from={from}
            value={value}
            date={date}
          />
        )
      })}
      {
        toggleButton ? 
          restoDaListaFiltrada.map(({id, type, from, value, date}) => {
            return(
              <Itens
                key={id}
                type={type}
                from={from}
                value={value}
                date={date}
              />
            )
          }) :
        <></>
      }
      {extratoLista.updates.length > 4 ? <Button onClick={() => setToggleButton(!toggleButton)}>{toggleButton ? 'Ver menos' : 'Ver mais'}</Button> : <></>}
    </Box>
  )
}
