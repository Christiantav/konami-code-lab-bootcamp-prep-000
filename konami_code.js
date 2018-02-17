const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  function triggerKeyDown(e) {
    document.addEventListener('keydown', triggerKeyDown);
      var key = parseInt(e.detail || e.which); //returns true if either is correct- indicates button pressed

      if (key === code[index]) { //if first index matches input key, then iterate
        index++;

        if (index === code.length-1) { //if all the keys were pressed in order and iteration is complete
          alert("cheat code: initiated"); //give the alert titled atta guy
          index = 0
        }
      } else { //if criteria is not met entirely, restart at index 0
        index = 0;
      }
  }
}
