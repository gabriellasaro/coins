function getData(key, val) {
  return localStorage.getItem(key) != null ? localStorage.getItem(key) : val
}

document.querySelector('.settings select[name="default"]').addEventListener("click", function(){
    localStorage.setItem('default', this.options[this.selectedIndex].value);
    localStorage.setItem('default-index', this.selectedIndex);
});

document.querySelector('.settings select[name="coin"]').addEventListener("click", function(){
  localStorage.setItem('coin', this.options[this.selectedIndex].value);
    localStorage.setItem('coin-index', this.selectedIndex);
});

if (localStorage.getItem('default-index')!=null){
  document.querySelector('.settings select[name="default"]').options[localStorage.getItem('default-index')].selected = true;
}
if (localStorage.getItem('coin-index')!=null){
  document.querySelector('.settings select[name="coin"]').options[localStorage.getItem('coin-index')].selected = true;
}


function AddCoin() {
  let menu = document.querySelectorAll('.menu p');

  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function(){
      if (menu[i].getAttribute('sym') == null){
        get_coin(menu[i].getAttribute('coin'), getData('coin', 'BRL'));
      } else {
        get_coin(menu[i].getAttribute('coin'), menu[i].getAttribute('sym'));
      }
      document.querySelector('.menu').style.display = 'none';
    });
  }
}
AddCoin();