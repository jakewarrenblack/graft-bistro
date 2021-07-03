window.addEventListener('load',function(){

    const curtain = document.getElementById('curtain');
    const curtain_button = this.document.getElementById('curtain-button');
    const nav_fixed = this.document.getElementById("nav-fixed");

    const form_curtain = document.getElementById('form-curtain');
    const form_curtain_button = document.getElementById('form-curtain-button');
    const form_curtain_close_button = document.getElementById('form-curtain-close-button');
    const book_button_contain = document.getElementById('book-button-contain');

    const menu_curtain_open_button = this.document.getElementById('menu-button');
    const menu_curtain_close_button = this.document.getElementById('menu-curtain-close-button');
    const menu_curtain = this.document.getElementById("menu-curtain");

    document.querySelectorAll('.curtain-link').forEach(function(item) {
        item.addEventListener('click',function(){
            curtain.style.transform = "translateX(-450px)";
            curtain_button.classList.add("fa-bars");
            curtain_button.classList.remove("fa-times");
            curtain_button.style.color = "white";
        })
    });

    curtain_button.addEventListener('click',function(){
        // curtain is open
        if(curtain.style.transform != "translateX(0px)"){
            curtain.style.transform = "translateX(0px)";
            curtain_button.classList.remove("fa-bars");
            curtain_button.classList.add("fa-times");
            curtain_button.style.color = "black";
            
        // curtain is closed
        }else{    
            curtain.style.transform = "translateX(-450px)";
            curtain_button.classList.add("fa-bars");
            curtain_button.classList.remove("fa-times");
            curtain_button.style.color = "white";
        }
    });

    if(window.innerWidth > 600){
        form_curtain_button.addEventListener('click',function(){
            form_curtain.style.transform = "translateX(-450px)";
            book_button_contain.style.display = "none";
        });

        form_curtain_close_button.addEventListener('click',function(){
            form_curtain.style.transform = "translateX(450px)";
            book_button_contain.style.display = "inline-block";
        });
    }else{
        form_curtain_button.addEventListener('click',function(){
            form_curtain.style.transform = "translateX(-100vw)";
            book_button_contain.style.display = "none";
        });

        form_curtain_close_button.addEventListener('click',function(){
            form_curtain.style.transform = "translateX(100vw)";
            book_button_contain.style.display = "inline-block";
        });  
    }

    menu_curtain_open_button.addEventListener('click',function(){        
        menu_curtain.style.transform = "translateY(0%)";
    });

    menu_curtain_close_button.addEventListener('click',function(){
        menu_curtain.style.transform = "translateY(100%)";
    });


    // window.addEventListener('scroll', function () {

    //         if (document.documentElement.scrollTop > 2000) {
    //             // logo.style.width = '5rem';
    //             nav_fixed.style.backgroundColor = "black";
    //         }
    //         if(document.documentElement.scrollTop < 200){
    //             // logo.style.width = '10rem';
    //             nav_fixed.style.backgroundColor = "transparent";
    //         }
        
    // });

});

