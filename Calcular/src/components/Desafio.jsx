import React, { useState, useEffect } from 'react';
import './Desafio.css';

function Desafio() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operador, setOperador] = useState('+');
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [resultadoCorreto, setResultadoCorreto] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const gerarNovoDesafio = () => {
    const novoNum1 = Math.floor(Math.random() * 20) + 1;
    const novoNum2 = Math.floor(Math.random() * 20) + 1;
    const operadores = ['+', '-', '*', '/'];
    const novoOperador = operadores[Math.floor(Math.random() * operadores.length)];

    setNum1(novoNum1);
    setNum2(novoNum2);
    setOperador(novoOperador);

    switch (novoOperador) {
      case '+':
        setResultadoCorreto(novoNum1 + novoNum2);
        break;
      case '-':
        setResultadoCorreto(novoNum1 - novoNum2);
        break;
      case '*':
        setResultadoCorreto(novoNum1 * novoNum2);
        break;
      case '/':
        setResultadoCorreto(novoNum1 / novoNum2);
        break;
      default:
        setResultadoCorreto(0);
    }

    setRespostaUsuario('');
    setMensagem('');
  };

  const verificarResposta = () => {
    const resposta = parseInt(respostaUsuario);
    if (resposta === resultadoCorreto) {
      setPontuacao(pontuacao + 10);
      setMensagem('Correto!');
    } else {
      setPontuacao(pontuacao - 5);
      setMensagem(`Incorreto. O resultado é ${resultadoCorreto}`);
    }
    gerarNovoDesafio();
  };

  useEffect(() => {
    gerarNovoDesafio();
  }, []); // Array de dependências vazio

  return (
    <div className="desafio">
      <h2>Você tem {pontuacao} pontos</h2>
      <button onClick={gerarNovoDesafio}>Sortear Desafio</button>
      <p>Quanto é :</p>
      <div>
        <input type="text" value={num1} readOnly />
        <span> {operador} </span>
        <input type="text" value={num2} readOnly />
      </div>
      <p>Sua Resposta :</p>
      <input
        type="text"
        value={respostaUsuario}
        onChange={(e) => setRespostaUsuario(e.target.value)}
      />
      <button onClick={verificarResposta}>Validar</button>
      <button onClick={gerarNovoDesafio}>Novo Jogo</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default Desafio;