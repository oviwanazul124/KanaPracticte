
/* A Row  */

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

/* A Yoon Row */

const mAYoonRow = document.getElementById('aRowYoon');
const aYoonRowChildren = document.querySelectorAll('.aRowYoon');

mAYoonRow.addEventListener('change', function(e){

  const isMAYoonRowChecked = e.target.checked

  aYoonRowChildren.forEach(child => {
    if (isMAYoonRowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }
  })

})
