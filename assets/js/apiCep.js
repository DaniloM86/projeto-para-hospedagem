let form = document.getElementById('form');
let msg = document.getElementById('alertMsg');
let template = document.getElementById('template-modal');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    if(document.querySelector('#logradouro').value == ''){
        msg.innerHTML = '<div class="alert alert-light text-center text-dark text-uppercase" role="alert">insira o nome da rua!</div>';
    }else if(document.querySelector('#localidade').value == ''){
        msg.innerHTML = '<div class="alert alert-light text-center text-dark text-uppercase" role="alert">insira o nome da cidade!</div>';
    }else if(document.querySelector('#uf').value == ''){
        msg.innerHTML = '<div class="alert alert-light text-center text-dark text-uppercase" role="alert">selecione o estado {uf}!</div>';
    }
    else{
        // continuar o código a partir daqui
        //  url 'http://viacep.com.br/';
        let dados = new FormData();
        let rua = document.querySelector('#logradouro');
        let cidade = document.querySelector('#localidade');
        let estado = document.querySelector('#uf');
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
        // let resultCep = `http://viacep.com.br/ws/01001000/json/`;
        let uri = 'https://viacep.com.br/ws/'+estado.value+'/'+cidade.value+'/'+rua.value+'/json/';
        let dadosApi = fetch(uri,options)
        .then(response => response.json())
        .then(dadosJson =>{
            dadosJson.forEach(dadosJson => {
                setTimeout(() => {
                    msg.innerHTML = '<div class="alert alert-light text-center text-dark text-uppercase f-4" role="alert">cep: ' + dadosJson.cep +' | Bairro:' + dadosJson.bairro+'!</div>';
                }, 4000);
                msg.innerHTML =`<button class="btn btn-secondary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Pesquisando...
              </button>`
                // console.log(dadosJson)
            })
    })    
    }
});



