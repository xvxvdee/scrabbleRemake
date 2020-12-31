$(document).ready(function () {
    $("#L-1,#L-2, #L-3, #L-4, #L-5, #L-6, #L-7").draggable({
      revert:"valid",
      snap: ".tile-B, .tile-L",
      snapMode: "inner",
    })

    $(".tile-B").droppable({
      activeClass:"ui-state-hover",
      hoverClass:"ui-state-active",
      drop: function(event,ui){
        $(this)
          .addClass("ui-state-highlight")
          .find("div")
          .html(u1.draggable[0].id)
      }
    })
    console.log("")



});


/*
//   //Allows letters to snap onto board
  
//   $(init);
//   // let c = ele.closest(".tile-B");
//   // if (c){
//   //     console.log("helloo", c)
//   // }

  
//   // setInterval(test,2000);

//   console.log("hi");
// });
// function init(){
//     $("#L-1, #L-2, #L-3, #L-4, #L-5, #L-6, #L-7").draggable({
//       snap: ".tile-B, .tile-L",
//       snapMode: "inner",
//     });
//       $("#L-1").droppable({
//           drop: handleDropEvent
//       });
//     }
// // function init(){
// //     $("#L-1, #L-2, #L-3, #L-4, #L-5, #L-6, #L-7").draggable({
// //       // snap: ".tile-B, .tile-L",
// //       // snapMode: "inner",
// //     });
// //       $("#L-1").droppable({
// //           drop: handleDropEvent
// //       });
// //     }

// function handleDropEvent( event, ui ) {
//     var draggable = ui.draggable;
//     alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
//   }
*/