$(document).ready(function () {
  const items = $('.top-service-announcing');
  if (items.length !== 0) {
    $(items).each(function (index) {
      const rightPlanc = $(this).children().find('.top-service-announcing__right-planc');
      if (rightPlanc.length == 0) {
        $(this).addClass('top-service-announcing--without-right-planc');
      }
    })
  }
});