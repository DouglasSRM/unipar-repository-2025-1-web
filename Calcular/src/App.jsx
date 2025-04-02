import Cabecalho from './components/Cabecalho';
import ImagemMatematica from './components/ImagemMatematica';
import TextoInformativo from './components/TextoInformativo';
import Pontuacao from './components/Pontuacao';

function App() {
  return (
    <div className="app">
      <Cabecalho />
      <ImagemMatematica />
      <TextoInformativo />
      <Pontuacao />
    </div>
  );
}

export default App;