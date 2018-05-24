// EVENT BUBBLING
/*
  An event triggeredd by this child should cause the the parent to be triggered
 */
// Child
document.querySelector('.card-title').addEventListener('click', function () {
  console.log('CARD-TITLE - i am clicking this task list title.');
})

// Parents
document.querySelector('.card-content').addEventListener('click', function () {
  console.log('CARD CONTENT - This was triggered by a click on card title.');
})
document.querySelector('.card').addEventListener('click', function () {
  console.log('CARD - This was triggered by a click on card title.');
})
document.querySelector('.col').addEventListener('click', function () {
  console.log('COL - This was triggered by a click on card title.');
})