import React from 'react';
import './Cabecalho.css';
import logo from '../assets/calcular.jpeg'; // Importe a imagem do logo

function Cabecalho() {
  return (
    <div className="cabecalho">
      <img src={logo} alt="Logo" className="logo" />
      <p>Ferramenta de Aprendizagem de Cálculo</p> {/* Adicione a data aqui */}
    </div>
  );
}

export default Cabecalho;