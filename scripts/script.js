$(document).ready(function(){

    $("#L-1, #L-2, #L-3, #L-4, #L-5, #L-6, #L-7").draggable({

        snap: ".tile-B, .tile-L",
        snapMode: "inner"
    });
    // $("#c14-1").droppable({
    //     snap: ".tile-B",
    //     snapMode: "inner",
    //     drop: function(){
    //         alert("You have completed your first drop!")
    //     }
    // })

console.log("hi");

});

