//Elijah Guerrero

function btnDropClick(){
    console.log("btnDrop executed!")
    $('.content-drop').toggleClass("hide");
}

$('.email').click(function(e) {  
    document.getElementById('email').style.backgroundColor="rgba(0, 0, 0, 0.009)";
    document.getElementById('email').style.borderColor="grey";

});

//a