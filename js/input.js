document.querySelectorAll('.price .values .coin')[0].addEventListener("click", function(){
    let input = document.querySelector('.price .values .coin input[name="c1"]');
    window.setTimeout(function(){
        input.select();
        input.focus()
    }, 100)
});

document.querySelectorAll('.price .values .coin')[1].addEventListener("click", function(){
    let input = document.querySelector('.price .values .coin input[name="c2"]');
    window.setTimeout(function(){
        input.select();
        input.focus();
    }, 100)
});

document.querySelector('.price .values .coin input[name="c1"]').addEventListener("keyup", function(){
    this.value = this.value.replace('.', '');
    coin2native();
});

document.querySelector('.price .values .coin input[name="c2"]').addEventListener("keyup", function(){
    this.value = this.value.replace('.', '');
    native2coin();
});

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

function coin2native(){
    let c1 = document.querySelector('.price .values input[name="c1"]').value.replace(',', '.');
    let price = document.querySelector('.price .values input[name="price"]').value;
    document.querySelector('.price .values input[name="c2"]').value = (c1*price).toFixed(2).toString().replace('.', ',');
}

function native2coin(){
    let c2 = document.querySelector('.price .values input[name="c2"]').value.replace(',', '.');
    let price = document.querySelector('.price .values input[name="price"]').value;
    document.querySelector('.price .values input[name="c1"]').value = (c2/price).toFixed(8).toString().replace('.', ',');
}