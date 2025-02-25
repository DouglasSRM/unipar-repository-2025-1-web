import './Cover.css'

import imgCover from './images/imgCover.jpeg'

function Cover() {

    return (
    <div className="main-cover">
        <img src={imgCover} alt="Imagem de Capa" />
    </div>
    )
}
export default Cover;