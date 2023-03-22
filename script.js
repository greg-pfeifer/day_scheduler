


$(function () {
  var timeBlocks = $('.time-block')

  timeBlocks.each(function () {
    var timeBlock = $(this)
    var timeBlockHour = timeBlock.attr('id').split('-')[1]
    var timeBlockParse = parseInt(timeBlockHour)
    var currentHour = dayjs().hour()

    if (timeBlockParse < currentHour) {
      timeBlock.removeClass('present')
      timeBlock.removeClass('past')
      timeBlock.addClass('past')
    } else if (timeBlockParse > currentHour) {
      timeBlock.removeClass('present')
      timeBlock.removeClass('future')
      timeBlock.addClass('future')
    } else {
      timeBlock.removeClass('past')
      timeBlock.removeClass('future')
      timeBlock.addClass('present')
    }
  })
});

var btns = $('.time-block button');

function storeEvent() {
  var textBox = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id')

  localStorage.setItem(textBox, time)
}

btns.click(storeEvent)


$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


var today = dayjs().format('dddd MMMM D YYYY')
$('#currentDay').html(today)


