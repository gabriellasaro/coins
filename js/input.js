document.querySelectorAll('.price .values .coin')[0].addEventListener("click", function () {
    let input = document.querySelector('.price .values .coin input[name="c1"]');
    window.setTimeout(function () {
        input.select();
        input.focus()
    }, 100)
});

document.querySelectorAll('.price .values .coin')[1].addEventListener("click", function () {
    let input = document.querySelector('.price .values .coin input[name="c2"]');
    window.setTimeout(function () {
        input.select();
        input.focus();
    }, 100)
});

document.querySelector('.price .values .coin input[name="c1"]').addEventListener("keyup", function () {
    this.value = this.value.replace('.', '');
    coin2native();
});

document.querySelector('.price .values .coin input[name="c2"]').addEventListener("keyup", function () {
    this.value = this.value.replace('.', '');
    native2coin();
});

function coin2native() {
    let c1 = document.querySelector('.price .values input[name="c1"]').value.replace(',', '.');
    let price = document.querySelector('.price .values input[name="price"]').value;
    document.querySelector('.price .values input[name="c2"]').value = (c1 * price).toLocaleString('pt-BR');
}

function native2coin() {
    let c2 = document.querySelector('.price .values input[name="c2"]').value.replace(',', '.');
    let price = document.querySelector('.price .values input[name="price"]').value;
    document.querySelector('.price .values input[name="c1"]').value = (c2 / price).toFixed(8).toString().replace('.', ',');
}
