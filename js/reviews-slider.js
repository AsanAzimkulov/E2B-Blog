$(document).ready(function () {
  $('.reviewers .slider__item').on('click', (event) => {
    $('.reviewers__block__frame').removeClass('reviewers__block__frame--active');
    $(event.currentTarget).find('.reviewers__block__frame').addClass('reviewers__block__frame--active');
  })
});