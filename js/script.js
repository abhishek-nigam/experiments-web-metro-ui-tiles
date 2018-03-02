// var grid = document.querySelector('.grid');
// console.log(grid);

var grid_items = document.querySelector('.grid').children;
var temp_overlay = document.querySelector('.overlay-container');
var temp_close_btn = document.querySelector('.overlay-close-btn');

// console.log(grid_items);

for (var i=0; i<grid_items.length; i++) {
    grid_items[i].addEventListener('click', function(){
        // console.log('Grid item clicked');
        temp_overlay.classList.add('show-overlay');
        scroll(0,0);
    })
}

temp_close_btn.addEventListener('click', function(){
    temp_overlay.classList.remove('show-overlay');
});