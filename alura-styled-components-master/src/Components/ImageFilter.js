import React from "react";
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { Icone } from "./UI";

export default (type) => {
  const Images = {
    Restaurante: <Icone src={alimentacao} alt="Restaurante"/>,
    Saude: <Icone src={saude} alt="saude"/>,
    Transporte: <Icone src={transporte} alt="transporte"/>,
    Utilidades: <Icone src={utilidades} alt="utilidades"/>,
    default: <Icone src={outros} alt="outros"/>
  }

  return Images[type] || Images.default;
}