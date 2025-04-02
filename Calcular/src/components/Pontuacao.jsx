import { useState } from 'react';
import './Pontuacao.css';
import Desafio from './Desafio';

function Pontuacao() {
  const [pontuacao, setPontuacao] = useState(0);

  const atualizarPontuacao = (pontos) => {
    setPontuacao(pontuacao + pontos);
  };

  return (
    <div className="pontuacao">
    
      <Desafio atualizarPontuacao={atualizarPontuacao} />
    </div>
  );
}

export default Pontuacao;