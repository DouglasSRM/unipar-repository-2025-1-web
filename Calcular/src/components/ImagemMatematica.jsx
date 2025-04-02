import React from 'react';
import './ImagemMatematica.css';
import crianca from '../assets/imagem_crianca.jpeg'; // Importe a imagem da criança

function ImagemMatematica() {
  return (
    <div className="imagens-matematica">
      <img src={crianca} alt="Criança aprendendo matemática" className="imagem-crianca" />
    </div>
  );
}

export default ImagemMatematica;