function getCripto(coin, cripto) {
    document.querySelector('.price .title .name').innerHTML = "Carregando...";

    if (sessionStorage.getItem(coin + '-' + cripto) != null) {
        console.log(cripto + ' - usando cache!');
        setDataCripto(JSON.parse(sessionStorage.getItem(coin + '-' + cripto)));
    } else {
        let h = new Headers();
        fetch('https://min-api.cryptocompare.com/data/top/exchanges/full?fsym='+cripto+'&tsym='+coin, {method: 'GET', headers: h, mode: 'cors'}).then(function(response) {
            return response.json();
        }).then(function(data) {
            setDataCripto(data['Data']);
            sessionStorage.setItem(coin + '-' + cripto, JSON.stringify(data['Data']));
        }).catch(function() {
            window.setTimeout(function(){
                alert("Error!");
            }, 300);
        });
    }
}

function setDataCripto(data) {
    let price = document.querySelector('.price');
    
    let image = price.querySelector('.title .img-coin')
    image.src = "https://www.cryptocompare.com"+data['CoinInfo']['ImageUrl'];
    image.title = data['CoinInfo']['FullName'];
    image.alt = data['CoinInfo']['FullName'];
    price.querySelector('.title .button-select .name').innerHTML = data['CoinInfo']['FullName'];

    let symbols = price.querySelectorAll('.values .coin span');
    symbols[0].innerHTML = data['AggregatedData']['FROMSYMBOL'];
    symbols[1].innerHTML = data['AggregatedData']['TOSYMBOL'];

    price.querySelector('.values .coin input[name="c1"]').value = '1';
    price.querySelector('.values .coin input[name="c2"]').value = data['AggregatedData']['PRICE'].toString().replace('.', ',');
    price.querySelector('.values .coin input[name="price"]').value = data['AggregatedData']['PRICE'].toString();

    let exchanges = document.querySelector('.content .exchanges');
    exchanges.innerHTML = '';
    for(let i = 0; i<data['Exchanges'].length; i++) {
        exchanges.appendChild(createItemExchange(data['Exchanges'][i], (i%2)));
    }
}

function createItemExchange(data, bc){
    let root = document.createElement('div');
    root.classList.add('item');
    if (bc==0) { root.classList.add('bc') }

    let title = document.createElement('p');
    title.classList.add('title');
    title.innerHTML = data['MARKET'];

    let price = document.createElement('p');
    price.classList.add('price');

    let value = document.createElement('span');
    value.innerHTML = data['TOSYMBOL']+' '+data['PRICE'].toString().replace('.', ',');

    let appreciation = document.createElement('span');
    appreciation.classList.add('txt');

    let percent = ((data['PRICE']*100)/data['OPEN24HOUR']-100).toFixed(2);

    if (percent >=0) {
        appreciation.style.color = '#3689e6';
        appreciation.innerHTML = ' +'+percent.toString().replace('.', ',')+'%';
    } else{
        appreciation.style.color = '#ed5353';
        appreciation.innerHTML = ' '+percent.toString().replace('.', ',')+'%';
    }

    price.appendChild(value);
    price.appendChild(appreciation);
    root.appendChild(title);
    root.appendChild(price);

    return root;
}

// Mostra e oculta menu das criptos
document.querySelector('.price .title .button-select').addEventListener("click", function(){
    let menu = document.querySelector('.menu');
    if (menu.style.display=="block"){
        menu.style.display = "none";
    } else{
        menu.style.display = "block";
        window.setTimeout(function(){
            document.querySelector('body').classList.add('open')
        }, 100);
    }
});

document.querySelector('body').addEventListener("click", function(){
    if (this.classList[0]=='open') {
        document.querySelector('.menu').style.display = 'none';
        this.classList.remove('open');
    }
});

function addCriptoInMenu(coin) {
    let root = document.querySelector('.menu');

    criptoList[coin].forEach((cripto) => {
        let p = document.createElement('p');
        p.appendChild(document.createTextNode(cripto.name));
        p.addEventListener('click', () => {
            getCripto(getLocalStorageByKey('defaultCoin', 'BRL'), cripto.code)
        });
        root.appendChild(p);
    })
}