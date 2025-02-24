function Card({imagem, titulo, descricao}){
    
    return (
        <div style={{width: '335px',
                    border:'1px',
                    borderStyle:'solid',
                    borderColor:'#ddd',
                    textAlign:'center',
                
                    alignItems:'center'}}>
            <img style={{ width: '250px', height: 'auto' }}
            src= {imagem ? imagem : "data:image/png;base64,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"}></img> 
            <p>{titulo}</p>   
            <span>{descricao ? descricao : "Sem descrição"}</span>
        </div>

    )
}

export default Card