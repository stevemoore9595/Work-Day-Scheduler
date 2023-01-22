$(document).ready(function() {

  let currentDay = dayjs().format('MMMM D, YYYY h:mm A');
  document.getElementById('current-day').innerHTML = currentDay;

  $('.saveBtn').on('click', function() {
  let hour = $(this).parent().attr('id');
    let textArea = $(this).siblings('.description').val();
    localStorage.setItem(hour, textArea);
   });

   function currentHour() {
    let currentHour = dayjs().hour();
    $('.time-block').each(function(){
      let hour = parseInt($(this).attr('id'));
      if (hour < currentHour) {
        $(this).addClass('past')
      } else if (hour === currentHour){
        $(this).addClass('present')
      } else{
        $(this).addClass('future')
      }
    })
   } 

   currentHour()

   setInterval(currentHour, 15000)

   for(var i = 9; i < 18; i++){
    $('#'+i+' .description').val(localStorage.getItem(i))
   }
   
   
});
 
  
  