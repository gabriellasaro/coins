function addOptionsSettingsCoin() {
    let root = document.querySelector('.settings select[name="coin"]');

    coinList.forEach(coin => {
        let opt = document.createElement('option');
        opt.appendChild(document.createTextNode(coin.name));
        opt.value = coin.code;

        root.appendChild(opt);
    })
}

function addOptionsSettingsCripto(coin) {
    let root = document.querySelector('.settings select[name="cripto"]');

    criptoList[coin].forEach(cripto => {
        let opt = document.createElement('option');
        opt.appendChild(document.createTextNode(cripto.name));
        opt.value = cripto.code;

        root.appendChild(opt);
    })
}

// Ações de início
addOptionsSettingsCoin()
addOptionsSettingsCripto(getLocalStorageByKey('defaultCoin', 'BRL'))
addCriptoInMenu(getLocalStorageByKey('defaultCoin', 'BRL'));
getCripto(getLocalStorageByKey('defaultCoin', 'BRL'), getLocalStorageByKey('defaultCripto', 'BTC'));

// Mostra as configurações padrão
if (localStorage.getItem('defaultCoin') == null) {
    localStorage.setItem('defaultCoin', 'BRL')
}
document.querySelector('.settings select[name="coin"] option[value="' + getLocalStorageByKey('defaultCoin', 'BRL') + '"]').selected = true;
document.querySelector('.settings select[name="cripto"] option[value="' + getLocalStorageByKey('defaultCripto', 'BTC') + '"]').selected = true;

// Salva a nova configuração padrão
document.querySelector('.settings select[name="coin"]').addEventListener("click", function () {
    localStorage.setItem('defaultCoin', this.options[this.selectedIndex].value);
    if (!verifyExistenceCripto(localStorage.getItem('defaultCoin'), localStorage.getItem('defaultCripto'))) {
        localStorage.removeItem('defaultCripto');
    }
    removeAllChildren('.settings select[name="cripto"]');
    addOptionsSettingsCripto(getLocalStorageByKey('defaultCoin', 'BRL'));

    removeAllChildren('.menu');
    addCriptoInMenu(this.options[this.selectedIndex].value);
    getCripto(getLocalStorageByKey('defaultCoin', 'BRL'), getLocalStorageByKey('defaultCripto', 'BTC'));
});

document.querySelector('.settings select[name="cripto"]').addEventListener("click", function () {
    localStorage.setItem('defaultCripto', this.options[this.selectedIndex].value)
});

// Fecha janela de configurações
document.querySelector('.cont-settings').addEventListener('click', function (e) {
    if (this == e.target) {
        this.style.display = 'none'
    }
})

// Mostrar janela de configurações
document.querySelector('.icon-settings').addEventListener('click', () => {
    document.querySelector('.cont-settings').style.display = 'flex';
})