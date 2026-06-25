
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

/* I Row */

const mIRow = document.getElementById('miRow');
const iRowChildren = document.querySelectorAll('.iRow');

mIRow.addEventListener('change', function(e) {
  const isMIRowChecked = e.target.checked

  iRowChildren.forEach(child => {
    if (isMIRowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }
  })
})

