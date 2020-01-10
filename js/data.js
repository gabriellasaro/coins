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
