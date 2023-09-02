let isOpen = true;

document.getElementById("cetegory-button").addEventListener('click', function(e){

    const faDown = document.getElementById("down-arrow");
    const faup = document.getElementById("up-arrow");
    const category_ul = document.getElementById('category-lists');


    if(isOpen){
        
        faDown.style.display = "block"
        faup.style.display = "none"
        category_ul.style.height = 0
        console.log('down');
    }
    else{
        faDown.style.display = "none"
        faup.style.display = "block"
        category_ul.style.height = "240px"
        console.log('up');
    }

    isOpen = !isOpen
})