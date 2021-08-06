$(document).ready(function(){
  $("#webApp__loading").fadeOut(400);

  $('.percentages section:nth-child(1) > .progress-bar').circleProgress({
    startAngle: -1.55,
    size: 120,
      value: 1.00,
      fill: {
      color: 'crimson'
    }
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(3));
  });

  $('.percentages section:nth-child(2) .progress-bar').circleProgress({
    startAngle: -1.55,
    size: 120,
      value: 1.00,
      fill: {
      color: 'crimson'
    }
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(3));
  });

  $('.percentages section:nth-child(3) .progress-bar').circleProgress({
    startAngle: -1.55,
    size: 120,
      value: 1.00,
      fill: {
      color: 'crimson'
    }
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(3));
  });
});