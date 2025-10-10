function tocaSomPom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play;
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listadeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listadeTeclas.length; contador ++){

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classlist[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSomPom(idAudio);
    }
    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classlist.add('ativa');
        }
    }
}
listadeTeclas[0].onclick = tocaSomPom;