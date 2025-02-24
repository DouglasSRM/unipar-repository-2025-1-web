function Card({imagem, titulo, descricao}){

    function validarDescricao(){
        return descricao ? descricao : 'Sem descricao'
    }
    
    function validarImagem(){
        return imagem ? imagem : 'https://www.buritama.sp.leg.br/imagens/parlamentares-2013-2016/sem-foto.jpg/image' 
    }

    return (
        <div className="card" >
            <img className = "image"
                style = {{width: '200px', height: '200px'}}
                src= {validarImagem()}></img> 
            <p>{titulo}</p>   
            <span>{validarDescricao()}</span>
        </div>

    )
}

export default Card