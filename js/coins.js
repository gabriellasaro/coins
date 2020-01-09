function get_coin(coin, symbol){
    document.querySelector('.price .title .name').innerHTML = "Carregando...";
    
    fetch('https://min-api.cryptocompare.com/data/top/exchanges/full?fsym='+coin+'&tsym='+symbol).then(function(response) {
        return response.json();
    }).then(function(data) {
        data = data['Data'];

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
            exchanges.appendChild(create_item_exchange(data['Exchanges'][i], (i%2)));
        }
    }).catch(function() {
        console.log("Error!");
    });
}

function create_item_exchange(data, bc){
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

get_coin((localStorage.getItem('default') != null ? localStorage.getItem('default') : 'BTC'),(localStorage.getItem('coin') != null ? localStorage.getItem('coin') : 'BRL'));