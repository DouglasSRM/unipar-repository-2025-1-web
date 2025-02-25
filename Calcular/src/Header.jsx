import './Header.css'

import imgHeader from './images/imgLogo.jpeg'
import { useState, useEffect } from 'react';

function Header() {

    const [currentDate, setCurrentDate] = useState('');


    useEffect(() => {
        const updateDate = () => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0'); // Adiciona 0 à frente se o dia for menor que 10
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona 0 à frente se o mês for menor que 10
            const year = date.getFullYear();
      
            setCurrentDate(`${day}/${month}/${year}`);
        };

        updateDate();

        const interval = setInterval(updateDate, 86400000); // 24 horas em milissegundos
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

  return (
      <div className="main-header">
        <img src={imgHeader} alt="Imagem de Cabeçalho" className="header-img" />
        
        <input
          type="text"
          placeholder="Ferramenta de aprendizagem de calculo"
          className="search-bar"
        />
        <span className="current-date">{currentDate}</span>
      </div>
  );
}

export default Header
