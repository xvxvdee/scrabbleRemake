$(document).ready(function(){

    //Allows letters to snap onto board
    $("#L-1, #L-2, #L-3, #L-4, #L-5, #L-6, #L-7").draggable({

        snap: ".tile-B, .tile-L",
        snapMode: "inner"

    });
    
    function test(){
        console.log(document.getElementById("c14-1").innerHTML);
    }
    // setInterval(test,2000);

console.log("hi");

});

