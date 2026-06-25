
/*  */

const mARow = document.getElementById('mARow');
const aRowChildren = document.querySelectorAll('.aRow');

mARow.addEventListener('change', function(e){
  const isMARowChecked = e.target.checked;

  aRowChildren.forEach(child => {

    if (isMARowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }

  })

})
