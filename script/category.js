let isOpen = false;

document.getElementById("cetegory-button").addEventListener('click', function(e){

    const faDown = document.getElementById("down-arrow");
    const faup = document.getElementById("up-arrow");


    if(isOpen){
        faDown.style.display = "none"
        faup.style.display = "block"
        console.log('up');
    }
    else{
        faDown.style.display = "block"
        faup.style.display = "none"
        console.log('down');
    }

    isOpen = !isOpen
})