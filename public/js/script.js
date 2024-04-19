document.addEventListener('DOMContentLoaded',function(){
    const allButtons = document.querySelectorAll('.serachBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

for(var i=0;i<allButtons.length;i++ ){
    allButtons[i].addEventListener('click',function(){
        searchBar.style.visibility='visible';
        searchBar.classlist.add('open');
         this.setAttribute('aria-expanded','true');
         searchInput.focus();

    })
}
searchClose.addEventListener('click',function(){
    searchBar.style.visibility='hidden';
    searchBar.classlist.remove('open');
     this.setAttribute('aria-expanded','false');
    })
});