import React from 'react';
import styled from 'styled-components';

export default function Transferencia({name, date, value}) {
  const Transferencia = styled.section`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 10px 0;

    display: flex;
    align-items: center;
    text-align: justify;
    justify-content: space-between;
    padding: 20px;
  `
  return (
    <Transferencia>
      <article>
        <strong>Transferência recebida</strong>
        <p>{name}</p>
        <p>{date}</p>
      </article>
      <article>
        <p>{value}</p>
      </article>
    </Transferencia>
  )
}
