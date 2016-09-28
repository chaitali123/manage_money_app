$(document).on('nested:fieldAdded', function(event){
  // this field was just inserted into your form
  var field = event.field; 
  // it's a jQuery object already! Now you can find date input
  var selectField = field.find('.selectpicker');
  // and activate datepicker on it
  selectField.selectpicker();
})
$(document).ready(ready);
$(document).on('page:change', ready);