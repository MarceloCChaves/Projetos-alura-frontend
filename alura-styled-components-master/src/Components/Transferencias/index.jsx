import React from 'react';
import { Box } from '../UI';
import { listaTransferencias } from '../../transfers';
import styled from 'styled-components';
import Transferencia from '../Transferencia';

const BigBox = styled(Box)`
  margin: 20px 0;
  width: 100%;
`

export default function Transferencias() {
  return (
    <BigBox>
      <h2>Histórico</h2>
      {listaTransferencias.updates.map(({name, date, value, id}) => {
        return(
          <Transferencia
            key={id}
            name={name}
            date={date}
            value={value}
          />
        )
      })}
    </BigBox>
  )
}
