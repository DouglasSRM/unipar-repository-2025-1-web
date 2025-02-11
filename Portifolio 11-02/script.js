function inserirData(data) {
    if (!data) {
        const horarioInput = document.getElementById('horarioInput').value;
        if (!horarioInput) {
            alert(`${horarioInput}`+'Por favor, insira um horário.');
            return;
        }
     
        const [hora, minuto] = horarioInput.split(':');
        data = new Date();
        data.setHours(hora, minuto, 0); 
    }

    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/fotomanha.png';
        document.body.style.background = '#faebb7';
        document.body.classList.add('tema-manha'); 
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.png';
        document.body.style.background = '#f0b000';
        document.body.classList.remove('tema-manha');
    } else {
        img.src = 'imagens/fotonoite.png';
        document.body.style.background = '#29304b';
        document.body.classList.remove('tema-manha');
    }
}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
        window.alert('Ano Inválido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.paddingTop = '12px'
    }
}